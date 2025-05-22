export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image: string;
}

export interface CaseStudy {
  id: number;
  client: string;
  title: string;
  description: string;
  results: string[];
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}