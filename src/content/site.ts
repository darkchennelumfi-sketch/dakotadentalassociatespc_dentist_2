export type NavChild = {
  label: string;
  href: string;
  description: string;
};

export type NavGroup = {
  label: string;
  href: string;
  description: string;
  children: NavChild[];
};

export const practice = {
  name: "Dakota Dental Associates",
  shortName: "Dakota Dental",
  tagline: "Exceptional dentistry in the heart of the Red River Valley.",
  phone: "701-775-0641",
  phoneHref: "tel:+17017750641",
  email: "dda@dakotadentalnd.com",
  emailHref: "mailto:dda@dakotadentalnd.com",
  address: {
    street: "4000 17th Ave. S.",
    city: "Grand Forks",
    state: "ND",
    zip: "58201",
  },
  addressLine: "4000 17th Ave. S., Grand Forks, ND 58201",
  portal: "https://patient.modento.io/dakotadental/consult",
  payOnline: "https://www.bestcardteam.com/payments?Profile=dakotadentalWEB",
  mapUrl:
    "https://www.google.com/maps/place/Dakota+Dental+Associates/@47.9046699,-97.086025,15z/data=!4m5!3m4!1s0x0:0xefcb670ce62281fd!8m2!3d47.9046699!4d-97.086025",
  mapEmbed:
    "https://www.google.com/maps?q=4000+17th+Ave+S,+Grand+Forks,+ND+58201&output=embed",
  facebook:
    "https://www.facebook.com/Dakota-Dental-Associates-119898894691290/",
  yelp: "https://www.yelp.com/biz/dakota-dental-associates-grand-forks-2",
  hours: [
    { day: "Monday – Wednesday", time: "7:10 AM – 5:00 PM" },
    { day: "Thursday", time: "7:10 AM – 12 PM & 1 PM – 5 PM" },
    { day: "Friday", time: "8:00 AM – Noon" },
  ],
  hoursShort: [
    { day: "Mon – Wed", time: "7:10 – 5:00" },
    { day: "Thu", time: "7:10 – 12 & 1 – 5" },
    { day: "Fri", time: "8:00 – Noon" },
  ],
  emergencyHours: [
    { day: "Monday – Thursday", time: "5:00 PM – 9:00 PM" },
    { day: "Friday", time: "12:00 PM – 9:00 PM" },
    { day: "Saturday & Sunday", time: "8:00 AM – 9:00 PM" },
  ],
} as const;

