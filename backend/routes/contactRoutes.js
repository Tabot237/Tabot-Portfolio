const express = require("express");
const { Resend } = require("resend");
const Message = require("../models/Message");

const resend = new Resend(process.env.RESEND_API_KEY);

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    // Prevent extremely long messages
    if (message.trim().length > 2000) {
      return res.status(400).json({
        success: false,
        message: "Message must be 2000 characters or less",
      });
    }

    // Save message to MongoDB
    const newMessage = new Message({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    await newMessage.save();

    console.log("New contact message saved:", newMessage);

    // Send notification email
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["delivered@resend.dev"],
        subject: `New portfolio message from ${name.trim()}`,
        text: `
Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}
        `,
      });

      console.log("Notification email sent successfully");
    } catch (emailError) {
      console.error(
        "Message saved, but notification email failed:",
        emailError.message
      );
    }

    // Tell frontend the message was received
    res.status(201).json({
      success: true,
      message: "Message received successfully",
    });
  } catch (error) {
    console.error("Error saving contact message:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to save message",
    });
  }
});

module.exports = router;