import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    resendApiKey: process.env.RESEND_API_KEY ? {
      exists: true,
      length: process.env.RESEND_API_KEY.length,
      prefix: process.env.RESEND_API_KEY.substring(0, 10) + '...'
    } : {
      exists: false,
      message: 'RESEND_API_KEY not found in environment'
    },
    nodeEnv: process.env.NODE_ENV,
    allEnvKeys: Object.keys(process.env).filter(key => key.includes('RESEND') || key.includes('EMAIL'))
  });
}
