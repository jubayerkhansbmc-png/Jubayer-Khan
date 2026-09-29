import {
  ProfileData,
  ServiceItem,
  VideoProject,
  GraphicProject,
  ProcessStep,
  ToolItem,
  TestimonialItem,
  FAQItem,
} from '../types/portfolio';

export const initialProfileData: ProfileData = {
  creatorName: 'Mohammad Jubayer Khan',
  creatorNameBn: 'মোহাম্মদ জুবায়ের খান',
  creatorNameAr: 'محمد زبير خان',
  tagline: 'VIDEO EDITOR & GRAPHIC DESIGNER',
  headline: 'Turning Ideas Into Visual Experiences.',
  heroBio:
    'Video Editor & Graphic Designer crafting high-impact visual stories, dynamic motion graphics, and bold designs.',
  aboutIntro:
    "I create clean, engaging, and visually compelling videos and graphics.",
  aboutBio:
    'Focused on cinematic pacing, color grading, and modern visual design to turn your raw ideas into high-retention content.',
  socials: {
    facebook: 'https://www.facebook.com/md.jubayar.khan.999084/',
    instagram: 'https://www.instagram.com/robiulkhan12372/',
    linkedin: 'https://linkedin.com/in/yourprofile',
    youtube: 'https://www.youtube.com/@JubayerKhansbmc',
    whatsapp: '+8801616329372', // 01616-329372
    email: 'jubayerkhansbmc@gmail.com',
    behance: 'https://www.behance.net/gallery/256140723/Bangla-Typography-Poster-Design',
    tiktok: 'https://tiktok.com/@yourprofile',
  },
};

export const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: 'Video Editing',
    description:
      'Seamless multi-track timeline assembly, narrative pacing, sound design balance, and cinematic rhythm tailored for modern viewing formats.',
    iconName: 'Film',
    tags: ['Narrative Cuts', 'Sound Mix', 'Pacing Rhythm'],
  },
  {
    number: '02',
    title: 'Short-Form Video',
    description:
      'High-retention vertical reels, TikTok clips, and YouTube Shorts engineered with strong visual hooks, kinetic captions, and dynamic pacing.',
    iconName: 'Smartphone',
    tags: ['High Retention', 'Dynamic Hooks', 'Kinetic Text'],
  },
  {
    number: '03',
    title: 'Motion Graphics',
    description:
      'Animated logo reveals, kinetic kinetic typography, 2D/3D title sequences, and graphic lower thirds that elevate production value.',
    iconName: 'Sparkles',
    tags: ['Title Sequences', 'Lower Thirds', 'Kinetic Motion'],
  },
  {
    number: '04',
    title: 'Commercial / Promotional Video',
    description:
      'High-energy product commercials, brand anthem films, and event promos built to capture attention and communicate core value propositions.',
    iconName: 'Tv',
    tags: ['Product Promos', 'Brand Anthems', 'Launch Trailers'],
  },
  {
    number: '05',
    title: 'Graphic Design',
    description:
      'Editorial layouts, brutalist typographic posters, key visuals, digital branding collateral, and high-impact identity graphics.',
    iconName: 'LayoutGrid',
    tags: ['Key Visuals', 'Editorial Posters', 'Brand Collateral'],
  },
  {
    number: '06',
    title: 'Social Media Design',
    description:
      'Cohesive visual grids, carousel decks, campaign banners, and promotional story assets optimized for cross-platform engagement.',
    iconName: 'Share2',
    tags: ['Campaign Decks', 'Carousel Graphics', 'Visual Grids'],
  },
  {
    number: '07',
    title: 'Thumbnail Design',
    description:
      'High-CTR YouTube and social media thumbnails featuring strong subject isolation, bold typography, and strategic color contrast.',
    iconName: 'Image',
    tags: ['High CTR', 'Subject Isolation', 'Bold Focal Points'],
  },
];

