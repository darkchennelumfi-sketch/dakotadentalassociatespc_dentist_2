export type FaqItem = {
  question: string;
  answer: string[];
};

export const faqs: FaqItem[] = [
  {
    question: "How often should I see a dentist?",
    answer: [
      "The American Dental Association (ADA) guidelines recommend visiting a dentist at least twice a year for a checkup and professional cleaning. Our office also recommends a minimum of two visits per year.",
    ],
  },
  {
    question: "What should I expect during my appointment?",
    answer: [
      "One of our staff members will compile your medical and dental history during your first visit. We then will examine your teeth and gums, screen you for oral cancer, make X-rays of your teeth as needed and complete a TMJ (temporomandibular or jaw joint) exam. After we review your dental profile, we will discuss a diagnosis with you. If treatment such as a root canal (endodontics), braces (orthodontics) or oral surgery is needed, we will plan to treat you in our office or refer you to a specialist. We will discuss your options for treatment and fee payment and help you determine the best plan to fit your needs.",
      "During regular follow-up visits, we will examine your teeth and gums, screen you for oral cancer, clean your teeth and make plans for treatment, as needed. We will discuss any pain or problems you may be experiencing and answer any questions you may have.",
    ],
  },
  {
    question: "What if I have an emergency?",
    answer: [
      "Please call our office as soon as you determine that you have a dental emergency. We will be glad to work you in to our schedule if you have a dental emergency during regular business hours. After hours, over the weekend and during holidays, please call our office and follow the voicemail instructions to access the on-call staff member. Please visit our Dental First Aid page for details.",
    ],
  },
  {
    question: "Are payment plans available for my dental treatment?",
    answer: [
      "Yes. We offer payment plans through CareCredit, and accept many types of dental insurance and will process your claim for you upon receipt of your co-payment. We offer a low interest rate payment plan and also accept most major credit cards.",
    ],
  },
  {
    question: "Can the dentist whiten my teeth?",
    answer: [
      "There are several methods available for bleaching the teeth: in-office, overnight or daily. One session of in-office bleaching generally lasts one-and-a-half to two hours, and you can read or relax during the treatment. For overnight bleaching, we make an impression of your teeth and create a mouthguard that fits your bite. Each day you fill the mouthguard with a small amount of bleaching gel and wear it overnight or for a few hours during the day. The overnight bleaching process takes about two weeks.",
      "Other over-the-counter daily bleaching products are available, but it is important to use any bleaching product only under the supervision of a dentist. To achieve the whitening results you desire, the ADA recommends that you seek the professional advice of a dentist, including examination and diagnosis of the cause of tooth discoloration, before you begin any bleaching program.",
    ],
  },
  {
    question:
      "What if I have a gap in my teeth, a chipped tooth or teeth that do not respond to normal bleaching methods?",
    answer: [
      "We have many different procedures that can help these problems. Porcelain veneers are designed to look like your natural teeth and are individually attached to the fronts of your existing teeth. Veneers can be positioned to close gaps. Bonding utilizes a composite material made of plastic to fill in areas of your teeth and correct chipping and shape problems. Both porcelain veneers and bonding are color-matched to the rest of your teeth.",
    ],
  },
];
