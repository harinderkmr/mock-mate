// import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import WelcomeEmail from '@/emails/WelcomeEmail';

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Use secure variable name
// function getClient() {
//   return neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
// }

export async function POST(request) {
  // const sql = getClient();

  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return Response.json({ message: 'Invalid email address.' }, { status: 400 });
    }

    // ✅ Insert email into subscribers table
    await sql`
      INSERT INTO subscribers (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING
    `;

    // 2. Send welcome email
    await resend.emails.send({
      from: 'MockMate <onboarding@resend.dev>', // Or use your domain
      to: email,
      subject: 'Welcome to MockMate! 🎉',
      react: WelcomeEmail({ userEmail: email }),
    });

    return Response.json({ message: 'Subscribed successfully!' });
  } catch (error) {
    console.error('❌ Subscription error:', error);
    return Response.json({ message: 'Server error' }, { status: 500 });
  }
}
