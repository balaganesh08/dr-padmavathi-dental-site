import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Dental Health Blog | Expert Tips & Advice | Dr. Padmavathi Dental Clinic Kakinada',
  description: 'Read expert dental health tips, oral care guides, and treatment information from Dr. Padmavathi\'s dental clinic in Kakinada. Stay informed about your dental health.',
  keywords: 'dental blog Kakinada, oral health tips, dental care advice, teeth care, gum health, dental hygiene Kakinada',
};

export default function BlogPage() {
  const blogs = [
    {
      slug: 'teeth-whitening-guide-kakinada',
      title: 'Professional Teeth Whitening in Kakinada: Complete Guide 2026',
      excerpt: 'Everything you need to know about professional teeth whitening in Kakinada. Learn about procedures, costs, benefits, and how to maintain your bright smile.',
      image: 'https://images.pexels.com/photos/3845630/pexels-photo-3845630.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'January 24, 2026',
      readTime: '6 min read',
      category: 'Cosmetic Dentistry'
    },
    {
      slug: 'root-canal-myths-facts-kakinada',
      title: '10 Root Canal Myths Debunked by Kakinada Dentists',
      excerpt: 'Scared of root canals? Learn the truth! Expert dentists in Kakinada debunk common myths about root canal treatment and explain why it\'s painless.',
      image: 'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'January 22, 2026',
      readTime: '5 min read',
      category: 'Treatments'
    },
    {
      slug: 'dental-emergency-kakinada',
      title: 'Dental Emergencies in Kakinada: What to Do & Where to Go',
      excerpt: 'Quick guide to handling dental emergencies in Kakinada. Know when to seek immediate care and how to manage common dental emergencies at home.',
      image: 'https://images.pexels.com/photos/6627456/pexels-photo-6627456.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'January 20, 2026',
      readTime: '7 min read',
      category: 'Emergency Care'
    },
    {
      slug: 'braces-clear-aligners-kakinada',
      title: 'Braces vs Clear Aligners: Which is Better for You in Kakinada?',
      excerpt: 'Detailed comparison of traditional braces and clear aligners in Kakinada. Cost, duration, effectiveness, and patient experiences explained.',
      image: 'https://images.pexels.com/photos/6528874/pexels-photo-6528874.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'January 18, 2026',
      readTime: '8 min read',
      category: 'Orthodontics'
    },
    {
      slug: 'oral-hygiene-tips-kakinada',
      title: '15 Daily Oral Hygiene Tips from Top Dentists in Kakinada',
      excerpt: 'Master your oral hygiene routine with expert tips from Kakinada dentists. Simple daily habits that prevent cavities, gum disease, and bad breath.',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'January 16, 2026',
      readTime: '6 min read',
      category: 'Prevention'
    },
    {
      slug: 'best-dentist-kakinada-guide',
      title: 'Complete Guide to Choosing the Best Dentist in Kakinada',
      excerpt: 'Finding the right dentist in Kakinada for your family\'s dental needs. Learn what to look for in a dental clinic, questions to ask, and how to ensure quality care.',
      image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'January 15, 2026',
      readTime: '5 min read',
      category: 'Dental Care'
    },
    {
      slug: 'dental-implants-vs-dentures-kakinada',
      title: 'Dental Implants vs Dentures: Which is Right for You in Kakinada?',
      excerpt: 'Comprehensive comparison of dental implants and dentures. Understand costs, benefits, procedures, and make an informed decision for tooth replacement in Kakinada.',
      image: 'https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'January 10, 2026',
      readTime: '7 min read',
      category: 'Treatments'
    },
    {
      slug: 'kids-dental-care-kakinada',
      title: 'Essential Kids Dental Care Tips Every Kakinada Parent Should Know',
      excerpt: 'Expert pediatric dental care advice for parents in Kakinada. From first tooth to teenage years, learn how to maintain your child\'s oral health.',
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'January 5, 2026',
      readTime: '6 min read',
      category: 'Pediatric Dentistry'
    },
    {
      slug: 'gum-disease-prevention-kakinada',
      title: 'How to Prevent Gum Disease: Expert Advice from Kakinada Dentists',
      excerpt: 'Comprehensive guide to preventing gum disease in Kakinada. Learn about causes, symptoms, treatments, and prevention strategies for healthy gums.',
      image: 'https://images.pexels.com/photos/6528846/pexels-photo-6528846.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'January 3, 2026',
      readTime: '7 min read',
      category: 'Gum Health'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-green-600 py-20 pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Dental Health Blog
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                Expert advice and tips for maintaining optimal oral health from Dr. Padmavathi's Dental Clinic, Kakinada
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article key={blog.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <Link href={`/blog/${blog.slug}`}>
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          {blog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          {blog.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                        {blog.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center text-teal-600 font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-teal-50 to-green-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Expert Dental Care in Kakinada?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book an appointment with Dr. Padmavathi for personalized dental solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:8501802222"
                className="btn-primary"
              >
                Call 8501802222
              </a>
              <Link href="/#contact" className="btn-secondary">
                Book Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