export const nav: NavGroup[] = [
  {
    label: "Office",
    href: "/office",
    description: "The space, the people, and the details that make a visit feel easy.",
    children: [
      {
        label: "Office Video Tour",
        href: "/office/office-video-tour",
        description: "Step inside before your first appointment.",
      },
      {
        label: "Meet the Team",
        href: "/office/meet-the-team",
        description: "Five doctors and a full team behind your care.",
      },
      {
        label: "Office Policies & Mission",
        href: "/office/office-policies-mission",
        description: "How we keep every visit safe, smooth, and comfortable.",
      },
      {
        label: "Financial & Insurance",
        href: "/office/financial-insurance",
        description: "Payment options and insurance made straightforward.",
      },
      {
        label: "Map & Directions",
        href: "/office/map-directions",
        description: "Find us on 17th Avenue South in Grand Forks.",
      },
      {
        label: "Practice Events",
        href: "/office/practice-events",
        description: "Community, contests, and lectures from our team.",
      },
      {
        label: "Specials & Promotions",
        href: "/office/specials-promotions",
        description: "Patient perks and periodic offers.",
      },
    ],
  },
  {
    label: "Patients",
    href: "/patients",
    description: "Everything you need to feel prepared, informed, and at home.",
    children: [
      {
        label: "Your First Visit",
        href: "/patients/your-first-visit",
        description: "What to bring, what to expect, and how long to allow.",
      },
      {
        label: "Patient Testimonials",
        href: "/patients/patient-testimonials",
        description: "Real words from the people we care for.",
      },
      {
        label: "Sterilization / Water Filtration",
        href: "/patients/sterilization-water-filtration",
        description: "The safety systems behind every appointment.",
      },
      {
        label: "Before & After Photos",
        href: "/patients/before-after-photos",
        description: "Actual patients, real results.",
      },
      {
        label: "Patient Advantage",
        href: "/patients/patient-advantage",
        description: "Extra benefits for patients of record.",
      },
      {
        label: "Common Problems",
        href: "/patients/common-problems",
        description: "What may be going on — and how we can help.",
      },
      {
        label: "Oral Hygiene",
        href: "/patients/oral-hygiene",
        description: "Prevention, sealants, fluoride, and X-rays.",
      },
      {
        label: "Early Dental Care",
        href: "/patients/early-dental-care",
        description: "A gentle start for a lifetime of healthy smiles.",
      },
      {
        label: "About Teeth",
        href: "/patients/about-teeth",
        description: "A simple guide to how teeth develop.",
      },
      {
        label: "Dental Health",
        href: "/patients/dental-health",
        description: "Oral health guidance for adults and children.",
      },
      {
        label: "FAQ",
        href: "/patients/faq",
        description: "Answers to the questions we hear most.",
      },
      {
        label: "Dental First Aid",
        href: "/patients/dental-first-aid",
        description: "What to do when something happens after hours.",
      },
      {
        label: "Brushing & Flossing",
        href: "/patients/brushing-flossing",
        description: "Make the everyday routine count.",
      },
      {
        label: "Tooth Decay Prevention",
        href: "/patients/tooth-decay-prevention",
        description: "How to tip the balance in your favor.",
      },
    ],
  },
  {
    label: "Treatment",
    href: "/treatment",
    description: "Comprehensive care for every age and every stage of your smile.",
    children: [
      {
        label: "General Treatment",
        href: "/treatment/general-treatment",
        description: "Cleanings, fillings, crowns, root canals, implants, and more.",
      },
      {
        label: "CEREC",
        href: "/treatment/cerec",
        description: "A permanent ceramic restoration in a single visit.",
      },
      {
        label: "Orthodontics",
        href: "/treatment/orthodontics",
        description: "Braces for children, teens, and adults.",
      },
      {
        label: "Dental Lab",
        href: "/treatment/dental-lab",
        description: "An in-house lab for precise, efficient appliances.",
      },
      {
        label: "Cosmetic Dentistry",
        href: "/treatment/cosmetic-dentistry",
        description: "Whitening, veneers, and smile refinement.",
      },
      {
        label: "Appliances",
        href: "/treatment/appliances",
        description: "Headgear, retainers, mouthguards, and functional appliances.",
      },
      {
        label: "Invisalign",
        href: "/treatment/invisalign",
        description: "Clear aligners, without wires or brackets.",
      },
      {
        label: "Gum Disease & Periodontics",
        href: "/treatment/gum-disease-periodontics",
        description: "Protecting the gums and bone around your teeth.",
      },
      {
        label: "TMJ/TMD",
        href: "/treatment/tmj-tmd",
        description: "Relief for jaw joint pain and dysfunction.",
      },
      {
        label: "Snoring Therapy",
        href: "/treatment/snoring-therapy",
        description: "Appliance-based care for snoring and sleep apnea.",
      },
    ],
  },
];

export const utilityLinks = [
  { label: "Request an Appointment", href: practice.portal, external: true },
  { label: "E-mail Us", href: practice.emailHref, external: false },
  { label: "Pay Online", href: practice.payOnline, external: true },
] as const;

export const quickLinks: NavChild[] = [
  { label: "New Patients", href: "/new-patients", description: "Start here." },
  { label: "Technology", href: "/technology", description: "See what we use." },
  { label: "Emergency Care", href: "/emergency-care", description: "Get help now." },
  { label: "Related Links", href: "/miscellaneous/related-links", description: "Trusted resources." },
  { label: "Glossary", href: "/miscellaneous/glossary", description: "Plain-language dental terms." },
  { label: "Contact Us", href: "/contact-us", description: "Call, email, or visit." },
];

export const stats = [
  { value: 40, suffix: "+", label: "Years in the Red River Valley" },
  { value: 5, suffix: "", label: "Doctors on our team" },
  { value: 7, suffix: "", label: "Chairs in our hygiene department" },
  { value: 1, suffix: "", label: "Fully equipped in-house lab" },
];

export const awards = [
  { src: "/images/2026-best-of-the-best.jpg", alt: "Grand Forks Herald Best of the Best 2026", label: "Best of the Best 2026", width: 289, height: 218 },
  { src: "/images/herald-best-of-2025-v3.png", alt: "Grand Forks Herald Best of 2025", label: "Best of 2025", width: 320, height: 240 },
  { src: "/images/grand-forks-herald-2023.jpg", alt: "Grand Forks Herald 2023", label: "Grand Forks Herald 2023", width: 300, height: 225 },
  { src: "/images/best-of-grand-forks-ad.jpg", alt: "Best of Grand Forks advertisement", label: "Best of Grand Forks", width: 300, height: 225 },
  { src: "/images/special-smiles.jpg", alt: "Special Smiles", label: "Special Smiles", width: 300, height: 225 },
  { src: "/images/special-olympics.jpg", alt: "Special Olympics", label: "Special Olympics", width: 300, height: 225 },
  { src: "/images/2018pc.jpg", alt: "2018 People's Choice", label: "People's Choice 2018", width: 300, height: 225 },
  { src: "/images/2017-people-s-choice.jpg", alt: "2017 People's Choice", label: "People's Choice 2017", width: 300, height: 225 },
  { src: "/images/2016-people-s-choice.jpg", alt: "2016 People's Choice", label: "People's Choice 2016", width: 300, height: 225 },
  { src: "/images/2015-people-s-choice.jpg", alt: "2015 People's Choice", label: "People's Choice 2015", width: 300, height: 225 },
];

export const testimonials = [
  {
    name: "Skylar",
    quote:
      "Having Invisalign Teen made me realize that I could finally be comfortable with my smile and not have to worry about what my smile looked like or what other people thought. Thanks to Invisalign, my teeth are INVISIFINE!",
    topic: "Invisalign Teen",
  },
  {
    name: "Alicia",
    quote:
      "Dr. Bothun gives the best Novocain shots, and they were the best I have ever had. They didn't hurt a bit. He always makes you feel like you're at home and makes you feel comfortable by making great conversation and by making jokes. I got my teeth done really fast, and he gave me the exact amount of novocaine I needed to make sure it didn't hurt. He was done in a great amount of time, all the while being extremely accurate. I would never ever change my dentist because when I go to Dakota Dental I know they will make sure I'm taken care of in a great way! :):):):):):)",
    topic: "Comfortable care",
  },
  {
    name: "Michael",
    quote:
      "I just wanted to say thank-you to Dr. Stevens and her staff for doing an excellent job. My visit was very enjoyable, and I look forward to future visits. Very professional! Thank you, Dr. Stevens.",
    topic: "Dr. Stevens",
  },
  {
    name: "Matt",
    quote: "Best dentist in Grand Forks!",
    topic: "A hometown favorite",
  },
  {
    name: "JoAnne",
    quote:
      "Dear Dr. Bothun and staff: Hello! I wanted to thank you so much for redoing my bridge. You and Nicole did a super job! You and your staff are so kind and professional. Everyone is very friendly. I enjoy going there.",
    topic: "Restorative care",
  },
  {
    name: "Jessica",
    quote:
      "Thank you to Sheila and Dr. Bothun for making my 3 year old son's first dental appointment so great! He keeps talking about how nice the dentist is. I could not have asked for a better experience!",
    topic: "A child's first visit",
  },
];

export const doctorCards = [
  { name: "Paul Bothun", suffix: "D.D.S.", anchor: "Paul", image: "/images/2026-home-dr-paul-bothun.jpg", role: "Comprehensive & cosmetic dentistry" },
  { name: "Heidi Stevens", suffix: "D.D.S.", anchor: "Heidi", image: "/images/2026-home-dr-stevens.jpg", role: "General & preventive care" },
  { name: "Rachel Cummings", suffix: "D.D.S.", anchor: "Rachel", image: "/images/2026-home-dr-cummings.jpg", role: "Comprehensive care" },
  { name: "Chris Bothun", suffix: "D.D.S.", anchor: "Chris", image: "/images/2026-home-dr-bothun.jpg", role: "Orthodontics & general dentistry" },
  { name: "Kayla Nelson", suffix: "D.D.S.", anchor: "Kayla", image: "/images/2026-home-dr-kayla.jpg", role: "General & pediatric care" },
];

export const officeGallery = [
  { src: "/images/1-9.jpg", alt: "Office exterior", title: "Office Exterior", category: "Our space" },
  { src: "/images/2026-home1.jpg", alt: "Our doctors", title: "Our Doctors", category: "Our people" },
  { src: "/images/2026-home2.jpg", alt: "Hygiene team", title: "Hygiene Team", category: "Our people" },
  { src: "/images/2026-home6.jpg", alt: "Dental assistants team", title: "Dental Assistants Team", category: "Our people" },
  { src: "/images/2026-home3.jpg", alt: "Front office team", title: "Front Office Team", category: "Our people" },
  { src: "/images/2026-home4.jpg", alt: "Team group photo", title: "Team Group Photo", category: "Our people" },
  { src: "/images/2026-home5.jpg", alt: "Doctor group photo", title: "Doctor Group Photo", category: "Our people" },
];
