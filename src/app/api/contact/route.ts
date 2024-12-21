import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parse the form data from the request
    const { name, email, phone, businessName, message } = await req.json();

    // Create a transporter using Gmail's SMTP server
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password or App Password (re«ommended)
      },
    });

    // Set up the email data
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'shortestpathc@gmail.com', // The recipient email
      subject: 'Contact Form - Shortest Path',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness Name: ${businessName}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'There was an error. Please try again.' }),
      { status: 500 }
    );
  }
}
