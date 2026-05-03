import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('=== FORM API TEST ===');
    
    // Log the incoming request
    const body = await request.json();
    console.log('Received form data:', body);
    
    // Validate basic structure
    if (!body.name || !body.email || !body.phone) {
      console.log('Validation failed - missing required fields');
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: name, email, phone'
      }, { status: 400 });
    }
    
    // Create a unified message for both form types
    let messageContent = body.message || '';
    
    // Add booking-specific details if present
    if (body.service || body.date) {
      const bookingDetails = [];
      if (body.service) bookingDetails.push(`Service: ${body.service}`);
      if (body.date) bookingDetails.push(`Preferred Date: ${body.date}`);
      
      if (bookingDetails.length > 0) {
        messageContent = bookingDetails.join('\n') + '\n\n' + (messageContent || 'No additional message');
      }
    }
    
    console.log('Validation passed');
    
    // Test the exact same email logic as the contact API
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    console.log('Resend initialized');
    
    const emailData = {
      from: 'onboarding@resend.dev',
      to: 'shivaganeshram7@gmail.com',
      subject: `FORM TEST: New submission from ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Form API Test</h2>
          <p>This is a test from the form API endpoint.</p>
          <div style="background: #f5f5f5; padding: 15px; margin: 10px 0;">
            <strong>Patient Information:</strong><br>
            Name: ${body.name}<br>
            Email: ${body.email}<br>
            Phone: ${body.phone}<br><br>
            <strong>Message/Request:</strong><br>
            ${messageContent}
          </div>
          <p>Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      `,
    };
    
    console.log('Sending test email...');
    const result = await resend.emails.send(emailData);
    console.log('Email sent successfully:', result);
    
    return NextResponse.json({
      success: true,
      message: 'Form test successful',
      result: result
    });
    
  } catch (error) {
    console.error('Form API test error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json({
      success: false,
      error: errorMessage,
      details: 'Check server logs for more information'
    }, { status: 500 });
  }
}
