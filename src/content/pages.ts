import raw from "./raw-pages.json";
import { nav } from "./site";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "heading"; level: number; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "video"; src: string; title: string };

type RawPage = {
  title: string;
  description: string;
  blocks: ContentBlock[];
};

const rawPages = raw as unknown as Record<string, RawPage>;

export type ContentSection = "office" | "patients" | "treatment";

export type ContentPageData = {
  route: string;
  title: string;
  description: string;
  eyebrow: string;
  section: ContentSection;
  lead: string;
  blocks: ContentBlock[];
  heroImage?: string;
  heroImageAlt?: string;
  siblings: { label: string; href: string }[];
};

const heroImages: Record<string, { src: string; alt: string }> = {
  "/office/financial-insurance": { src: "/images/s-smile3.jpg", alt: "A bright, healthy smile" },
  "/office/office-policies-mission": { src: "/images/h-smile4.jpg", alt: "A healthy smile" },
  "/patients/your-first-visit": { src: "/images/s-patient1.jpg", alt: "A patient at Dakota Dental Associates" },
  "/patients/sterilization-water-filtration": { src: "/images/sterilization.png", alt: "DentaPure sterilization system" },
  "/patients/patient-advantage": { src: "/images/v-patient1.jpg", alt: "A Dakota Dental patient" },
  "/patients/common-problems": { src: "/images/h-perfectsmile.jpg", alt: "A healthy, confident smile" },
  "/patients/oral-hygiene": { src: "/images/h-flossing.jpg", alt: "Flossing for oral hygiene" },
  "/patients/early-dental-care": { src: "/images/h-pediatric2.jpg", alt: "Early dental care" },
  "/patients/about-teeth": { src: "/images/h-patient1.jpg", alt: "A patient's smile" },
  "/patients/dental-health": { src: "/images/h-flossing1.jpg", alt: "Daily brushing and flossing" },
  "/patients/dental-first-aid": { src: "/images/v-xray.jpg", alt: "Dental X-ray" },
  "/patients/brushing-flossing": { src: "/images/oral-hygiene.jpg", alt: "Oral hygiene illustration" },
  "/patients/tooth-decay-prevention": { src: "/images/tooth-decay.jpg", alt: "Tooth decay illustration" },
  "/treatment/general-treatment": { src: "/images/h-patient2.jpg", alt: "General dental treatment" },
  "/treatment/cerec": { src: "/images/photo-cerec.jpg", alt: "CEREC same-day restoration" },
  "/treatment/orthodontics": { src: "/images/ortho-consult.jpg", alt: "Orthodontic consultation" },
  "/treatment/dental-lab": { src: "/images/799000-1000-800.jpg", alt: "Inside the Dakota Dental lab" },
  "/treatment/cosmetic-dentistry": { src: "/images/h-whitening.jpg", alt: "Cosmetic dentistry" },
  "/treatment/appliances": { src: "/images/headger.jpg", alt: "Dental headgear appliance" },
  "/treatment/invisalign": { src: "/images/img-invisalign01.png", alt: "Invisalign clear aligners" },
  "/treatment/gum-disease-periodontics": { src: "/images/h-perfectsmile3.jpg", alt: "Healthy gums and smile" },
  "/treatment/tmj-tmd": { src: "/images/h-mouthguard1.jpg", alt: "Custom dental mouthguard" },
  "/treatment/snoring-therapy": { src: "/images/h-sleepapnea.jpg", alt: "Snoring and sleep apnea therapy" },
};

const descriptionOverrides: Record<string, string> = {
  "/patients/sterilization-water-filtration":
    "See how Dakota Dental Associates safeguards every appointment with the DentaPure water sterilization and filtration system — NASA-derived technology that purifies water of harmful bacteria, viruses and other organisms.",
  "/patients/patient-advantage":
    "As a patient of record, you receive email alerts about specials, access to after-hours emergency care, periodic bleaching offers, a free toothbrush at hygiene visits and our annual mouthguard special.",
  "/patients/early-dental-care":
    "A parent's guide to teething, infant tooth eruption, your child's first dental visit and preventing baby bottle tooth decay — with gentle, positive care from Dakota Dental Associates.",
  "/patients/about-teeth":
    "A simple guide to primary and permanent teeth: when they erupt, what incisors, canines, pre-molars and molars do, and why regular brushing, flossing and checkups matter for life.",
  "/patients/dental-first-aid":
    "What to do after hours for a toothache, a cut tongue, a broken or knocked-out tooth, or bleeding gums — plus how patients of record reach our on-call emergency service.",
  "/patients/brushing-flossing":
    "Build a brushing and flossing routine that protects your teeth: technique, frequency, fluoride and the everyday habits that help prevent decay and gum disease.",
  "/patients/tooth-decay-prevention":
    "Tooth decay is preventable. Learn how brushing, flossing, fluoride, sealants, diet and regular checkups can tip the balance in favor of your teeth.",
  "/treatment/cerec":
    "CEREC same-day dentistry designs, fabricates and places a permanent ceramic restoration in a single visit — no temporary crowns, no messy impressions and no return appointment.",
  "/treatment/orthodontics":
    "Orthodontic care for children, teens and adults in Grand Forks — early evaluations by age 7, a thorough workup and consult, and braces including gold, ceramic, Clarity, Inspire and Mini Diamond.",
  "/treatment/dental-lab":
    "Our fully equipped in-house lab speeds up appliance creation and lets us serve you more efficiently — producing dentures, crowns, bridges and other prosthetics with precise, hands-on craftsmanship.",
  "/treatment/appliances":
    "A guide to the orthodontic appliances we use — headgear, lip bumpers, Herbst, Frankel and growth appliances — with the wear and care instructions patients need.",
  "/treatment/invisalign":
    "Invisalign straightens teeth without wires or brackets using clear, custom, removable aligners. Learn how treatment works, what to expect and whether it is right for you.",
  "/treatment/tmj-tmd":
    "Jaw pain, popping or tenderness may point to the temporomandibular joint. Learn what a TMJ exam involves and how mouthguards, appliances and other treatments can relieve discomfort.",
  "/treatment/snoring-therapy":
    "Oral appliance therapy can help open the airway during sleep. Learn about common causes of snoring, the signs of sleep apnea and the treatment options available in Grand Forks.",
};

const sectionLabels: Record<ContentSection, string> = {
  office: "The Office",
  patients: "Patient Guide",
  treatment: "Treatments",
};

function sectionFor(route: string): ContentSection {
  if (route.startsWith("/office")) return "office";
  if (route.startsWith("/treatment")) return "treatment";
  return "patients";
}

function siblingsFor(route: string): { label: string; href: string }[] {
  const section = sectionFor(route);
  const group = nav.find((item) =>
    item.children.some((child) => child.href === route),
  );
  if (group) {
    return group.children.map((child) => ({ label: child.label, href: child.href }));
  }
  const parent = nav.find((item) => item.href === `/${section}`);
  return parent ? parent.children.map((child) => ({ label: child.label, href: child.href })) : [];
}

export const contentPages: ContentPageData[] = Object.entries(rawPages).map(
  ([route, page]) => {
    const blocks = [...page.blocks];
    let lead = "";
    const first = blocks[0];
    if (first?.type === "p") {
      lead = first.text;
      blocks.shift();
    }
    if (!lead && first?.type === "heading") {
      lead = page.description || "";
    }
    const section = sectionFor(route);
    return {
      route,
      title: page.title,
      description:
        descriptionOverrides[route] ||
        page.description ||
        `${page.title} at Dakota Dental Associates in Grand Forks, ND.`,
      eyebrow: sectionLabels[section],
      section,
      lead,
      blocks,
      heroImage: heroImages[route]?.src,
      heroImageAlt: heroImages[route]?.alt,
      siblings: siblingsFor(route),
    };
  },
);

export const contentPageMap = new Map(
  contentPages.map((page) => [page.route, page]),
);
