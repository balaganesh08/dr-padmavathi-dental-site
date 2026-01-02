# Dr. Padmavathi's Dental Hospital & Implant Centre

A modern, professional, and responsive dental clinic website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ **Bilingual Support**: English and Telugu language support
- ✅ **Responsive Design**: Mobile-first, works on all devices
- ✅ **SEO Optimized**: Meta tags and structured content
- ✅ **Modern UI**: Clean design with teal/blue accents
- ✅ **Fast Loading**: Optimized for performance
- ✅ **16 Services**: Comprehensive dental services showcase
- ✅ **Contact Form**: Functional contact form with validation
- ✅ **Google Maps**: Embedded location map
- ✅ **Instagram Integration**: Social media showcase
- ✅ **Floating Buttons**: Quick access to call and WhatsApp

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Icons**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About doctor section
│   ├── Services.tsx     # Services grid
│   ├── Timings.tsx      # Clinic timings
│   ├── Testimonials.tsx # Patient testimonials
│   ├── Instagram.tsx    # Instagram gallery
│   ├── Contact.tsx      # Contact form & map
│   ├── Footer.tsx       # Footer
│   ├── FloatingButton.tsx # Call/WhatsApp button
│   └── LanguageProvider.tsx # Language context
└── lib/
    └── translations.ts   # Translation data
```

## Customization

### Update Contact Information

Edit the contact details in:
- `components/Contact.tsx` - Phone and email
- `components/Footer.tsx` - Footer contact info
- `components/Header.tsx` - Call button number

### Update Services

Modify services in `lib/translations.ts` under `services.items`.

### Update Google Maps

Replace the iframe src in `components/Contact.tsx` with your clinic's Google Maps embed URL.

### Update Instagram

Change the Instagram URL in:
- `components/Instagram.tsx`
- `components/Footer.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## SEO Configuration

SEO meta tags are configured in `app/layout.tsx`. Update:
- Title
- Description
- Keywords
- Open Graph tags

## Language Support

The website supports English and Telugu. Translations are stored in `lib/translations.ts`. To add more languages:

1. Add language code to `Language` type
2. Add translations object to `translations` object
3. Update language switcher in `components/Header.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© Dr. Padmavathi's Dental Hospital & Implant Centre. All Rights Reserved.

