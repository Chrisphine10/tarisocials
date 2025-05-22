import { Service, Testimonial, CaseStudy, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Social Media Management',
    description: 'Complete management of your social media accounts across all major platforms. We create engaging content, schedule posts, and analyze performance to grow your following.',
    icon: 'LayoutGrid',
  },
  {
    id: 2,
    title: 'Content Creation',
    description: 'Professional content creation services including photography, videography, graphic design, and copywriting tailored to your brand voice and audience.',
    icon: 'FileEdit',
  },
  {
    id: 3,
    title: 'Paid Advertising',
    description: 'Strategic ad campaigns across social platforms to increase brand awareness, drive traffic, and generate leads with optimized targeting and budget management.',
    icon: 'TrendingUp',
  },
  {
    id: 4,
    title: 'Influencer Marketing',
    description: 'Connect with relevant influencers in your niche to amplify your message and reach new audiences through authentic partnerships.',
    icon: 'Users',
  },
  {
    id: 5,
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics and regular reporting to track campaign performance, audience insights, and ROI with actionable recommendations.',
    icon: 'BarChart',
  },
  {
    id: 6,
    title: 'Social Media Strategy',
    description: 'Customized social media strategies aligned with your business goals, target audience, and industry trends to maximize your online presence.',
    icon: 'Lightbulb',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'Nature Wellness',
    testimonial: 'Tari Socials transformed our social media presence completely. Their strategic approach and creative content increased our engagement by 200% in just three months.',
    image: 'https://i.postimg.cc/RVZvKL62/customer-1.png',
  },
  {
    id: 2,
    name: 'Michael Odhiambo',
    position: 'CEO',
    company: 'Tech Innovations Kenya',
    testimonial: 'Working with Tari Socials has been a game-changer for our brand. Their team understands our audience and delivers content that resonates and converts.',
    image: 'https://i.postimg.cc/KjJFCRV9/customer-2.png',
  },
  {
    id: 3,
    name: 'Amina Wanjiku',
    position: 'Founder',
    company: 'Afro Cuisine',
    testimonial: 'The team at Tari Socials doesn\'t just manage our social media; they\'ve become an extension of our brand. Their creativity and responsiveness make them invaluable partners.',
    image: 'https://i.postimg.cc/VvYm7j7r/customer-3.png',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: 'Safari Adventures',
    title: 'Increasing Bookings Through Targeted Social Campaigns',
    description: 'We revamped Safari Adventures\' social media strategy to showcase authentic experiences and target international tourists planning trips to Kenya.',
    results: [
      '156% increase in engagement',
      '43% growth in direct bookings',
      '78% increase in website traffic from social media'
    ],
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    client: 'Nairobi Brew House',
    title: 'Building Brand Awareness for a New Local Business',
    description: 'We helped launch Nairobi Brew House\'s social presence from scratch, creating a distinctive brand voice and visual identity across platforms.',
    results: [
      'Reached 50,000 followers in 6 months',
      '32% increase in physical store visits',
      'Featured in 3 major food publications'
    ],
    image: 'https://images.pexels.com/photos/1267360/pexels-photo-1267360.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    client: 'Afro Fashion Week',
    title: 'Driving Event Attendance Through Social Media',
    description: 'We created a comprehensive social media campaign to promote Afro Fashion Week, including influencer partnerships and exclusive content.',
    results: [
      'Sold out event (5,000+ attendees)',
      '2.3 million social media impressions',
      '400% ROI on social media ad spend'
    ],
    image: 'https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];