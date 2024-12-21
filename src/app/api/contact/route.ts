interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const { name, email, message }: ContactFormData = await req.json();

    // Handle form data (e.g., save it, send an email, etc.)
    console.log('Form data received:', { name, email, message });
    // Simulate async operation (like sending an email)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return new Response(JSON.stringify({ message: 'Form submitted successfully' }), {
      status: 200,
    });
  } catch {
    return new Response(
      JSON.stringify({ message: 'An error occurred. Please try again later.' }),
      { status: 500 }
    );
  }
}
