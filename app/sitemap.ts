import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drpadmavathidental.com';
  
  // Main pages
  const routes = [
    '',
    '/about',
    '/specialties',
    '/gallery',
    '/blog',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Treatment pages
  const treatments = [
    'dental-implants',
    'braces-aligners',
    'root-canal-treatment',
    'teeth-whitening',
  ].map(treatment => ({
    url: `${baseUrl}/treatments/${treatment}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Service pages
  const services = [
    'braces',
    'bridge',
    'clear-aligners',
    'crowns',
    'dentures',
    'fillings',
    'gap-closure',
    'gum-treatment',
    'implants',
    'kids-dentistry',
    'laser-dentistry',
    'night-guard',
    'root-canal',
    'scaling',
    'smile-designing',
    'teeth-whitening',
    'veneers',
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog posts
  const blogPosts = [
    'teeth-whitening-guide-kakinada',
    'root-canal-myths-facts-kakinada',
    'dental-emergency-kakinada',
    'braces-clear-aligners-kakinada',
    'oral-hygiene-tips-kakinada',
    'best-dentist-kakinada-guide',
    'dental-implants-vs-dentures-kakinada',
    'kids-dental-care-kakinada',
    'gum-disease-prevention-kakinada',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...treatments, ...services, ...blogPosts];
}

