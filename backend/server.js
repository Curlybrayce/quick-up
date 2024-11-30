const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // For managing environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Outlook, SendGrid, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email from .env file
    pass: process.env.EMAIL_PASS  // App password or email password from .env file
  }
});

// Validate email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Form submission route
app.post('/submit-financial-form', async (req, res) => {
  try {
    const { firstname, lastname, email, phoneNumber, edulevel, school, aidType, additionalDetails } = req.body;

    // Validate input
    if (!firstname || !lastname || !email || !phoneNumber || !edulevel) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    // Email configuration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: 'New Financial Aid Application',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Financial Aid Application Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>First Name:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${firstname}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Last Name:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${lastname}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone Number:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phoneNumber}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Education Level:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${edulevel}</td>
            </tr>
            ${school ? `
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>School:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${school}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Aid Type:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${aidType}</td>
            </tr>
            ${additionalDetails ? `
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Additional Details:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${additionalDetails}</td>
            </tr>` : ''}
          </table>
        </div>
      `,
      replyTo: email
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    res.status(200).json({ 
      message: 'Financial aid application submitted successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      message: 'Failed to submit financial aid application', 
      error: error.message 
    });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { name, email, password, interests } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    // Email configuration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: 'New User Registration',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New User Registration</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            ${interests && interests.length > 0 ? `
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Interests:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${interests.join(', ')}</td>
            </tr>` : ''}
          </table>
          <p><em>Note: For security reasons, password is not displayed in this email.</em></p>
        </div>
      `,
      replyTo: email
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Registration email sent:', info.response);

    res.status(200).json({ 
      message: 'Registration successful',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      message: 'Registration failed', 
      error: error.message 
    });
  }
});

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Server is shutting down');
  process.exit(0);
});



// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');

// // Load environment variables
// dotenv.config();

// // Connect Database
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Define Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/users', require('./routes/users'));
// app.use('/api/courses', require('./routes/courses'));

// // Error Handling Middleware
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });