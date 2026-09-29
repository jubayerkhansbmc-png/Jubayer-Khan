import { Language } from '../types/portfolio';

export interface TranslationDictionary {
  creatorName: string;
  profession: string;
  nav: {
    home: string;
    about: string;
    services: string;
    videoWork: string;
    graphicDesign: string;
    process: string;
    faq: string;
    contact: string;
    editInfo: string;
    workTogether: string;
    themeToggle: string;
    subtitle: string;
  };
  hero: {
    tagline: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    bio: string;
    viewWork: string;
    letsTalk: string;
    available: string;
    changePhoto: string;
    uploadTooltip: string;
    photoCredit: string;
    disc1Title: string;
    disc1Sub: string;
    disc2Title: string;
    disc2Sub: string;
    disc3Title: string;
    disc3Sub: string;
    showreelBadge: string;
    showreelSpec: string;
    showreelTitle: string;
    showreelSub: string;
    clickToPlay: string;
  };
  about: {
    badge: string;
    title: string;
    leadQuote: string;
    bio: string;
    competencies: string[];
    connectTitle: string;
    proBadge: string;
    personalWork: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    inquireRates: string;
    list: Array<{
      number: string;
      title: string;
      description: string;
      tags: string[];
    }>;
  };
  video: {
    badge: string;
    title: string;
    filterLabel: string;
    all: string;
    reels: string;
    commercial: string;
    motion: string;
    social: string;
    other: string;
    watchCut: string;
    preview: string;
  };
  graphic: {
    badge: string;
    title: string;
    subtitle: string;
    viewFull: string;
  };
  featured: {
    badge: string;
    title: string;
    tag: string;
    graded: string;
    highlight: string;
    headline: string;
    description: string;
    deliverablesTitle: string;
    deliverables: string[];
    toolsTitle: string;
    watchReel: string;
    requestSimilar: string;
  };
  beforeAfter: {
    badge: string;
    title: string;
    subtitle: string;
    beforeLabel: string;
    afterLabel: string;
    timingLabel: string;
    dragHint: string;
    toneTitle: string;
    toneSub: string;
    colorTitle: string;
    colorSub: string;
    textureTitle: string;
    textureSub: string;
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    stage: string;
    stepOf: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  tools: {
    badge: string;
    title: string;
    subtitle: string;
  };
  testimonials: {
    badge: string;
    title: string;
    placeholderNote: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items?: Array<{ question: string; answer: string }>;
  };
  cta: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    workTogether: string;
    contactMe: string;
  };
  contact: {
    badge: string;
    title: string;
    directEmail: string;
    responseTime: string;
    socialProfiles: string;
    sendMessage: string;
    formSubtitle: string;
    yourName: string;
    namePlaceholder: string;
    emailAddress: string;
    serviceRequired: string;
    serviceOptions: Array<{ label: string; value: string }>;
    projectOverview: string;
    messagePlaceholder: string;
    sendRequest: string;
    inquiryPrepared: string;
    whatsappDirect: string;
    whatsappTitle: string;
    whatsappDesc: string;
    whatsappNumber: string;
  };
  footer: {
    description: string;
    stayConnected: string;
    newsletterDesc: string;
    emailPlaceholder: string;
    subscribe: string;
    subscribed: string;
    subscribedNote: string;
    rightsReserved: string;
    taglineBottom: string;
    independent: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    creatorName: 'Mohammad Jubayer Khan',
    profession: 'Video Editor & Graphic Designer',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      videoWork: 'Video Work',
      graphicDesign: 'Graphic Design',
      process: 'Process',
      faq: 'FAQ',
      contact: 'Contact',
      editInfo: 'Edit Info',
      workTogether: "Let's Work Together",
      themeToggle: 'Theme',
      subtitle: 'VIDEO & GRAPHICS',
    },
    hero: {
      tagline: 'VIDEO EDITOR & GRAPHIC DESIGNER',
      headlinePart1: 'Turning Ideas Into',
      headlineHighlight: 'Visual',
      headlinePart2: 'Experiences.',
      bio: 'Video Editor & Graphic Designer crafting high-impact visual stories, dynamic motion graphics, and bold designs.',
      viewWork: 'View My Work',
      letsTalk: "Let's Talk",
      available: 'Available for Projects',
      changePhoto: 'Change Photo',
      uploadTooltip: 'Click to upload your custom portrait photo',
      photoCredit: 'Photo: Mohammad Jubayer Khan',
      disc1Title: 'Video Editing',
      disc1Sub: 'Pacing & Cuts',
      disc2Title: 'Motion Graphics',
      disc2Sub: 'Kinetic & 2D/3D',
      disc3Title: 'Graphic Design',
      disc3Sub: 'Editorial & Social',
      showreelBadge: 'SHOWREEL',
      showreelSpec: '4K UHD • 24 FPS',
      showreelTitle: 'Selected Cuts & Visual Motion',
      showreelSub: 'Editorial Reel',
      clickToPlay: 'Click to open player',
    },
    about: {
      badge: 'Personal Profile',
      title: 'About Me',
      leadQuote: 'I create clean, engaging, and visually compelling videos and graphics.',
      bio: 'Focused on rhythmic pacing, cinematic color timing, and editorial graphic composition to transform raw concepts into high-retention visual assets.',
      competencies: [
        'Non-Linear Editing',
        'Color Timing & LUTs',
        'Pacing & Continuity',
        'Sound Design & Foley',
        'Typography & Layout',
        'Visual Branding',
      ],
      connectTitle: 'Connect Across Platforms',
      proBadge: 'PRO',
      personalWork: '100% Personal Work',
    },
    services: {
      badge: 'Core Capabilities',
      title: 'What I Do',
      subtitle: 'High-caliber post-production and visual design services engineered to maximize audience retention.',
      inquireRates: 'Inquire for rates',
      list: [
        {
          number: '01',
          title: 'Video Editing',
          description: 'Seamless timeline assembly, narrative pacing, and sound balance tailored for cinematic impact.',
          tags: ['Narrative Cuts', 'Sound Mix', 'Pacing Rhythm'],
        },
        {
          number: '02',
          title: 'Short-Form Video',
          description: 'High-retention vertical reels, TikTok clips, and YouTube Shorts with dynamic hooks.',
          tags: ['High Retention', 'Dynamic Hooks', 'Kinetic Text'],
        },
        {
          number: '03',
          title: 'Motion Graphics',
          description: 'Animated logo reveals, kinetic typography, and title sequences that elevate production value.',
          tags: ['Title Sequences', 'Lower Thirds', 'Kinetic Motion'],
        },
        {
          number: '04',
          title: 'Commercial / Promotional Video',
          description: 'Polished promotional videos for brands, products, and campaign launches with color grading.',
          tags: ['Brand Campaigns', 'Product Showcase', 'Visual Pacing'],
        },
        {
          number: '05',
          title: 'Graphic Design',
          description: 'Impactful key visuals, typography layouts, posters, and brand identities with Swiss precision.',
          tags: ['Key Visuals', 'Layout Systems', 'Poster Design'],
        },
        {
          number: '06',
          title: 'Social Media Design',
          description: 'Cohesive visual templates, carousels, and multi-platform promotional kits.',
          tags: ['Carousels', 'Visual Kits', 'Multi-Platform'],
        },
        {
          number: '07',
          title: 'Thumbnail Design',
          description: 'High-CTR YouTube and social media thumbnails optimized for contrast and readability.',
          tags: ['High CTR', 'Visual Contrast', 'Retouching'],
        },
      ],
    },
    video: {
      badge: 'Motion & Direction',
      title: 'Selected Video Work',
      filterLabel: 'Filter:',
      all: 'All',
      reels: 'Reels',
      commercial: 'Commercial Ads',
      motion: 'Motion Graphics',
      social: 'Social Media',
      other: 'Other',
      watchCut: 'Watch Cut',
      preview: 'Preview Media →',
    },
    graphic: {
      badge: 'Visual Art & Direction',
      title: 'Graphic Design',
      subtitle: 'Editorial typography, key visual concepts, posters, and digital brand identities.',
      viewFull: 'View Full Artwork',
    },
    featured: {
      badge: 'Spotlight Case Study',
      title: 'Featured Project',
      tag: 'Commercial Film & Motion',
      graded: 'Color Graded',
      highlight: 'Case Study Highlight',
      headline: 'Aura Dynamics — Visual Film & Campaign',
      description: 'Comprehensive creative showcase emphasizing precision narrative assembly, custom color contrast curves, and synchronized sound cues.',
      deliverablesTitle: 'Creative Deliverables:',
      deliverables: [
        'Color Grading & 35mm Film Grain',
        'Custom Kinetic Title Design',
        'Spatial Sound Mix & Foley',
        'Master 4K + 9:16 Vertical Cut',
      ],
      toolsTitle: 'Tools & Stack:',
      watchReel: 'Watch Case Reel',
      requestSimilar: 'Request Similar Project',
    },
    beforeAfter: {
      badge: 'Visual Transformation',
      title: 'Before / After',
      subtitle: 'Drag the slider to compare uncorrected flat LOG footage against the final color-graded master.',
      beforeLabel: 'Before: Raw Flat Log',
      afterLabel: 'After: Cinematic Grade',
      timingLabel: 'DaVinci Resolve Color Timing',
      dragHint: 'Drag slider to evaluate grading',
      toneTitle: 'Tone Mapping',
      toneSub: 'Restoring natural shadow depth and highlight rolloff.',
      colorTitle: 'Color Timing',
      colorSub: 'Custom split-toning with rich blacks and clean skin tones.',
      textureTitle: 'Texture & Grain',
      textureSub: 'Subtle 35mm organic grain emulation for high-end film feel.',
    },
    process: {
      badge: 'Methodology',
      title: 'My Creative Process',
      subtitle: 'A structured, collaborative approach ensuring creative alignment and prompt delivery.',
      stage: 'Stage',
      stepOf: 'Step',
      steps: [
        {
          number: '01',
          title: 'Brief & Scope',
          description: 'Understanding your creative goals, brand voice, target audience, and footage requirements.',
        },
        {
          number: '02',
          title: 'Concept & Rough Cut',
          description: 'Assembly of core storylines, establishing rhythm, narrative flow, and music pacing.',
        },
        {
          number: '03',
          title: 'Polish & Color Timing',
          description: 'Refining cuts, sound design mix, titles, visual effects, and color grading.',
        },
        {
          number: '04',
          title: 'Master Delivery',
          description: 'Exporting final high-resolution 4K masters and multi-platform vertical adaptations.',
        },
      ],
    },
    tools: {
      badge: 'Technical Stack',
      title: 'Tools I Use',
      subtitle: 'Industry-standard software for editing, motion graphics, and color timing.',
    },
    testimonials: {
      badge: 'Endorsements',
      title: 'Client Testimonials',
      placeholderNote: '[Client feedback and collaborations]',
    },
    faq: {
      badge: 'Clear Answers',
      title: 'Frequently Asked Questions',
      subtitle: 'Common queries regarding collaboration, project workflows, and turnaround expectations.',
      items: [
        {
          question: 'What services do you provide?',
          answer: 'I specialize in professional video editing (commercials, reels, YouTube), dynamic motion graphics, cinematic color grading, sound design, and full graphic design including social media creatives and high-CTR thumbnails.',
        },
        {
          question: 'How can I contact you?',
          answer: 'You can reach me directly on WhatsApp for quick discussions, send an email, or connect via Facebook, YouTube, TikTok, or Behance from the contact section below.',
        },
        {
          question: 'Where can I see your work?',
          answer: 'You can explore selected video works, graphic design showcases, interactive before/after color grading, and featured case studies right on this portfolio, or visit my YouTube and Behance channels.',
        },
        {
          question: 'Can I discuss a custom project with you?',
          answer: 'Yes! Whether you have raw footage ready for editing, need a motion graphics package, or want fresh branding, reach out on WhatsApp or email to discuss timelines and scope.',
        },
        {
          question: 'What is your typical turnaround time?',
          answer: 'Short-form reels and thumbnails are typically delivered within 24–48 hours, while full commercial edits and complex motion projects range from 3 to 7 days depending on scope.',
        },
      ],
    },
    cta: {
      badge: "Let's Collaborate",
      titlePart1: 'Have a project',
      titleHighlight: 'in mind?',
      subtitle: "Whether you need video editing, motion graphics, thumbnails, or branding, let's create something remarkable.",
      workTogether: "Let's Work Together",
      contactMe: 'Contact Me',
    },
    contact: {
      badge: 'Get In Touch',
      title: 'Contact',
      directEmail: 'Direct Email',
      responseTime: 'Inquiries typically receive a response within 24 business hours.',
      socialProfiles: 'Social Profiles & Links',
      sendMessage: 'Send a Message',
      formSubtitle: 'Fill in your project scope below to launch an inquiry directly to my inbox.',
      yourName: 'Your Name',
      namePlaceholder: 'e.g. Alex Vance',
      emailAddress: 'Email Address',
      serviceRequired: 'Service Required',
      serviceOptions: [
        { label: 'Video Editing (Commercial / Long Form)', value: 'Video Editing' },
        { label: 'Short-Form Video (Reels / TikTok)', value: 'Short-Form Video' },
        { label: 'Motion Graphics & Title Sequences', value: 'Motion Graphics' },
        { label: 'Color Grading & Finishing', value: 'Color Grading' },
        { label: 'Graphic Design & Posters', value: 'Graphic Design' },
        { label: 'Thumbnail Design', value: 'Thumbnail Design' },
        { label: 'Full Creative Package', value: 'Full Creative Package' },
      ],
      projectOverview: 'Project Overview / Raw Footage Link',
      messagePlaceholder: 'Briefly describe your project, timeline, deliverables, or provide a link to footage...',
      sendRequest: 'Send Project Request',
      inquiryPrepared: 'Inquiry prepared! Check your email client or copy the message.',
      whatsappDirect: 'Direct Messaging',
      whatsappTitle: "Let's Talk on WhatsApp",
      whatsappDesc: 'Quick discussions, project feasibility checks, and instant creative consultations.',
      whatsappNumber: 'WhatsApp:',
    },
    footer: {
      description: 'Video Editor & Graphic Designer specializing in high-impact narrative cuts, dynamic motion graphics, and editorial brand design.',
      stayConnected: 'Stay Connected',
      newsletterDesc: 'Receive quarterly project breakdowns and editing workflow resources.',
      emailPlaceholder: 'Your email address',
      subscribe: 'Subscribe',
      subscribed: 'Subscribed',
      subscribedNote: 'Thank you for subscribing! (Demo subscription mode)',
      rightsReserved: 'All rights reserved.',
      taglineBottom: 'Video Editor & Graphic Designer',
      independent: 'Independent Portfolio',
    },
  },
  bn: {
    creatorName: 'মোহাম্মদ জুবায়ের খান',
    profession: 'ভিডিও এডিটর ও গ্রাফিক ডিজাইনার',
    nav: {
      home: 'হোম',
      about: 'পরিচিতি',
      services: 'সার্ভিসসমূহ',
      videoWork: 'ভিডিও কাজ',
      graphicDesign: 'গ্রাফিক ডিজাইন',
      process: 'কাজের ধাপ',
      faq: 'প্রশ্নোত্তর',
      contact: 'যোগাযোগ',
      editInfo: 'তথ্য পরিবর্তন',
      workTogether: 'চলুন একসাথে কাজ করি',
      themeToggle: 'থিম',
      subtitle: 'ভিডিও ও গ্রাফিক্স',
    },
    hero: {
      tagline: 'ভিডিও এডিটর এবং গ্রাফিক ডিজাইনার',
      headlinePart1: 'ধারণাকে রূপ দিচ্ছি',
      headlineHighlight: 'ভিজ্যুয়াল',
      headlinePart2: 'অভিজ্ঞতায়।',
      bio: 'ভিডিও এডিটর এবং গ্রাফিক ডিজাইনার। গল্পভিত্তিক ভিডিও এডিটিং, মোশন গ্রাফিক্স ও সৃজনশীল ডিজাইনে বিশেষায়িত।',
      viewWork: 'আমার কাজ দেখুন',
      letsTalk: 'কথা বলুন',
      available: 'নতুন প্রজেক্টের জন্য প্রস্তুত',
      changePhoto: 'ছবি পরিবর্তন করুন',
      uploadTooltip: 'আপনার নিজস্ব ছবি আপলোড করতে ক্লিক করুন',
      photoCredit: 'ছবি: মোহাম্মদ জুবায়ের খান',
      disc1Title: 'ভিডিও এডিটিং',
      disc1Sub: 'কাটস ও পেসিং',
      disc2Title: 'মোশন গ্রাফিক্স',
      disc2Sub: 'কাইনেটিক ও ২ডি/৩ডি',
      disc3Title: 'গ্রাফিক ডিজাইন',
      disc3Sub: 'ব্র্যান্ডিং ও সোশ্যাল',
      showreelBadge: 'শোরিল',
      showreelSpec: '৪কে আল্ট্রা এইচডি • ২৪ এফপিএস',
      showreelTitle: 'নির্বাচিত কাটস এবং মোশন ওয়ার্ক',
      showreelSub: 'এডিটোরিয়াল রিল',
      clickToPlay: 'প্লেয়ার চালু করতে ক্লিক করুন',
    },
    about: {
      badge: 'ব্যক্তিগত পরিচিতি',
      title: 'আমার সম্পর্কে',
      leadQuote: 'আমি তৈরি করি আকর্ষণীয়, দৃষ্টিনন্দন ও মানসম্পন্ন ভিডিও এবং গ্রাফিক্স।',
      bio: 'সঠিক পেসিং, সিনেমাটিক কালার গ্রেডিং এবং সুবিন্যস্ত গ্রাফিক ডিজাইনের সমন্বয়ে র ফুটেজ ও আইডিয়াকে আকর্ষণীয় কন্টেন্টে রূপান্তর করি।',
      competencies: [
        'নন-লিনিয়ার এডিটিং',
        'কালার গ্রেডিং ও লাটস',
        'পেসিং ও কন্টিনিউটি',
        'সাউন্ড ডিজাইন ও ফলি',
        'টাইপোগ্রাফি ও লেআউট',
        'ভিজ্যুয়াল ব্র্যান্ডিং',
      ],
      connectTitle: 'সোশ্যাল মিডিয়ায় যুক্ত থাকুন',
      proBadge: 'প্রো',
      personalWork: '১০০% অরিজিনাল কাজ',
    },
    services: {
      badge: 'প্রধান দক্ষতাসমূহ',
      title: 'আমি কী কী কাজ করি',
      subtitle: 'দর্শকদের ধরে রাখার মতো উচ্চমানের পোস্ট-প্রোডাকশন ও সৃজনশীল ভিজ্যুয়াল ডিজাইন সার্ভিস।',
      inquireRates: 'খরচ জানতে যোগাযোগ করুন',
      list: [
        {
          number: '০১',
          title: 'ভিডিও এডিটিং',
          description: 'সিনেমাটিক পেসিং, নিখুঁত কাট এবং পরিষ্কার সাউন্ড মিক্সিং সমৃদ্ধ ভিডিও এডিটিং।',
          tags: ['ন্যারেশন কাটস', 'সাউন্ড মিক্স', 'রিদম পেসিং'],
        },
        {
          number: '০২',
          title: 'শর্ট-ফর্ম ভিডিও (রিলস/শর্টস)',
          description: 'হাই-রিটেনশন রিলস, টিকটক ও ইউটিউব শর্টস আকর্ষণীয় হুক ও কাইনেটিক ক্যাপশন সহ।',
          tags: ['হাই রিটেনশন', 'ডায়নামিক হুক', 'ক্যাপশন'],
        },
        {
          number: '০৩',
          title: 'মোশন গ্রাফিক্স',
          description: 'অ্যানিমেটেড লোগো রিভিল, টাইটেল সিকোয়েন্স এবং আধুনিক মোশন গ্রাফিক্স।',
          tags: ['টাইটেল সিকোয়েন্স', 'লোয়ার থার্ড', 'কাইনেটিক মোশন'],
        },
        {
          number: '০৪',
          title: 'কমার্শিয়াল / প্রোমোশনাল ভিডিও',
          description: 'ব্র্যান্ড ও প্রোডাক্টের প্রচারণামূলক আকর্ষণীয় বিজ্ঞাপন ও কালার গ্রেডিং।',
          tags: ['ব্র্যান্ড ক্যাম্পেইন', 'প্রোডাক্ট শোকেস', 'ভিজ্যুয়াল পেসিং'],
        },
        {
          number: '০৫',
          title: 'গ্রাফিক ডিজাইন',
          description: 'পোস্টার, ব্যানার, টাইপোগ্রাফিক লেআউট এবং পূর্ণাঙ্গ ভিজ্যুয়াল ব্র্যান্ডিং।',
          tags: ['কি ভিজ্যুয়াল', 'লেআউট সিস্টেম', 'পোস্টার ডিজাইন'],
        },
        {
          number: '০৬',
          title: 'সোশ্যাল মিডিয়া ডিজাইন',
          description: 'সোশ্যাল মিডিয়ার জন্য ক্যারোজেল, প্রিমিয়াম পোস্ট ও প্রমোশনাল টেমপ্লেট।',
          tags: ['ক্যারোজেল', 'সোশ্যাল কিট', 'মাল্টি-প্ল্যাটফর্ম'],
        },
        {
          number: '০৭',
          title: 'থাম্বনেইল ডিজাইন',
          description: 'হাই সিটিআর (CTR) ইউটিউব ও ফেসবুক থাম্বনেইল যা ক্লিকের হার বাড়িয়ে দেয়।',
          tags: ['হাই সিটিআর', 'কনট্রাস্ট', 'ফটো রিটাচ'],
        },
      ],
    },
    video: {
      badge: 'মোশন ও ভিজ্যুয়াল ডিরেকশন',
      title: 'নির্বাচিত ভিডিও কাজসমূহ',
      filterLabel: 'ফিল্টার:',
      all: 'সকল',
      reels: 'রিলস',
      commercial: 'বিজ্ঞাপন',
      motion: 'মোশন গ্রাফিক্স',
      social: 'সোশ্যাল মিডিয়া',
      other: 'অন্যান্য',
      watchCut: 'ভিডিও দেখুন',
      preview: 'প্রিভিউ দেখুন →',
    },
    graphic: {
      badge: 'ভিজ্যুয়াল আর্ট ও ডিজাইন',
      title: 'গ্রাফিক ডিজাইন শোকেস',
      subtitle: 'এডিটোরিয়াল টাইপোগ্রাফি, পোস্টার ডিজাইন এবং ডিজিটাল ব্র্যান্ড ভিজ্যুয়াল।',
      viewFull: 'সম্পূর্ণ কাজ দেখুন',
    },
    featured: {
      badge: 'স্পটলাইট কেস স্টাডি',
      title: 'বিশেষ প্রজেক্ট',
      tag: 'কমার্শিয়াল ফিল্ম ও মোশন',
      graded: 'কালার গ্রেডেড',
      highlight: 'কেস স্টাডি হাইলাইট',
      headline: 'অরা ডায়নামিক্স — ভিজ্যুয়াল ক্যাম্পেইন',
      description: 'সিনেম্যাটিক কাট, কাস্টম কালার গ্রেডিং ও রিদম ভিত্তিক সাউন্ড ডিজাইনের একটি পূর্ণাঙ্গ উদাহরণ।',
      deliverablesTitle: 'ডেলিভারেবলস:',
      deliverables: [
        'কালার গ্রেডিং ও ৩৫ মিমি ফিল্ম গ্রেইন',
        'কাস্টম কাইনেটিক টাইটেল ডিজাইন',
        'স্পেশিয়াল সাউন্ড মিক্সিং',
        'মাস্টার ৪কে এবং ৯:১৬ ভার্টিকাল কাট',
      ],
      toolsTitle: 'ব্যবহৃত সফটওয়্যার:',
      watchReel: 'কেস রিল দেখুন',
      requestSimilar: 'একই ধরণের প্রজেক্ট চাই',
    },
    beforeAfter: {
      badge: 'ভিজ্যুয়াল রূপান্তর',
      title: 'বিফোর / আফটার',
      subtitle: 'স্লাইডারটি টেনে আনএডিটেড ফ্ল্যাট লগ ফুটের সাথে ফাইনাল কালার গ্রেডের পার্থক্য দেখুন।',
      beforeLabel: 'আগে: র ফ্ল্যাট লগ',
      afterLabel: 'পরে: সিনেমাটিক গ্রেড',
      timingLabel: 'ডাভিঞ্চি রিজলভ কালার টাইমিং',
      dragHint: 'গ্রেডিং দেখতে স্লাইডার ড্র্যাগ করুন',
      toneTitle: 'টোন ম্যাপিং',
      toneSub: 'প্রাকৃতিক শ্যাডো ডেপথ এবং হাইলাইটের ব্যালেন্স পুনরুদ্ধার।',
      colorTitle: 'কালার টাইমিং',
      colorSub: 'ডার্ক এমারেল্ড ব্ল্যাক ও পরিষ্কার স্কিন টোনের সমন্বয়।',
      textureTitle: 'টেক্সচার ও গ্রেইন',
      textureSub: 'প্রিমিয়াম ফিল্ম অনুভূতির জন্য ৩৫ মিমি অর্গানিক গ্রেইন।',
    },
    process: {
      badge: 'কাজের পদ্ধতি',
      title: 'আমার কাজের ধাপসমূহ',
      subtitle: 'একটি গোছানো ও আন্তরিক প্রক্রিয়া যা সময়মতো সেরা ডেলিভারি নিশ্চিত করে।',
      stage: 'ধাপ',
      stepOf: 'ধাপ',
      steps: [
        {
          number: '০১',
          title: 'ব্রিফ ও প্ল্যানিং',
          description: 'আপনার চাহিদা, লক্ষ্য, ব্র্যান্ড স্টাইল এবং ফুটের বিষয়বস্তু জানা ও বোঝা।',
        },
        {
          number: '০২',
          title: 'কনসেপ্ট ও ড্রাফট কাট',
          description: 'মূল গল্পের ফ্রেমওয়ার্ক তৈরি, মিউজিকের সাথে রিদম ও ড্রাফট সিকোয়েন্স।',
        },
        {
          number: '০৩',
          title: 'ফাইনাল এডিট ও কালার',
          description: 'নিখুঁত কাট, সাউন্ড ডিজাইন, মোশন গ্রাফিক্স এবং কালার গ্রেডিং সম্পন্ন করা।',
        },
        {
          number: '০৪',
          title: 'মাস্টার ডেলিভারি',
          description: 'সর্বোচ্চ রেজোলিউশনে ৪কে ও সোশ্যাল ফরম্যাটে চূড়ান্ত ফাইল হস্তান্তর।',
        },
      ],
    },
    tools: {
      badge: 'টেকনিক্যাল টুলস',
      title: 'ব্যবহৃত সফটওয়্যার',
      subtitle: 'ভিডিও এডিটিং, মোশন গ্রাফিক্স ও ডিজাইনের আন্তর্জাতিক মানের সফটওয়্যার।',
    },
    testimonials: {
      badge: 'মতামত',
      title: 'ক্লায়েন্টদের প্রতিক্রিয়া',
      placeholderNote: '[ক্লায়েন্টদের প্রতিক্রিয়া ও রিভিউ]',
    },
    faq: {
      badge: 'সাধারণ জিজ্ঞাসা',
      title: 'প্রায়শই জিজ্ঞাসিত প্রশ্নাবলি',
      subtitle: 'কাজ শুরু করা, সময়সীমা এবং ডেলিভারি সংক্রান্ত প্রয়োজনীয় প্রশ্নোত্তর।',
      items: [
        {
          question: 'আপনি কী ধরনের সার্ভিস দিয়ে থাকেন?',
          answer: 'আমি পেশাদার ভিডিও এডিটিং (রিলস, ইউটিউব, কমার্শিয়াল), মোশন গ্রাফিক্স, সিনেমাটিক কালার গ্রেডিং, সাউন্ড ডিজাইন এবং সোশ্যাল মিডিয়া পোস্টার ও হাই-সিটিআর থাম্বনেইল ডিজাইন সার্ভিস দিয়ে থাকি।',
        },
        {
          question: 'আপনার সাথে কীভাবে যোগাযোগ করা যাবে?',
          answer: 'দ্রুত আলোচনার জন্য সরাসরি হোয়াটসঅ্যাপে নক করতে পারেন, ইমেইল পাঠাতে পারেন অথবা নিচের ফেসবুক, ইউটিউব, টিকটক কিংবা বিহান্স প্রোফাইলের মাধ্যমে যোগাযোগ করতে পারেন।',
        },
        {
          question: 'আপনার পূর্ববর্তী কাজগুলো কোথায় দেখতে পারি?',
          answer: 'আমার নির্বাচিত ভিডিও কাজ, গ্রাফিক ডিজাইন প্রজেক্ট, বিফোর/আফটার কালার গ্রেডিং এবং কেস স্টাডি এই ওয়েবসাইটেই সাজানো আছে। এছাড়া আমার ইউটিউব ও বিহান্স চ্যানেলেও কাজ দেখতে পারবেন।',
        },
        {
          question: 'নতুন প্রজেক্ট নিয়ে কি সরাসরি কথা বলা যাবে?',
          answer: 'হ্যাঁ, অবশ্যই! আপনার র ফুটেজ রেডি থাকলে বা নতুন কোনো কনসেপ্ট নিয়ে কাজ করতে চাইলে সরাসরি হোয়াটসঅ্যাপ বা ইমেইলে মেসেজ দিয়ে বিস্তারিত আলোচনা করতে পারেন।',
        },
        {
          question: 'একটি কাজ ডেলিভারি দিতে সাধারণত কত সময় লাগে?',
          answer: 'শর্ট-ফর্ম ভিডিও ও থাম্বনেইল সাধারণত ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ডেলিভারি করা হয়। তবে বড় কমার্শিয়াল বা মোশন প্রজেক্টের ক্ষেত্রে ৩ থেকে ৭ দিন সময় লাগতে পারে।',
        },
      ],
    },
    cta: {
      badge: 'চলুন একসাথে কাজ করি',
      titlePart1: 'কোন প্রজেক্টের',
      titleHighlight: 'পরিকল্পনা আছে?',
      subtitle: 'ভিডিও এডিটিং, মোশন গ্রাফিক্স, থাম্বনেইল বা ব্র্যান্ড ডিজাইনের জন্য আজই যোগাযোগ করুন।',
      workTogether: 'চলুন একসাথে কাজ করি',
      contactMe: 'যোগাযোগ করুন',
    },
    contact: {
      badge: 'যোগাযোগের মাধ্যম',
      title: 'যোগাযোগ',
      directEmail: 'সরাসরি ইমেইল',
      responseTime: 'সাধারণত ২৪ ঘণ্টার মধ্যে ইনকোয়ারির উত্তর প্রদান করা হয়।',
      socialProfiles: 'সোশ্যাল প্রোফাইল এবং লিঙ্কসমূহ',
      sendMessage: 'মেসেজ পাঠান',
      formSubtitle: 'আপনার প্রজেক্টের সংক্ষিপ্ত বিবরণ লিখে সরাসরি আমার ইনবক্সে পাঠান।',
      yourName: 'আপনার নাম',
      namePlaceholder: 'যেমন: আপনার নাম',
      emailAddress: 'ইমেইল অ্যাড্রেস',
      serviceRequired: 'প্রয়োজনীয় সার্ভিস',
      serviceOptions: [
        { label: 'ভিডিও এডিটিং (লং ফর্ম / কমার্শিয়াল)', value: 'Video Editing' },
        { label: 'শর্ট-ফর্ম ভিডিও (রিলস / টিকটক)', value: 'Short-Form Video' },
        { label: 'মোশন গ্রাফিক্স ও টাইটেল', value: 'Motion Graphics' },
        { label: 'কালার গ্রেডিং ও ফিনিশিং', value: 'Color Grading' },
        { label: 'গ্রাফিক ডিজাইন ও পোস্টার', value: 'Graphic Design' },
        { label: 'থাম্বনেইল ডিজাইন', value: 'Thumbnail Design' },
        { label: 'সম্পূর্ণ ক্রিয়েটিভ প্যাকেজ', value: 'Full Creative Package' },
      ],
      projectOverview: 'প্রজেক্টের বিবরণ / ফুটের লিংক',
      messagePlaceholder: 'আপনার কাজের ধরন, সময়সীমা বা র ফুটের লিংক সংক্ষেপে লিখুন...',
      sendRequest: 'রিকোয়েস্ট পাঠান',
      inquiryPrepared: 'মেসেজ তৈরি হয়েছে! আপনার ইমেইল ক্লায়েন্ট দেখুন।',
      whatsappDirect: 'সরাসরি মেসেজিং',
      whatsappTitle: 'হোয়াটসঅ্যাপে কথা বলুন',
      whatsappDesc: 'তাত্ক্ষণিক আলোচনা, প্রজেক্ট সম্ভাব্যতা যাচাই এবং সরাসরি পরামর্শের জন্য।',
      whatsappNumber: 'হোয়াটসঅ্যাপ:',
    },
    footer: {
      description: 'ভিডিও এডিটর এবং গ্রাফিক ডিজাইনার। হাই-ইমপ্যাক্ট ভিডিও এডিটিং এবং ভিজ্যুয়াল ডিজাইন সার্ভিস।',
      stayConnected: 'যুক্ত থাকুন',
      newsletterDesc: 'ত্রৈমাসিক এডিটিং টিপস ও রিসোর্স আপডেট পেতে সাবস্ক্রাইব করুন।',
      emailPlaceholder: 'আপনার ইমেইল অ্যাড্রেস',
      subscribe: 'সাবস্ক্রাইব',
      subscribed: 'যুক্ত হয়েছেন',
      subscribedNote: 'সাবস্ক্রাইব করার জন্য ধন্যবাদ!',
      rightsReserved: 'সর্বস্বত্ব সংরক্ষিত।',
      taglineBottom: 'ভিডিও এডিটর ও গ্রাফিক ডিজাইনার',
      independent: 'ব্যক্তিগত পোর্টফোলিও',
    },
  },
  ar: {
    creatorName: 'محمد زبير خان',
    profession: 'محرر فيديو ومصمم جرافيك',
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      services: 'الخدمات',
      videoWork: 'أعمال الفيديو',
      graphicDesign: 'التصميم الجرافيكي',
      process: 'خطوات العمل',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بي',
      editInfo: 'تعديل البيانات',
      workTogether: 'لنعمل معاً',
      themeToggle: 'المظهر',
      subtitle: 'فيديو وجرافيك',
    },
    hero: {
      tagline: 'محرر فيديو ومصمم جرافيك',
      headlinePart1: 'تحويل الأفكار إلى',
      headlineHighlight: 'تجارب بصرية',
      headlinePart2: 'ملهمة.',
      bio: 'محرر فيديو ومصمم جرافيك متخصص في إنتاج قصص بصرية مؤثرة ورسوم متحركة وتصاميم إبداعية عالية الجودة.',
      viewWork: 'شاهد أعمالي',
      letsTalk: 'تحدث معي',
      available: 'متاح للمشاريع الجديدة',
      changePhoto: 'تغيير الصورة',
      uploadTooltip: 'انقر لرفع صورتك الشخصية',
      photoCredit: 'الصورة: محمد زبير خان',
      disc1Title: 'مونتاج الفيديو',
      disc1Sub: 'إيقاع وتقطيع سينمائي',
      disc2Title: 'موشن جرافيك',
      disc2Sub: 'حركي وثنائي/ثلاثي الأبعاد',
      disc3Title: 'تصميم جرافيك',
      disc3Sub: 'هوية بصرية ونشر',
      showreelBadge: 'معرض الأعمال',
      showreelSpec: '4K فائق الوضوح • 24 إطار',
      showreelTitle: 'أبرز لقطات المونتاج والموشن جرافيك',
      showreelSub: 'شريط الأعمال',
      clickToPlay: 'انقر لتشغيل الفيديو',
    },
    about: {
      badge: 'الملف الشخصي',
      title: 'من أنا',
      leadQuote: 'أصنع مقاطع فيديو وتصاميم بصرية نظيفة وجذابة تحقق أعلى نسب المشاهدة.',
      bio: 'أركز على الإيقاع المتناغم، وتدريج الألوان السينمائي، والتكوين الجرافيكي الدقيق لتحويل اللقطات الخام إلى أعمال بصرية مبهرة.',
      competencies: [
        'المونتاج الرقمي المتقدم',
        'تدريج الألوان (Color Grading)',
        'الإيقاع وتتابع المشاهد',
        'هندسة الصوت والمؤثرات',
        'تنسيق الخطوط والتايبوجرافي',
        'الهوية البصرية',
      ],
      connectTitle: 'تواصل عبر المنصات',
      proBadge: 'محترف',
      personalWork: 'أعمال أصلية 100%',
    },
    services: {
      badge: 'القدرات والخدمات',
      title: 'ماذا أقدم',
      subtitle: 'خدمات ما بعد الإنتاج والتصميم الجرافيكي المصممة خصيصاً لجذب انتباه الجمهور وزيادة التفاعل.',
      inquireRates: 'استفسر عن الأسعار',
      list: [
        {
          number: '01',
          title: 'مونتاج الفيديو',
          description: 'مونتاج سينمائي سلس، إيقاع قصصي محكم، وهندسة صوتية متوازنة لجميع المنصات.',
          tags: ['مونتاج سردي', 'مكساج صوت', 'إيقاع بصري'],
        },
        {
          number: '02',
          title: 'الفيديوهات القصيرة (ريلز وتيك توك)',
          description: 'مقاطع عمودية سريعة بنسبة استبقاء عالية، مع خطافات بصرية وترجمة حركية ديناميكية.',
          tags: ['استبقاء عالي', 'هوك جذاب', 'نصوص حركية'],
        },
        {
          number: '03',
          title: 'موشن جرافيك',
          description: 'تحريك الشعارات، تيبوغرافي حركي، وعناوين سينمائية ترفع من قيمة الإنتاج.',
          tags: ['عناوين سينمائية', 'لوور ثيردز', 'حركة ديناميكية'],
        },
        {
          number: '04',
          title: 'فيديوهات إعلانية وترويجية',
          description: 'إعلانات تجارية احترافية للعلامات والمنتجات مع تدريج لوني عالي المستوى.',
          tags: ['حملات تجارية', 'عرض المنتجات', 'مونتاج دعائي'],
        },
        {
          number: '05',
          title: 'التصميم الجرافيكي',
          description: 'تصاميم بوسترات وهوية بصرية وتكوينات خطية تتبع أحدث المعايير العالمية.',
          tags: ['مفاهيم بصرية', 'تنسيق مطبوعات', 'بوسترات'],
        },
        {
          number: '06',
          title: 'تصاميم السوشيال ميديا',
          description: 'قوالب بصرية متناسقة لمنشورات وكاروسيل المنصات المتعددة.',
          tags: ['كاروسيل', 'قوالب سوشيال', 'تصاميم منصات'],
        },
        {
          number: '07',
          title: 'تصميم الصور المصغرة (Thumbnails)',
          description: 'صور مصغرة لليوتيوب بنسبة نقر عالية (CTR) ومحسنة للتباين والوضوح.',
          tags: ['CTR عالي', 'تباين بصري', 'معالجة صور'],
        },
      ],
    },
    video: {
      badge: 'الحركة والإخراج',
      title: 'أعمال الفيديو المختارة',
      filterLabel: 'تصنيف:',
      all: 'الكل',
      reels: 'ريلز',
      commercial: 'إعلانات تجارية',
      motion: 'موشن جرافيك',
      social: 'سوشيال ميديا',
      other: 'أخرى',
      watchCut: 'مشاهدة المقطع',
      preview: 'معاينة العمل ←',
    },
    graphic: {
      badge: 'الفن البصري والتصميم',
      title: 'أعمال التصميم الجرافيكي',
      subtitle: 'تيبوغرافي إبداعي، بوسترات متميزة، وهويات بصرية رقمية متقنة.',
      viewFull: 'عرض العمل بالحجم الكامل',
    },
    featured: {
      badge: 'دراسة حالة مميزة',
      title: 'المشروع البارز',
      tag: 'فيلم تجاري وحركي',
      graded: 'ألوان سينمائية',
      highlight: 'أبرز مميزات العمل',
      headline: 'أورا ديناميكس — حملة بصرية سينمائية',
      description: 'نموذج شامل يجمع بين السرد المتزن، ومنحنيات الألوان السينمائية الخاصة، والصوت المحيطي المتزامن.',
      deliverablesTitle: 'مخرجات العمل:',
      deliverables: [
        'تدريج لوني ومحاكاة حبيبات فيلم 35mm',
        'تصميم عناوين حركية مخصصة',
        'مكساج ومؤثرات صوتية ثلاثية الأبعاد',
        'نسخة ماستر 4K ومقاطع عمودية 9:16',
      ],
      toolsTitle: 'البرامج المستخدمة:',
      watchReel: 'مشاهدة العمل',
      requestSimilar: 'طلب مشروع مماثل',
    },
    beforeAfter: {
      badge: 'التحول البصري',
      title: 'قبل / بعد التعديل',
      subtitle: 'اسحب الشريط لمقارنة اللقطات الخام الباهتة (LOG) مقابل النتيجة النهائية الملونة.',
      beforeLabel: 'قبل: خام باهت (LOG)',
      afterLabel: 'بعد: تلوين سينمائي',
      timingLabel: 'تدريج ألوان DaVinci Resolve',
      dragHint: 'اسحب الشريط لرؤية الفرق',
      toneTitle: 'معالجة التباين والإضاءة',
      toneSub: 'استعادة عمق الظلال وتدرج الإضاءات الطبيعية.',
      colorTitle: 'تناسق الألوان والمزاج',
      colorSub: 'تلوين مميز بدرجات داكنة ونغمات بشرة نقية وطبيعية.',
      textureTitle: 'الملمس وحبيبات الفيلم',
      textureSub: 'إضافة حبيبات فيلم 35mm العضوية لإضفاء طابع سينمائي رفيع.',
    },
    process: {
      badge: 'منهجية العمل',
      title: 'خطوات العمل الإبداعي',
      subtitle: 'نهج منظم وتعاوني يضمن توافق الرؤية الفنية وسرعة الإنجاز وجودة التسليم.',
      stage: 'المرحلة',
      stepOf: 'خطوة',
      steps: [
        {
          number: '01',
          title: 'الملخص وتحديد الأهداف',
          description: 'فهم أهداف المشروع، هوية العلامة، والجمهور المستهدف ومتطلبات المونتاج.',
        },
        {
          number: '02',
          title: 'الفكرة والنسخة الأولية',
          description: 'تجميع اللقطات الأساسية، وبناء إيقاع السرد وتزامن الموسيقى التمهيدية.',
        },
        {
          number: '03',
          title: 'المونتاج الدقيق وتدريج الألوان',
          description: 'صقل التقطيع، ضبط هندسة الصوت، إضافة العناوين وتلوين اللقطات باحتراف.',
        },
        {
          number: '04',
          title: 'التسليم النهائي',
          description: 'تصدير النسخ النهائية بجودة 4K فائقة وتهيئتها لمختلف مقاسات المنصات.',
        },
      ],
    },
    tools: {
      badge: 'العتاد التقني',
      title: 'البرامج والأدوات',
      subtitle: 'برامج المونتاج والتصميم العالمية المعتمدة لإنتاج أفضل الأعمال.',
    },
    testimonials: {
      badge: 'آراء وتقييمات',
      title: 'شهادات العملاء',
      placeholderNote: '[آراء العملاء والشركاء]',
    },
    faq: {
      badge: 'إجابات واضحة',
      title: 'الأسئلة الأكثر شيوعاً',
      subtitle: 'إجابات على أبرز الاستفسارات المتعلقة ببدء المشاريع، مدد التسليم، وآلية العمل.',
      items: [
        {
          question: 'ما هي الخدمات التي تقدمها؟',
          answer: 'أقدم خدمات مونتاج الفيديو الاحترافي (إعلانات تجارية، ريلز، يوتيوب)، موشن جرافيك حركي، تدريج وتصحيح الألوان السينمائي، هندسة الصوت، وتصميم الجرافيك والبوسترات والصور المصغرة عالية النقرات.',
        },
        {
          question: 'كيف يمكنني التواصل معك؟',
          answer: 'يمكنك مراسلتي مباشرة عبر واتساب للمحادثات السريعة، أو إرسال بريد إلكتروني، أو التواصل عبر فيسبوك، يوتيوب، تيك توك، وبيهانس من قسم التواصل بالأسفل.',
        },
        {
          question: 'أين يمكنني مشاهدة نماذج من أعمالك؟',
          answer: 'يمكنك استعراض نماذج الفيديو المختارة، ومعرض التصميم الجرافيكي، ومقارنة تدريج الألوان التفاعلية، ودراسات الحالة مباشرة عبر هذا الموقع أو عبر قنواتي على يوتيوب وبيهانس.',
        },
        {
          question: 'هل يمكنني مناقشة تفاصيل مشروع مخصص؟',
          answer: 'نعم بكل تأكيد! سواء كانت لديك لقطات خام جاهزة للتحرير أو ترغب في تطوير فكرة إبداعية من البداية، يسعدني تواصلك عبر واتساب أو البريد لمناقشة الخطة الزمنية ونطاق العمل.',
        },
        {
          question: 'كم يستغرق تسليم المشروع عادةً؟',
          answer: 'يتم تسليم مقاطع الفيديو القصيرة (ريلز) والصور المصغرة عادةً خلال 24 إلى 48 ساعة، بينما تستغرق المشاريع الإعلانية الكاملة وأعمال الموشن المعقدة من 3 إلى 7 أيام بحسب الحجم والتفاصيل.',
        },
      ],
    },
    cta: {
      badge: 'دعنا نتعاون',
      titlePart1: 'هل لديك مشروع',
      titleHighlight: 'في بالك؟',
      subtitle: 'سواء كنت بحاجة لمونتاج فيديو، موشن جرافيك، صور مصغرة، أو هوية بصرية، فلنصنع شيئاً مميزاً معاً.',
      workTogether: 'لنعمل معاً',
      contactMe: 'تواصل معي',
    },
    contact: {
      badge: 'تواصل مباشر',
      title: 'اتصل بي',
      directEmail: 'البريد الإلكتروني المباشر',
      responseTime: 'يتم الرد على الاستفسارات في غضون 24 ساعة عمل.',
      socialProfiles: 'حسابات التواصل الاجتماعي والروابط',
      sendMessage: 'إرسال رسالة',
      formSubtitle: 'املأ تفاصيل مشروعك أدناه لإرسال استفسار مباشر إلى بريدي الإلكتروني.',
      yourName: 'الاسم الكريم',
      namePlaceholder: 'مثال: أحمد محمد',
      emailAddress: 'عنوان البريد الإلكتروني',
      serviceRequired: 'الخدمة المطلوبة',
      serviceOptions: [
        { label: 'مونتاج فيديو (إعلاني / مطول)', value: 'Video Editing' },
        { label: 'فيديوهات قصيرة (ريلز / تيك توك)', value: 'Short-Form Video' },
        { label: 'موشن جرافيك وعناوين حركية', value: 'Motion Graphics' },
        { label: 'تدريج ألوان سينمائي', value: 'Color Grading' },
        { label: 'تصميم جرافيك وبوسترات', value: 'Graphic Design' },
        { label: 'تصميم صور مصغرة (Thumbnails)', value: 'Thumbnail Design' },
        { label: 'حزمة إبداعية متكاملة', value: 'Full Creative Package' },
      ],
      projectOverview: 'نبذة عن المشروع / رابط اللقطات الخام',
      messagePlaceholder: 'صف تفاصيل المشروع، الوقت المتوقع، أو ضع رابطاً للمعاينة...',
      sendRequest: 'إرسال طلب المشروع',
      inquiryPrepared: 'تم إعداد الاستفسار! افتح تطبيق البريد الإلكتروني أو انسخ الرسالة.',
      whatsappDirect: 'مراسلة فورية',
      whatsappTitle: 'تحدث معي عبر واتساب',
      whatsappDesc: 'للمناقشات السريعة، دراسة إمكانية المشروع، والاستشارات الإبداعية المباشرة.',
      whatsappNumber: 'واتساب:',
    },
    footer: {
      description: 'محرر فيديو ومصمم جرافيك متخصص في إنتاج المونتاج السينمائي والموشن جرافيك والتصاميم المؤثرة.',
      stayConnected: 'ابق على تواصل',
      newsletterDesc: 'احصل على تحديثات دورية حول كواليس المونتاج والمصادر الإبداعية.',
      emailPlaceholder: 'بريدك الإلكتروني',
      subscribe: 'اشتراك',
      subscribed: 'تم الاشتراك',
      subscribedNote: 'شكراً لاشتراكك في النشرة البريدية!',
      rightsReserved: 'جميع الحقوق محفوظة.',
      taglineBottom: 'محرر فيديو ومصمم جرافيك',
      independent: 'معرض أعمال مستقل',
    },
  },
};
