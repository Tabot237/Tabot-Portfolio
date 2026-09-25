const mongoose = require("mongoose");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

let cachedConnection = null;

const connectDB = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  cachedConnection = await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 8000,
    connectTimeoutMS: 8000,
  });

  return cachedConnection;
};

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        message: "Method not allowed",
      }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");

    if (!name || !name.trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Name is required",
        }),
      };
    }

    if (!email || !email.trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Email is required",
        }),
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Please provide a valid email address",
        }),
      };
    }

    if (!message || !message.trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Message is required",
        }),
      };
    }

    if (message.trim().length > 2000) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Message must be 2000 characters or less",
        }),
      };
    }

    await connectDB();

    const newMessage = new Message({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    await newMessage.save();

    console.log("New contact message saved:", newMessage._id);

    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["tabot.promediasarl@gmail.com"],
        subject: `New portfolio message from ${name.trim()}`,
        text: `Name: ${name.trim()}

Email: ${email.trim()}

Message:

${message.trim()}`,
      });

      console.log("Notification email sent successfully");
    } catch (emailError) {
      console.error(
        "Message saved, but notification email failed:",
        emailError.message
      );
    }

    return {
      statusCode: 201,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        message: "Message received successfully",
      }),
    };
  } catch (error) {
    console.error("Error saving contact message:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        message: "Failed to save message",
      }),
    };
  }
};