export const videoProjectsData: VideoProject[] = [
  {
    id: 'vid-1',
    stepNumber: '01',
    title: 'The major problem of Bangladesh by Nafees Salim',
    category: 'Commercial Ads',
    description:
      'In-depth storytelling and documentary-style video editing dissecting socio-economic realities, produced with engaging narrative pacing and clear audio balance.',
    duration: '03:45',
    thumbnail: 'https://i.ytimg.com/vi/ibB91m735io/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=ibB91m735io',
    youtubeId: 'ibB91m735io',
    aspectRatio: '16:9',
    tags: ['Documentary', 'Storytelling', 'Video Editing'],
  },
  {
    id: 'vid-2',
    stepNumber: '02',
    title: 'Develop your skills.',
    category: 'Motion Graphics',
    description:
      'Inspirational educational edit focusing on skill acquisition, creative growth, and modern kinetic motion elements.',
    duration: '01:20',
    thumbnail: 'https://i.ytimg.com/vi/SZnIhnauhAU/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=SZnIhnauhAU',
    youtubeId: 'SZnIhnauhAU',
    aspectRatio: '16:9',
    tags: ['Skill Growth', 'Motion Graphics', 'Pacing Rhythm'],
  },
  {
    id: 'vid-3',
    stepNumber: '03',
    title: 'One cannot become the best without hard work.',
    category: 'Commercial Ads',
    description:
      'Cinematic motivational sequence structured with punchy visual cuts, rhythm-synced sound design, and focused narrative impact.',
    duration: '01:10',
    thumbnail: 'https://i.ytimg.com/vi/R-5gjpKLa4Y/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=R-5gjpKLa4Y',
    youtubeId: 'R-5gjpKLa4Y',
    aspectRatio: '16:9',
    tags: ['Cinematic Pacing', 'Sound Design', 'Storytelling'],
  },
  {
    id: 'vid-4',
    stepNumber: '04',
    title: 'Saas Animation',
    category: 'Motion Graphics',
    description:
      'Sleek SaaS software UI animation and product motion graphics showcasing interactive interfaces with smooth keyframing and modern digital aesthetics.',
    duration: '01:05',
    thumbnail: 'https://i.ytimg.com/vi/rdsmiBLIJAo/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=rdsmiBLIJAo',
    youtubeId: 'rdsmiBLIJAo',
    aspectRatio: '16:9',
    tags: ['SaaS Animation', 'Motion Graphics', 'UI Showcase'],
  },
  {
    id: 'vid-5',
    stepNumber: '05',
    title: 'Funta Product Ad',
    category: 'Reels',
    description:
      'Punchy vertical commercial product advertisement for Funta, crafted with vibrant colors, tight editing, and high-retention social hooks.',
    duration: '00:30',
    thumbnail: 'https://i.ytimg.com/vi/h04xdT9Iwww/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/h04xdT9Iwww',
    youtubeId: 'h04xdT9Iwww',
    isShorts: true,
    aspectRatio: '9:16',
    tags: ['Product Ad', 'Vertical 9:16', 'Shorts / Reels'],
  },
  {
    id: 'vid-6',
    stepNumber: '06',
    title: 'Product Ad Video',
    category: 'Reels',
    description:
      'High-impact short-form commercial showcase featuring rapid product presentation, upbeat pacing, and visual clarity designed for mobile feeds.',
    duration: '00:25',
    thumbnail: 'https://i.ytimg.com/vi/ZqkPtm1uMs8/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/ZqkPtm1uMs8',
    youtubeId: 'ZqkPtm1uMs8',
    isShorts: true,
    aspectRatio: '9:16',
    tags: ['Commercial Ad', 'Vertical 9:16', 'High Retention'],
  },
  {
    id: 'vid-7',
    stepNumber: '07',
    title: 'Application for Admission to the Small Business Management Course',
    category: 'Reels',
    description:
      'Engaging promotional announcement short for the Small Business Management Course (SBMC) with clear messaging and prominent call-to-action.',
    duration: '00:40',
    thumbnail: 'https://i.ytimg.com/vi/I59WNc7Kekg/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/I59WNc7Kekg',
    youtubeId: 'I59WNc7Kekg',
    isShorts: true,
    aspectRatio: '9:16',
    tags: ['Course Promo', 'Vertical 9:16', 'Social Shorts'],
  },
  {
    id: 'vid-8',
    stepNumber: '08',
    title: 'Video Course',
    category: 'Reels',
    description:
      'High-impact vertical course promo trailer with crisp typography, dynamic beat-matched transitions, and engaging visual hooks.',
    duration: '00:35',
    thumbnail: 'https://i.ytimg.com/vi/W8ARRjMzBEE/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/W8ARRjMzBEE',
    youtubeId: 'W8ARRjMzBEE',
    isShorts: true,
    aspectRatio: '9:16',
    tags: ['Video Course', 'Vertical 9:16', 'Social Shorts'],
  },
];

