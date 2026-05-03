import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    console.log('Testing email API...');
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('API Key length:', process.env.RESEND_API_KEY?.length);

    // Test sending a simple email
    const emailData = {
      from: 'onboarding@resend.dev',
      to: 'shivaganeshram7@gmail.com',
      subject: 'Test Email from Dental Clinic',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Test Email</h2>
          <p>This is a test email to verify the Resend API is working correctly.</p>
          <p>Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      `,
    };

    console.log('Sending test email...');
    const result = await resend.emails.send(emailData);
    console.log('Email sent successfully:', result);

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      result: result
    });

  } catch (error) {
    console.error('Test email error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json({
      success: false,
      error: errorMessage,
      details: {
        apiKeyExists: !!process.env.RESEND_API_KEY,
        apiKeyLength: process.env.RESEND_API_KEY?.length,
        apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 10) + '...'
      }
    }, { status: 500 });
  }
}
