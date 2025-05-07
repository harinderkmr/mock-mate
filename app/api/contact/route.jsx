import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    await sql`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject}, ${message})
    `;

    return Response.json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
    });
  }
}
