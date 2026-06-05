const fs = require('fs');
const path = require('path');

// Create .env.local file with Resend API key
const envContent = `# Resend API Key for email service
RESEND_API_KEY=your_resend_api_key_here
`;

const envPath = path.join(__dirname, '.env.local');

try {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env.local file created successfully!');
  console.log('📧 Email service is now ready to use.');
  console.log('');
  console.log('Next steps:');
  console.log('1. Update recipient email in app/api/contact/route.ts');
  console.log('2. Run: npm install');
  console.log('3. Run: npm run dev');
} catch (error) {
  console.error('❌ Error creating .env.local file:', error.message);
  console.log('');
  console.log('Please create the file manually with this content:');
  console.log(envContent);
}
