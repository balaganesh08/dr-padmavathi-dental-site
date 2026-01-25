import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { servicesData } from '@/lib/servicesData';

const serviceData = servicesData.scaling;

export const metadata: Metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDescription,
  keywords: serviceData.keywords,
  openGraph: {
    title: serviceData.metaTitle,
    description: serviceData.metaDescription,
    type: 'website',
  },
};

export default function ScalingPage() {
  return <ServicePageTemplate {...serviceData} />;
}
