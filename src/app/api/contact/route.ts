import { render } from "@react-email/components";
import { WelcomeEmail } from "../../components/WelcomeEmail";
import React from "react";
import { sendMail } from "@/app/services/emailService";

export async function POST(req: Request) {
  try {
    // Parse the form data from the request
    const { name, email, phone, businessName, message } = await req.json();

    // Send the email to Shortest Path
    const businessOwnerEmail = "shortestpathc@gmail.com";
    const subject = "Contact Form - Shortest Path";
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness Name: ${businessName}\nMessage: ${message}`;
    await sendMail(businessOwnerEmail, subject, text);

    // Send the email to client
    const emailHtml = await render(React.createElement(WelcomeEmail));
    const clientSubject = "Welcome to ShortestPath Consulting";

    await sendMail(email, clientSubject, "", emailHtml);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Error sending email", { status: 500 });
  }
}
