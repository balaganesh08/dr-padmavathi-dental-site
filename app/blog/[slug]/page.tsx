import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiCalendar, FiClock, FiArrowLeft, FiPhone } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
      points?: string[];
    }[];
  };
  schema: any;
}

const blogPosts: Record<string, BlogPost> = {
  'best-dentist-kakinada-guide': {
    slug: 'best-dentist-kakinada-guide',
    title: 'Complete Guide to Choosing the Best Dentist in Kakinada',
    excerpt: 'Finding the right dentist in Kakinada for your family\'s dental needs.',
    image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'January 15, 2026',
    readTime: '5 min read',
    category: 'Dental Care',
    content: {
      introduction: 'Choosing the right dentist is one of the most important healthcare decisions you\'ll make for your family. In Kakinada, with numerous dental clinics available, finding a trusted dental professional who meets your specific needs can be overwhelming. This comprehensive guide will help you make an informed decision.',
      sections: [
        {
          heading: 'Why Choosing the Right Dentist Matters',
          content: 'Your dentist plays a crucial role in maintaining not just your oral health, but your overall wellbeing. Poor dental care can lead to serious health complications, while good dental care can prevent problems before they start. In Kakinada, where modern dental technology meets traditional patient care, finding the right fit ensures you receive the best treatment possible.',
        },
        {
          heading: 'Key Factors to Consider When Choosing a Dentist in Kakinada',
          content: 'Several important factors should guide your decision when selecting a dental clinic in Kakinada:',
          points: [
            'Qualifications and Experience: Look for dentists with BDS, MDS, and specialized certifications like FAGE',
            'Range of Services: Ensure the clinic offers comprehensive treatments from preventive care to advanced procedures',
            'Technology and Equipment: Modern clinics with digital X-rays, laser dentistry, and advanced sterilization',
            'Location and Accessibility: Choose a conveniently located clinic in Kakinada with flexible timings',
            'Patient Reviews and Testimonials: Check Google reviews and patient feedback',
            'Emergency Care Availability: Ensure the clinic provides emergency dental services',
            'Insurance and Payment Options: Verify accepted insurance plans and payment flexibility',
            'Hygiene Standards: The clinic should maintain strict sterilization and cleanliness protocols'
          ]
        },
        {
          heading: 'Questions to Ask Your Potential Dentist',
          content: 'Before committing to a dental clinic in Kakinada, ask these important questions:',
          points: [
            'What are your qualifications and areas of specialization?',
            'How long have you been practicing in Kakinada?',
            'What emergency dental services do you provide?',
            'Do you use the latest dental technology?',
            'What are your sterilization and safety protocols?',
            'Can you provide treatment cost estimates upfront?',
            'Do you offer payment plans for expensive procedures?',
            'What is your approach to pain management?'
          ]
        },
        {
          heading: 'Red Flags to Watch Out For',
          content: 'Be cautious of dental clinics that exhibit these warning signs:',
          points: [
            'Unwilling to answer questions or explain procedures',
            'Pushing unnecessary treatments or procedures',
            'Lack of proper sterilization equipment',
            'No clear pricing or hidden costs',
            'Uncomfortable or unclean waiting areas',
            'Staff that seems rushed or inattentive',
            'No emergency contact information',
            'Outdated equipment and technology'
          ]
        },
        {
          heading: 'Why Dr. Padmavathi\'s Dental Clinic Stands Out in Kakinada',
          content: 'Dr. Padmavathi\'s dental clinic exemplifies what to look for in quality dental care in Kakinada:',
          points: [
            'Over 8+ years of specialized experience with BDS, MDS, FAGE qualifications',
            'Expert Pediatric Dentist (Pedodontist) specializing in children\'s dental care',
            '2200+ happy patients with successful treatments',
            'Comprehensive range of 17+ dental services under one roof',
            'Advanced technology including laser dentistry and digital diagnostics',
            'Flexible timings: Weekdays 5-9 PM, Sundays 10 AM-2 PM',
            'Transparent pricing and flexible payment options',
            'Emergency dental care available',
            'Strict hygiene and sterilization protocols',
            'Child-friendly environment for kids dentistry'
          ]
        },
        {
          heading: 'Making Your Final Decision',
          content: 'After researching and visiting potential dental clinics in Kakinada, trust your instincts. The right dentist will make you feel comfortable, answer all your questions, and provide clear treatment plans. Don\'t rush this decision – your oral health deserves the best care possible.',
        },
        {
          heading: 'Schedule Your Consultation Today',
          content: 'Ready to experience quality dental care in Kakinada? Book a consultation with Dr. Padmavathi to discuss your dental needs. Call 8501802222 or visit our clinic for a comprehensive dental examination. Your journey to optimal oral health starts with choosing the right dentist.',
        }
      ]
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Complete Guide to Choosing the Best Dentist in Kakinada',
      image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg',
      author: {
        '@type': 'Person',
        name: 'Dr. Padmavathi',
        jobTitle: 'Specialist Pedodontist',
        affiliation: {
          '@type': 'Organization',
          name: 'Dr. Padmavathi Dental Clinic'
        }
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dr. Padmavathi Dental Clinic',
        logo: {
          '@type': 'ImageObject',
          url: 'https://drpadmavathidental.com/logo.png'
        }
      },
      datePublished: '2026-01-15',
      dateModified: '2026-01-15',
      description: 'Comprehensive guide to finding the best dentist in Kakinada. Expert tips on choosing quality dental care for your family.'
    }
  },
  'dental-implants-vs-dentures-kakinada': {
    slug: 'dental-implants-vs-dentures-kakinada',
    title: 'Dental Implants vs Dentures: Which is Right for You in Kakinada?',
    excerpt: 'Comprehensive comparison of dental implants and dentures.',
    image: 'https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'January 10, 2026',
    readTime: '7 min read',
    category: 'Treatments',
    content: {
      introduction: 'Missing teeth can significantly impact your quality of life, affecting everything from eating and speaking to your self-confidence. In Kakinada, patients seeking tooth replacement have two primary options: dental implants and dentures. This comprehensive guide will help you understand both solutions and make the best choice for your situation.',
      sections: [
        {
          heading: 'Understanding Dental Implants',
          content: 'Dental implants are titanium posts surgically placed into your jawbone, serving as artificial tooth roots. They provide a permanent foundation for replacement teeth that look, feel, and function like natural teeth.',
          points: [
            'Permanent solution that can last a lifetime with proper care',
            'Looks and feels completely natural',
            'Preserves jawbone and prevents bone loss',
            'No impact on adjacent teeth',
            'Eat anything you want without worry',
            'Easy to clean and maintain like natural teeth',
            'Single tooth, multiple teeth, or full arch replacement possible'
          ]
        },
        {
          heading: 'Understanding Dentures',
          content: 'Dentures are removable prosthetic devices designed to replace missing teeth. They come in two types: complete dentures (for full tooth replacement) and partial dentures (for some missing teeth).',
          points: [
            'Less expensive initial investment than implants',
            'Non-surgical procedure',
            'Quicker treatment process',
            'Can replace full arch of teeth',
            'Adjustable and replaceable over time',
            'Suitable for patients with significant bone loss',
            'Removable for cleaning'
          ]
        },
        {
          heading: 'Cost Comparison in Kakinada',
          content: 'The cost is often a deciding factor for patients in Kakinada. Here\'s what you need to know:',
          points: [
            'Dental Implants: Higher upfront cost (₹25,000-₹50,000 per tooth) but lifetime investment',
            'Dentures: Lower initial cost (₹15,000-₹40,000) but may need replacement every 5-7 years',
            'Long-term value: Implants often more cost-effective over 20+ years',
            'Payment plans available at Dr. Padmavathi\'s clinic for both options',
            'Quality of materials affects pricing',
            'Hidden costs: Dentures may require adhesives, adjustments, and eventual replacement'
          ]
        },
        {
          heading: 'Pros and Cons of Dental Implants',
          content: 'Advantages of choosing dental implants:',
          points: [
            '✓ Permanent and long-lasting solution',
            '✓ Natural appearance and comfort',
            '✓ Prevents bone deterioration',
            '✓ Better chewing ability - eat any food',
            '✓ No slipping or clicking sounds',
            '✓ Maintains facial structure',
            '✓ High success rate (95-98%)',
            '✗ Higher initial cost',
            '✗ Surgical procedure required',
            '✗ Longer treatment time (3-6 months)',
            '✗ Requires adequate bone density'
          ]
        },
        {
          heading: 'Pros and Cons of Dentures',
          content: 'Advantages of choosing dentures:',
          points: [
            '✓ More affordable upfront cost',
            '✓ No surgery required',
            '✓ Faster to receive',
            '✓ Can be made for any patient',
            '✓ Easily adjusted or replaced',
            '✗ May slip or cause discomfort',
            '✗ Accelerates bone loss over time',
            '✗ Eating restrictions (avoid hard/sticky foods)',
            '✗ Speech may be affected initially',
            '✗ Requires daily removal and cleaning',
            '✗ May need frequent adjustments',
            '✗ Average lifespan 5-7 years'
          ]
        },
        {
          heading: 'Which Option is Right for You?',
          content: 'Choose Dental Implants if:',
          points: [
            'You want a permanent solution',
            'You have good overall health and adequate bone density',
            'You can afford the upfront investment',
            'You want to eat without restrictions',
            'You prefer a natural look and feel',
            'You want to prevent bone loss'
          ]
        },
        {
          heading: 'When Dentures Might Be Better',
          content: 'Consider Dentures if:',
          points: [
            'You need immediate tooth replacement',
            'Budget is a primary concern',
            'You have significant bone loss or health issues preventing surgery',
            'You need to replace a full arch of teeth quickly',
            'You prefer a non-surgical option',
            'You\'re comfortable with removable prosthetics'
          ]
        },
        {
          heading: 'The Best Choice at Dr. Padmavathi\'s Dental Clinic in Kakinada',
          content: 'At Dr. Padmavathi\'s clinic, we offer both dental implants and high-quality dentures. During your consultation, we\'ll assess your oral health, discuss your goals and budget, and recommend the best solution. Many patients also benefit from implant-supported dentures, combining the stability of implants with the coverage of dentures. Call 8501802222 to schedule your consultation and explore your tooth replacement options.',
        }
      ]
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Dental Implants vs Dentures: Which is Right for You in Kakinada?',
      image: 'https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg',
      author: {
        '@type': 'Person',
        name: 'Dr. Padmavathi',
        jobTitle: 'Specialist Pedodontist'
      },
      datePublished: '2026-01-10',
      description: 'Complete comparison of dental implants vs dentures for Kakinada patients. Cost, benefits, and which option is right for you.'
    }
  },
  'kids-dental-care-kakinada': {
    slug: 'kids-dental-care-kakinada',
    title: 'Essential Kids Dental Care Tips Every Kakinada Parent Should Know',
    excerpt: 'Expert pediatric dental care advice for parents in Kakinada.',
    image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'January 5, 2026',
    readTime: '6 min read',
    category: 'Pediatric Dentistry',
    content: {
      introduction: 'As a parent in Kakinada, ensuring your child\'s dental health is crucial for their overall development and confidence. Dr. Padmavathi, a specialist pediatric dentist (Pedodontist) with MDS and FAGE qualifications, shares essential tips to keep your child\'s smile healthy from infancy through teenage years.',
      sections: [
        {
          heading: 'When Should Kids Start Visiting the Dentist in Kakinada?',
          content: 'The American Academy of Pediatric Dentistry recommends that children have their first dental visit by their first birthday or within six months of their first tooth erupting. In Kakinada, many parents wait too long, often bringing children only when problems arise. Early dental visits help:',
          points: [
            'Establish a dental home for your child',
            'Detect early signs of tooth decay',
            'Provide parents with oral hygiene guidance',
            'Make children comfortable with dental visits',
            'Prevent dental anxiety and fear',
            'Monitor proper tooth and jaw development'
          ]
        },
        {
          heading: 'Age-Wise Dental Care Guide for Kakinada Parents',
          content: 'Infants (0-1 year): Even before teeth appear, clean your baby\'s gums with a soft, damp cloth after feeding. Once teeth emerge, use an infant toothbrush with water (no toothpaste yet).',
        },
        {
          heading: 'Toddlers (1-3 years)',
          content: 'This is when dental care becomes crucial:',
          points: [
            'Use a rice-grain sized amount of fluoride toothpaste',
            'Brush twice daily - morning and before bed',
            'Schedule dental check-ups every 6 months',
            'Avoid prolonged bottle feeding, especially at bedtime',
            'Limit sugary snacks and drinks',
            'Start teaching your child to spit out toothpaste',
            'Consider fluoride treatments at Dr. Padmavathi\'s clinic'
          ]
        },
        {
          heading: 'Preschoolers (3-5 years)',
          content: 'At this age, children can start learning proper brushing techniques:',
          points: [
            'Increase toothpaste to pea-sized amount',
            'Supervise brushing to ensure thoroughness',
            'Begin teaching gentle flossing',
            'Make dental care fun with songs and timers',
            'Regular dental cleanings every 6 months',
            'Consider dental sealants to prevent cavities',
            'Address thumb-sucking habits if persistent'
          ]
        },
        {
          heading: 'School-Age Children (6-12 years)',
          content: 'As permanent teeth arrive, dental care becomes even more important:',
          points: [
            'Ensure proper brushing for 2 minutes, twice daily',
            'Daily flossing becomes essential',
            'Dental sealants for newly erupted molars',
            'Monitor for orthodontic issues',
            'Sports mouthguards if playing contact sports',
            'Limit sugary snacks and sodas',
            'Professional fluoride treatments',
            'Early cavity detection and treatment'
          ]
        },
        {
          heading: 'Common Dental Problems in Kakinada Kids',
          content: 'Based on Dr. Padmavathi\'s experience treating over 2200 patients in Kakinada, these are the most common pediatric dental issues:',
          points: [
            'Early Childhood Caries (Baby Bottle Tooth Decay): Caused by prolonged exposure to sugary liquids',
            'Thumb Sucking and Pacifier Use: Can affect tooth alignment if continued beyond age 3',
            'Tooth Grinding (Bruxism): Common in stressed children or those with misaligned teeth',
            'Premature Tooth Loss: Due to decay or injury, affecting permanent teeth alignment',
            'Dental Anxiety: Fear of dental visits preventing necessary care',
            'Orthodontic Issues: Crowding, gaps, or misalignment requiring early intervention'
          ]
        },
        {
          heading: 'Nutrition Tips for Healthy Teeth',
          content: 'What your child eats significantly impacts their dental health:',
          points: [
            'Encourage: Milk, cheese, yogurt (calcium for strong teeth)',
            'Fresh fruits and vegetables (natural teeth cleaning)',
            'Water (especially fluoridated water)',
            'Nuts and seeds (when age-appropriate)',
            'Limit: Sticky candies and chocolates',
            'Sugary drinks including fruit juices',
            'Chips and processed snacks',
            'Avoid: Giving bottles of milk or juice at bedtime',
            'Hard candies that can chip teeth',
            'Extremely acidic foods in excess'
          ]
        },
        {
          heading: 'Making Dental Visits Fun in Kakinada',
          content: 'At Dr. Padmavathi\'s pediatric dental clinic in Kakinada, we\'ve created a child-friendly environment. Here\'s how you can prepare your child:',
          points: [
            'Read books about visiting the dentist',
            'Use positive language - avoid words like "pain" or "hurt"',
            'Let them bring a favorite toy for comfort',
            'Visit the clinic beforehand to familiarize your child',
            'Never use dental visits as punishment or threat',
            'Praise and reward brave behavior',
            'Schedule morning appointments when children are fresher',
            'Share your positive dental experiences'
          ]
        },
        {
          heading: 'Emergency Dental Care for Kids',
          content: 'Know what to do in dental emergencies common in Kakinada:',
          points: [
            'Knocked-Out Permanent Tooth: Rinse gently, try to reinsert, or keep in milk. Rush to dentist immediately',
            'Broken Tooth: Save pieces, rinse mouth with warm water, apply cold compress, call dentist',
            'Severe Toothache: Rinse with warm salt water, floss gently, give age-appropriate pain reliever, see dentist',
            'Lip or Tongue Bite: Clean area, apply cold compress, seek medical help if bleeding doesn\'t stop',
            'Keep Dr. Padmavathi\'s emergency number (8501802222) handy'
          ]
        },
        {
          heading: 'Why Choose a Pediatric Dentist in Kakinada?',
          content: 'Pediatric dentists like Dr. Padmavathi have specialized training in:',
          points: [
            'Child psychology and behavior management',
            'Growth and development of teeth and jaws',
            'Treating children with special needs',
            'Creating positive dental experiences',
            'Age-appropriate preventive care',
            'Early orthodontic assessment',
            'Gentle, child-friendly techniques'
          ]
        },
        {
          heading: 'Schedule Your Child\'s Dental Visit Today',
          content: 'Don\'t wait for dental problems to appear. At Dr. Padmavathi\'s dental clinic in Kakinada, we provide comprehensive pediatric dental care in a warm, welcoming environment. From first tooth to teenage years, we\'re here to ensure your child\'s smile stays healthy and bright. Call 8501802222 to book your appointment. Remember: Healthy baby teeth lead to healthy permanent teeth!',
        }
      ]
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Essential Kids Dental Care Tips Every Kakinada Parent Should Know',
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg',
      author: {
        '@type': 'Person',
        name: 'Dr. Padmavathi',
        jobTitle: 'Specialist Pedodontist, MDS, FAGE'
      },
      datePublished: '2026-01-05',
      description: 'Complete pediatric dental care guide for Kakinada parents. Expert tips from specialist pedodontist Dr. Padmavathi.'
    }
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogPosts[params.slug];
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: `${blog.title} | Dr. Padmavathi Dental Clinic Kakinada`,
    description: blog.excerpt,
    keywords: `${blog.category.toLowerCase()}, dental care Kakinada, ${blog.slug.replace(/-/g, ' ')}`,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      type: 'article',
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogPosts[params.slug];

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blog.schema) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-teal-600">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-teal-600">Blog</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{blog.category}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 bg-gray-900">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6">
            <FiArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                {blog.readTime}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {blog.content.introduction}
            </p>

            {blog.content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {section.content}
                </p>
                {section.points && (
                  <ul className="space-y-3 ml-6">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-12 bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-700 mb-6">
              Book an appointment with Dr. Padmavathi at our Kakinada dental clinic for expert care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:8501802222"
                className="btn-primary inline-flex items-center gap-2"
              >
                <FiPhone className="w-5 h-5" />
                Call 8501802222
              </a>
              <Link href="/#contact" className="btn-secondary">
                Book Appointment Online
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
