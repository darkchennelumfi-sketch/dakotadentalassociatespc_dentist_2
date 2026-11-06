export type SmileCase = {
  id: string;
  label: string;
  before: string;
  after: string;
  note?: string;
};

export type SmileCategory = {
  id: string;
  label: string;
  description: string;
  cases: SmileCase[];
};

export const smileCategories: SmileCategory[] = [
  {
    id: "implants",
    label: "Implants",
    description: "Replacing missing teeth with stable, natural-looking restorations.",
    cases: [
      {
        id: "implant-1",
        label: "Implant case",
        before: "/images/implant-before.jpg",
        after: "/images/implant-after.jpg",
      },
    ],
  },
  {
    id: "veneers",
    label: "Veneers",
    description: "Custom porcelain veneers that refine shape, color, and symmetry.",
    cases: [
      {
        id: "veneers-1",
        label: "Veneer case 01",
        before: "/images/veneers-before-1.jpg",
        after: "/images/veneers-after-1.jpg",
      },
      {
        id: "veneers-2",
        label: "Veneer case 02",
        before: "/images/veneers-before-2.jpg",
        after: "/images/veneers-after-2.jpg",
      },
      {
        id: "veneers-3",
        label: "Veneer case 03",
        before: "/images/veneers-before-3.jpg",
        after: "/images/veneers-after-3.jpg",
      },
    ],
  },
  {
    id: "cerecs",
    label: "CERECs",
    description: "Same-day ceramic restorations designed and placed in one visit.",
    cases: [
      {
        id: "cerec-1",
        label: "CEREC case",
        before: "/images/cerec-before-1.jpg",
        after: "/images/cerec-after-1.jpg",
      },
    ],
  },
  {
    id: "bridges",
    label: "Bridges",
    description: "Bridges that fill a space and protect the teeth around it.",
    cases: [
      {
        id: "bridge-1",
        label: "Bridge case",
        before: "/images/bridge-before.jpg",
        after: "/images/bridge-after.jpg",
      },
    ],
  },
  {
    id: "anterior-composites",
    label: "Anterior Composites",
    description: "Tooth-colored composite used to restore the front teeth.",
    cases: [
      {
        id: "anterior-composite-1",
        label: "Anterior composite case",
        before: "/images/anterior-composite-before.jpg",
        after: "/images/anterior-composite-after.jpg",
      },
    ],
  },
  {
    id: "fillings",
    label: "Fillings",
    description: "Repairing lost tooth structure with a natural-looking filling.",
    cases: [
      {
        id: "fillings-1",
        label: "Filling case",
        before: "/images/fillings-before.jpg",
        after: "/images/fillings-after.jpg",
      },
    ],
  },
  {
    id: "bleaching",
    label: "Bleaching",
    description: "Professional whitening for a brighter, more confident smile.",
    cases: [
      {
        id: "bleaching-1",
        label: "Bleaching case",
        before: "/images/bleaching-before.jpg",
        after: "/images/bleaching-after.jpg",
      },
    ],
  },
  {
    id: "crowns",
    label: "Crowns",
    description: "Custom coverage that restores a damaged or weakened tooth.",
    cases: [
      {
        id: "anterior-crowns-1",
        label: "Anterior crown case",
        before: "/images/anterior-crowns-before.jpg",
        after: "/images/anterior-crowns-after.jpg",
      },
    ],
  },
];
