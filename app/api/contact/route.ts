import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

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

    // Send email to clinic
    const emailData = {
      from: 'noreply@padmavathisdental.com',
      to: 'shivaganeshram7@gmail.com', // Clinic email for lead notifications
      subject: `New Dental Appointment Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0891b2, #16a34a); padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">New Patient Inquiry</h1>
            <p style="margin: 5px 0 0; opacity: 0.9;">Dr. Padmavathi Dental Hospital & Implant Centre</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 8px;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">Patient Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Name:</strong>
              <span style="color: #6b7280; margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Phone:</strong>
              <span style="color: #6b7280; margin-left: 10px;">
                <a href="tel:${phone}" style="color: #0891b2; text-decoration: none;">${phone}</a>
              </span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Email:</strong>
              <span style="color: #6b7280; margin-left: 10px;">
                <a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a>
              </span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #374151;">Message/Request:</strong>
              <div style="background: white; padding: 15px; border-radius: 6px; margin-top: 10px; color: #4b5563; white-space: pre-line;">
                ${messageContent}
              </div>
            </div>
            
            <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 15px; margin-top: 20px;">
              <p style="margin: 0; color: #065f46;">
                <strong>Quick Action:</strong> Call the patient at <a href="tel:${phone}" style="color: #0891b2;">${phone}</a> to schedule their appointment.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p>This inquiry was submitted via padmavathisdental.com</p>
            <p>Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `,
    };

    // Send confirmation email to patient
    const confirmationData = {
      from: 'noreply@padmavathisdental.com',
      to: email,
      subject: 'Thank you for contacting Dr. Padmavathi Dental Clinic',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0891b2, #16a34a); padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">Thank You!</h1>
            <p style="margin: 5px 0 0; opacity: 0.9;">Dr. Padmavathi Dental Hospital & Implant Centre</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 8px;">
            <h2 style="color: #1f2937; margin-bottom: 15px;">We've Received Your Message</h2>
            
            <p style="color: #4b5563; line-height: 1.6;">
              Dear ${name},<br><br>
              Thank you for contacting Dr. Padmavathi Dental Hospital & Implant Centre in Kakinada. 
              We have received your inquiry and our team will get back to you shortly to discuss your dental care needs.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 6px; margin: 20px 0; text-align: center;">
              <h3 style="color: #1f2937; margin-bottom: 15px;">Need Immediate Assistance?</h3>
              <p style="color: #6b7280; margin-bottom: 15px;">Call us directly at:</p>
              <a href="tel:8501802222" style="background: linear-gradient(135deg, #0891b2, #16a34a); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                📞 85018 02222
              </a>
            </div>
            
            <div style="color: #6b7280; font-size: 14px;">
              <p><strong>Clinic Address:</strong><br>
              Door no..7-102, suruchi foods upstairs, 7-103, road, Thimmapuram, Timmapuram, Kakinada, Andhra Pradesh 533005</p>
              
              <p style="margin-top: 10px;"><strong>Timings:</strong><br>
              Monday - Saturday: 5:00 PM - 9:00 PM<br>
              Sunday: 10:00 AM - 1:00 PM</p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p>Follow us on Instagram for dental tips and updates!</p>
            <a href="https://instagram.com/drpdmvthidental" style="color: #0891b2;">@drpdmvthidental</a>
          </div>
        </div>
      `,
    };

    // Send both emails
    const [clinicEmail, patientEmail] = await Promise.all([
      resend.emails.send(emailData),
      resend.emails.send(confirmationData)
    ]);

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      clinicEmailId: clinicEmail.data?.id,
      patientEmailId: patientEmail.data?.id
    });

  } catch (error) {
    console.error('Form submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    console.error('Error details:', {
      message: errorMessage,
      stack: errorStack,
      body: request.body
    });
    
    // Check if it's a Resend API error
    if (errorMessage.includes('Resend')) {
      console.error('Resend API Error - Check API key and email configuration');
      return NextResponse.json(
        { error: 'Email service configuration error. Please contact support.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
