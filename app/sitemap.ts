import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drpadmavathidental.com';
  
  // Main pages
  const routes = [
    '',
    '/about',
    '/specialties',
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

  // Blog posts
  const blogPosts = [
    'best-dentist-kakinada-guide',
    'dental-implants-vs-dentures-kakinada',
    'kids-dental-care-kakinada',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...treatments, ...blogPosts];
}

