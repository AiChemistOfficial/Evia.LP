const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5050;

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Email Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mekhaajith2345@gmail.com", // your Gmail
    pass: "yjoe nvbm rvvf qpjz",      // your Gmail App Password
  },
});

// ✅ Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Nodemailer connection failed:", error);
  } else {
    console.log("✅ Ready to send emails");
  }
});

// ✅ POST /Contact route
app.post("/Contact", (req, res) => {
  console.log("📩 Contact form submission received");

  const { firstname, lastname, email, phoneno, message } = req.body;

  if (!firstname || !lastname || !email || !phoneno || !message) {
    return res.status(400).json({ code: 400, status: "Missing fields" });
  }

  const fullName = `${firstname} ${lastname}`;

  const mailOptions = {
    from: `"${fullName}" <${email}>`,
    to: "mekhaajith2345@gmail.com",
    subject: "Contact Form Submission - Evia",
    html: `
      <h3>New Contact Form Message</h3>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phoneno}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error sending email:", error);
      return res.status(500).json({ code: 500, status: "Message not sent" });
    } else {
      console.log("✅ Email sent successfully:", info.response);
      return res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});