export const graphicProjectsData: GraphicProject[] = [
  {
    id: 'graph-1',
    title: 'Bangla Typography Poster Design',
    category: 'Bangla Typography & Poster',
    image: '/graphic1.jpg',
    description:
      'Minimalist editorial Bangla typography poster composition with high-contrast form and expressive letterforms, showcased on Behance.',
    externalLink: 'https://www.behance.net/gallery/256140723/Bangla-Typography-Poster-Design',
    dimensions: 'Editorial Poster',
  },
  {
    id: 'graph-2',
    title: 'Architectural Monolith — Spatial Concept',
    category: 'Visual Identity',
    image: '/graphic2.jpg',
    description:
      'Geometric concrete architecture study with warm dusk lighting and minimalist typographic hierarchy.',
    dimensions: '3840 x 2160 px',
  },
  {
    id: 'graph-3',
    title: 'Prismatic Flux — Abstract Motion Graphics',
    category: 'Motion Key Visual',
    image: '/graphic3.jpg',
    description:
      '3D neon gradient wave geometry designed as a hero key visual for dynamic motion title assets.',
    dimensions: '2800 x 3600 px',
  },
  {
    id: 'graph-4',
    title: 'Cybernetic Device — Industrial Product Visual',
    category: 'Product Key Visual',
    image: '/graphic4.jpg',
    description:
      'Dark studio product rendering featuring holographic UI elements, matte dark surfaces, and studio edge-light.',
    dimensions: '3000 x 3000 px',
  },
  {
    id: 'graph-5',
    title: 'Technological Soundwave — Audio Visual Art',
    category: 'Social Graphic & Cover',
    image: '/graphic5.jpg',
    description:
      'Cyan and cobalt audio frequency waveform artwork formatted for release artwork and promotional banners.',
    dimensions: '3000 x 3000 px',
  },
  {
    id: 'graph-6',
    title: 'Geometric Symmetry — Brand Identity Poster',
    category: 'Brand Collateral',
    image: '/graphic6.jpg',
    description:
      'Minimalist vector symmetry exploration with gold amber accents and editorial typography.',
    dimensions: '2400 x 3600 px',
  },
];

export const processStepsData: ProcessStep[] = [
  {
    number: '01',
    title: 'Brief',
    description:
      'Understanding your project objectives, target audience, brand tone, visual references, and timeline expectations.',
    details: ['Goal Definition', 'Asset Gathering', 'Visual Moodboard'],
  },
  {
    number: '02',
    title: 'Concept',
    description:
      'Developing the creative direction, editorial structure, storyboard sketches, rhythm pacing, and typography system.',
    details: ['Rough Storyboard', 'Style Exploration', 'Audio & Pacing Map'],
  },
  {
    number: '03',
    title: 'Create',
    description:
      'Executing the core video assembly, sound engineering, color grading, motion graphics, and graphic design iterations.',
    details: ['Timeline Assembly', 'Motion & Sound Design', 'Color Grading'],
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'Polishing final revisions, formatting for required display aspect ratios, and exporting master assets ready for publish.',
    details: ['Multi-Ratio Exports', 'Master Quality Archive', 'Launch Ready'],
  },
];

export const toolsData: ToolItem[] = [
  { name: 'Adobe Premiere Pro', category: 'Video Editing', iconType: 'premiere', highlight: true },
  { name: 'Adobe After Effects', category: 'Motion Graphics', iconType: 'aftereffects', highlight: true },
  { name: 'Adobe Photoshop', category: 'Graphic Design', iconType: 'photoshop', highlight: true },
  { name: 'Adobe Illustrator', category: 'Vector & Identity', iconType: 'illustrator', highlight: true },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Client testimonial will appear here.',
    author: '[Client Name Placeholder]',
    role: '[Role / Organization Placeholder]',
  },
  {
    id: 'test-2',
    quote: 'Client testimonial will appear here.',
    author: '[Client Name Placeholder]',
    role: '[Role / Organization Placeholder]',
  },
  {
    id: 'test-3',
    quote: 'Client testimonial will appear here.',
    author: '[Client Name Placeholder]',
    role: '[Role / Organization Placeholder]',
  },
];

export const faqsData: FAQItem[] = [
  {
    question: 'What services do you provide?',
    answer:
      'I specialize in end-to-end video editing (commercials, reels, promotional videos), dynamic motion graphics, color grading, sound design, as well as comprehensive graphic design including social media visuals, editorial posters, and high-CTR thumbnail design.',
  },
  {
    question: 'How can I contact you?',
    answer:
      'You can reach me directly via WhatsApp for quick discussions, send an email to my contact address, or connect through any of my linked social media profiles listed in the contact section below.',
  },
  {
    question: 'Where can I see your work?',
    answer:
      'You can explore selected video works, graphic design projects, before/after color grading breakdowns, and my featured case study directly on this portfolio. External project links and Behance/YouTube channels are also linked.',
  },
  {
    question: 'Can I discuss a project with you?',
    answer:
      'Yes, absolutely. Whether you have fully prepared footage ready for editing, need a creative storyboard from scratch, or want a custom design package, feel free to reach out via WhatsApp or email to discuss details and scheduling.',
  },
  {
    question: 'How can I request a project?',
    answer:
      'Simply send a message with your project brief, timeline, and asset links through the contact form or WhatsApp. I will review your requirements and respond promptly with next steps.',
  },
];
