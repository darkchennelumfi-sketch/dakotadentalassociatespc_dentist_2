export type TeamGroup = "doctors" | "administrative" | "hygiene" | "assistants";

export type TeamMember = {
  id: string;
  name: string;
  credentials?: string;
  role: string;
  group: TeamGroup;
  image: string;
  bio: string[];
  highlights?: string[];
  bioAfterList?: string[];
};

export const teamGroups: { id: TeamGroup; label: string; blurb: string }[] = [
  {
    id: "doctors",
    label: "Doctors",
    blurb: "Five dentists, one shared standard of care.",
  },
  {
    id: "administrative",
    label: "Administrative",
    blurb: "The people who keep your visit moving and your questions answered.",
  },
  {
    id: "hygiene",
    label: "Hygiene",
    blurb: "Preventive care with a personal touch.",
  },
  {
    id: "assistants",
    label: "Dental Assistants",
    blurb: "Skilled hands beside you through every appointment.",
  },
];

export const team: TeamMember[] = [
  {
    id: "Paul",
    name: "Paul Bothun",
    credentials: "D.D.S.",
    role: "Comprehensive & cosmetic dentistry",
    group: "doctors",
    image: "/images/2026-Dr-Paul-Bothun.jpg",
    bio: [
      "For more than 30 years, Dr. Paul Bothun has provided his patients with exceptional comprehensive and cosmetic dental care. He earned both a Bachelor of Science in Chemistry and his Doctorate of Dental Surgery degrees from the University of Minnesota.",
      "Dr. Bothun feels it is important to stay on the cutting edge of dentistry. Thus, he has had memberships in:",
    ],
    highlights: [
      "American Dental Association",
      "Northeast District Dental Society",
      "American Academy of Sleep Medicine",
      "American Academy of Dental Sleep Medicine",
      "American Orthodontic Society",
    ],
    bioAfterList: [
      "He also keeps up to date by reading his favorite dental literature, including the Journal of American Dental Association, Compendium (advanced dentistry), Journal of the American Orthodontic Society, Journal of Cosmetic Dentistry, Dental Products Report, Clinical Research Associates Newsletter, Inside Dentistry (cosmetic dentistry), ADA News, Chairside, Inclusive \"Restorative Driven Implant Solutions\", and CEREC Doctors.",
      "Dr. Bothun enjoys sharing his knowledge of dentistry with the community by lecturing in the Grand Forks area. He also participates in the high school job shadowing program. Dr. Bothun has volunteered his time and talents to Give Kids a Smile, Third Street Clinic, and provided dental exams at Head Start. He also talks to high school students about oral health and has given lectures to students at the University Of North Dakota School Of Medicine.",
      "In his personal life, Dr. Bothun enjoys spending time with his family, which includes his wife Lori and their five children: Rachel, Chris, and triplet sons Ryan, Adam and Loren. He likes running, hunting, fishing, woodworking and water sports.",
    ],
  },
  {
    id: "Heidi",
    name: "Heidi Stevens",
    credentials: "D.D.S.",
    role: "General & preventive care",
    group: "doctors",
    image: "/images/2026-Dr-Stevens.jpg",
    bio: [
      "For more than 23 years, Dr. Heidi Stevens has been providing quality care to her patients at Dakota Dental Associates. In 1998, she earned her Bachelor of Science Degree in Biology from the University of North Dakota, and she received her Doctorate of Dental Surgery degree from the University of Minnesota School of Dentistry in 2002.",
      "Throughout her career, Dr. Stevens has given presentations at the Grand Forks Senior Citizens Center, Grand Forks Public Schools, St. Michael's School, Head Start, and the University of North Dakota. She has volunteered her time providing dental care for Give Kids a Smile, Head Start and Third Street Clinic. She has also been a supporter of the North Dakota Dental Foundation.",
      "Dr. Stevens maintains memberships in many professional organizations including:",
    ],
    highlights: [
      "American Dental Association",
      "North Dakota Dental Association",
      "Northeast District Dental Society",
    ],
    bioAfterList: [
      "She is a past president of the Northeast District Dental Society and has served as a delegate to the North Dakota Dental Association House of Delegates.",
      "Dr. Stevens enjoys spending time with her family, which includes her husband, Brian, and their two children, Jack and Hayley. She also enjoys the lake, playing piano, traveling and keeping busy with her kids' various activities.",
    ],
  },
  {
    id: "Rachel",
    name: "Rachel Cummings",
    credentials: "D.D.S.",
    role: "Comprehensive care",
    group: "doctors",
    image: "/images/2026-dr-cummings.jpg",
    bio: [
      "Dr. Rachel Cummings is a Grand Forks native who graduated from Creighton University School of Dentistry in 2016. In 2011, she earned her Bachelor of Science Degree from the University of Nebraska-Lincoln in Anthropology.",
      "Dr. Cummings enjoys staying up to date on continuing education. She is a member of both the North Dakota Dental Association and the American Dental Association.",
      "Away from the office Dr. Cummings can be found spending time with her husband Cody and their two boys. She likes to read, run, bike and play golf. While she may have spent her college years in Nebraska (go Big Red!) she is a UND hockey fan who enjoys attending home games.",
      "Dr. Cummings is happy to service Greater Grand Forks community by providing comprehensive, quality dental care.",
    ],
  },
  {
    id: "Chris",
    name: "Chris Bothun",
    credentials: "D.D.S.",
    role: "Orthodontics & general dentistry",
    group: "doctors",
    image: "/images/2026-dr-bothun.jpg",
    bio: [
      "Dr. Christopher Bothun joined Dakota Dental Associates after graduating from University of Minnesota School of Dentistry in 2017. He was born and raised in Grand Forks and earned a Bachelor of Science Degree in Biology at the University of North Dakota. Dr. Bothun completed training in straight wire orthodontics from Gerety Orthodontic seminars in 2023-2024.",
      "He enjoys staying up to date on the newest techniques in dentistry by reading clinical journals and maintains the following memberships:",
    ],
    highlights: ["North Dakota Dental Association", "American Dental Association"],
    bioAfterList: [
      "Dr. Bothun enjoys spending time with his wife, Rachel, four young children, and two dogs. Dr. Bothun's passions are enjoying the outdoors with his family and upland bird hunting with his dogs.",
    ],
  },
  {
    id: "Kayla",
    name: "Kayla Nelson",
    credentials: "D.D.S.",
    role: "General & pediatric care",
    group: "doctors",
    image: "/images/2026-Dr-Kayla.jpg",
    bio: [
      "Dr. Kayla Nelson is the newest addition to Dakota Dental Associates, recently graduating from the University of Minnesota School of Dentistry in 2024. She was born and raised in East Grand Forks, MN and completed her undergraduate studies with a Bachelor of Science Degree in Biology at the University of North Dakota. Dr. Nelson is currently a member of the American Dental Association and enjoys staying up to date on all the areas dentistry has to offer. She loves seeing a variety of patients, but has a special place in her heart for her pediatric patients.",
      "Dr. Nelson likes to spend her free time at the lake with her dog Mari, attending concerts with friends, trying new restaurants, and hosting family game nights. She is excited to be back in her hometown and to serve her community!",
    ],
  },
  {
    id: "Renee",
    name: "Renee",
    role: "Office Manager",
    group: "administrative",
    image: "/images/reneea.jpg",
    bio: [
      "As office manager, Renee is at the hub of Dakota Dental. In the dentistry field for more than four decades, she nearly has done it all. A graduate from North Dakota State College of Science in Wahpeton, she began her career as a dental assistant in 1980. She joined Dakota Dental in 1995 as a dental hygienist and became the office manager in 2000. A Red River Valley native, Renee, her husband and daughter call Grand Forks home. When it's time to relax, she likes to travel, spend time with her family and get knee-deep in paper crafting.",
    ],
  },
  {
    id: "Lori",
    name: "Lori",
    role: "Vendor Accounts & Community",
    group: "administrative",
    image: "/images/2026-Lori.jpg",
    bio: [
      "Lori manages the vendor accounts, employee benefits, and the many charitable donations and activities Dakota Dental is involved with. She is a surgical technician by education, but has adapted nicely to her important role as the need grew. If you take a look at our Facebook page you will likely see one of the many gift baskets she has put together. She is married to Dr. Paul Bothun and together they raised five wonderful children. She is passionate about all styles of exercise and thoroughly enjoys spending time with her family engaging in many outdoor activities. She is very proud to be part of the wonderful team at Dakota Dental and the quality health care they provide.",
    ],
  },
  {
    id: "Michaela",
    name: "Michaela",
    role: "Hygiene Coordinator",
    group: "administrative",
    image: "/images/2026-michaela2.jpg",
    bio: [
      "Michaela serves as our Hygiene Coordinator, helping keep the hygiene department running smoothly while assisting patients with scheduling, insurance questions, and account needs. She joined our team in 2022 as an Administrative Assistant and was promoted to her current role in 2025.",
      "Originally from Browerville, MN, she holds a degree in horticulture, bringing a detail-oriented and grounded approach to her work.",
      "Outside of work, Michaela enjoys hiking and exploring new places with her husband and son. She also loves board game nights, quilting, and other creative projects, and brings that same creativity and care into everything she does.",
    ],
  },
  {
    id: "Sandi",
    name: "Sandi",
    role: "Insurance",
    group: "administrative",
    image: "/images/sandig.jpg",
    bio: [
      "Sandi will assist you in getting your insurance on file. Sandi is an East Grand Forks native with education in both medical secretary and dental assisting. She likes spending time with her family and friends and dog Henry.",
    ],
  },
  {
    id: "Anaka",
    name: "Anaka",
    role: "Treatment Coordinator",
    group: "administrative",
    image: "/images/2026-anaka.jpg",
    bio: [
      "Anaka serves as our Treatment Coordinator, helping organize the doctors' schedule by coordinating with specialty offices and going over treatment plans in detail with patients. She joined our team in 2024 working as an administrative assistant and was promoted to her new role in 2025. Anaka is originally from Bottineau, ND and moved to Grand Forks to get her degree in English. In her spare time, she enjoys reading books from a variety of genres and play board or card games with friends and family. In the summer she enjoys being outside as much as possible.",
    ],
  },
  {
    id: "Aneth",
    name: "Aneth",
    role: "Front Desk",
    group: "administrative",
    image: "/images/2026-aneth.jpg",
    bio: [
      "Aneth is the first person you see when you enter Dakota Dental Associates. She will welcome you with a smile and help get you checked in for your appointment. Aneth is originally from Stephen, MN. In her spare time, Aneth loves spending quality time at home with her husband and two dogs, whether that's cooking and baking or having a movie night and playing games. Aneth enjoys listening to music, relaxing with a good book or coloring whenever she has the chance.",
    ],
  },
  {
    id: "Kamryn",
    name: "Kamryn",
    role: "Checkout & Financial Questions",
    group: "administrative",
    image: "/images/2026-kamrym.jpg",
    bio: [
      "Kamryn will assist you at checkout with getting your next appointment scheduled or answering financial questions. Kamryn is from Yakima, Washington and graduated from University of Jamestown with a degree in Business Administration. A few hobbies of hers are reading and listening to music. Outside of work, Kamryn keeps busy with many activities including skiing, ice fishing, snowmobiling, and in the warmer months, she also enjoys playing golf and some soccer if given the chance.",
    ],
  },
  {
    id: "Terri",
    name: "Terri",
    role: "Scheduling",
    group: "administrative",
    image: "/images/2026-terri.jpg",
    bio: [
      "Terri is one of the first people you may hear when calling into our office. She will help you schedule, answer upcoming appointment questions, or connect you with another office member for further help. Terri grew up here in Grand Forks, attending UND for her general studies and Northwest Tech College for an associate's degree as a Pharmacy Tech. In her free time, Terri enjoys spending time at the lake. She has two children Alyssa and Alec.",
    ],
  },
  {
    id: "Nalirath",
    name: "Nalirath",
    role: "Front Office Team",
    group: "administrative",
    image: "/images/2026-Nalirath.jpg",
    bio: [
      "Nalirath grew up in Warroad, MN and went to the MN School of Business and the Art Institute International MN. Nal wanted to be part of something that greatly improves everyone's overall health, so she decided to join our team here at DDA! When Nal has down time, she enjoys spending time with her husband and 3 kids. She also loves thrifting and doing arts/crafts in her free time.",
    ],
  },
  {
    id: "Lindsay",
    name: "Lindsay",
    role: "Dental Hygienist",
    group: "hygiene",
    image: "/images/2026-lindsay.jpg",
    bio: [
      "Lindsay is a Grand Forks native who returned to the area after graduating from the dental hygiene program at Minnesota State Community and Technical College in 2011. Lindsay and her husband, Bryan, have two kids, Karlie and Wyatt. When the family isn't at the hockey, they enjoy spending their time at the lake.",
    ],
  },
  {
    id: "Lexi",
    name: "Lexi",
    role: "Dental Hygienist",
    group: "hygiene",
    image: "/images/2026-lexi.jpg",
    bio: [
      "Originally from Fordville, ND, dental hygienist Lexi graduated from MSCTC in Moorhead, MN in 2015 with a degree in dental hygiene. Growing up she loved her hygienist and getting her teeth clean which inspired her to work in the dental field. She likes being able to give advice and educate patients on how to help improve their oral health. Lexi likes to stay active in her free time by playing basketball, softball, working out and spending time with her dog, Baylor. When not at work, she enjoys reading, spending time with family and friends and watching the Minnesota Vikings & Duke basketball.",
    ],
  },
  {
    id: "Sherry",
    name: "Sherry",
    role: "Dental Hygienist",
    group: "hygiene",
    image: "/images/2026-sherry.jpg",
    bio: [
      "Hygienist Sherry grew up in northern Minnesota in her hometown of Crookston. She graduated in 2006 from Lake Superior College in Duluth, MN. Sherry has had an interest in dentistry since her teenage years when having braces straighten her own teeth amazed her. Sherry enjoys traveling with her husband Shawn. While at home, she enjoys watching movies, couponing, walking her dog Molly, writing to her California pen pal of over 25 years, and spending time with her 2 children.",
    ],
  },
  {
    id: "Jordan",
    name: "Jordan",
    role: "Dental Hygienist",
    group: "hygiene",
    image: "/images/2026-jordan.jpg",
    bio: [
      "Jordan grew up in Grand Forks and graduated from dental hygiene school at MSCTC in Moorhead, MN in 2021. Jordan always liked going to the dentist as a child and wanted to pursue a career in helping others enjoy the dentist while improving their oral health. Jordan enjoys the outdoors, sports (especially basketball) and spending time with friends.",
    ],
  },
  {
    id: "Paris",
    name: "Paris",
    role: "Dental Hygienist",
    group: "hygiene",
    image: "/images/2026-paris.jpg",
    bio: [
      "Paris grew up in Bismarck, ND and graduated from dental hygiene school at NDCSC in Wahpeton in 2025. She always wanted to work in the healthcare field and began an interest in dentistry from when she was a young child going to cleanings herself. Outside of the office, Paris enjoys spending time with family and friends.",
    ],
  },
  {
    id: "Rayni",
    name: "Rayni",
    role: "Dental Hygienist",
    group: "hygiene",
    image: "/images/2026-rayni.jpg",
    bio: [
      "Rayni is originally from Bismarck, ND. She graduated from M State Technical College in the Hygiene program. She has always wanted to work in dental ever since she was younger. She loves to help keep her patient's smiles bright and happy. When she's not at work, Rayni can be found spending time with friends or visiting with her family. She also loves spending an evening watching new movies or catching up on shows.",
    ],
  },
  {
    id: "Robyn",
    name: "Robyn",
    role: "Registered Dental Assistant",
    group: "assistants",
    image: "/images/2026-robyn.jpg",
    bio: [
      "Registered Dental Assistant Robyn, is an East Grand Forks native who joined Dakota Dental in 2005 after graduating from Moorhead State Technical College in 2004. When she's not working she's juggling children. Her and her husband, Jason, have a daughter, Bailee, twins, Max and Miley and a black lab named Jazzy. Robyn enjoys baking, going to UND hockey games, spending time with family and going to the lake in the summertime.",
    ],
  },
  {
    id: "Rachael",
    name: "Rachael",
    role: "Dental Assistant",
    group: "assistants",
    image: "/images/rachaell.jpg",
    bio: [
      "Rachael grew up in Thief River Falls, MN and graduated from NCTC in Bemidji, MN with a degree in Dental Assisting. She has always had an interest in teeth; in middle school she did a science fair project on the effects of pop on teeth! Rachael loves to be a part of what makes patients more confident in their smiles and more comfortable at the dentist. She says there's nothing better than quality time with her husband, daughters and dogs. They love the outdoors, camping, farmer's market or just being home. When Rachael does get some quiet time, you will find her curled up with a book or outside playing volleyball and softball.",
    ],
  },
  {
    id: "Erika",
    name: "Erika",
    role: "Sterilization Technician",
    group: "assistants",
    image: "/images/2026-erika.jpg",
    bio: [
      "Erika is our sterilization tech who makes sure our team has what they need to take great care of our patients. She can be found helping sterilizing instruments, ordering dental supplies, and coordinating service visits. Outside of the office she enjoys spending time with her family and following her three kids in their many activities.",
    ],
  },
  {
    id: "Hannah C",
    name: "Hannah",
    role: "Dental Assistant",
    group: "assistants",
    image: "/images/2026-hannah.jpg",
    bio: [
      "Hannah was born and raised in Crookston, MN, and graduated in 2022 from North Dakota State College of Science in Wahpeton, ND. She has had an interest in dentistry since she was a teenager with braces. Intrigued by the process, she decided she wanted to help others love their smile too. In her free time, she enjoys spending time with her family and friends, going on walks with her dog Boe and fiancé Marco, cooking and baking.",
    ],
  },
  {
    id: "Kaylie",
    name: "Kaylie",
    role: "Registered Dental Assistant",
    group: "assistants",
    image: "/images/2026-kaylie.jpg",
    bio: [
      "Kaylie is a Registered Dental Assistant who grew up in East Grand Forks, MN. She received her dental education at Minnesota State Technical College in Moorhead. Kaylie joined our dental assisting team following her graduation in 2022. When she is away from the office, she enjoys spending time with family and friends along with working out and staying active. She likes to cheer on her two younger siblings when watching their sporting events!",
    ],
  },
  {
    id: "Hannah D",
    name: "Hannah",
    role: "Dental Assistant",
    group: "assistants",
    image: "/images/2026-hannah-2.jpg",
    bio: [
      "Hannah was born and raised in Devils Lake, ND. She attended the Dental Assisting program at NDSCS and graduated in 2023. Hannah's hobbies include shopping, working out, and hanging out with friends. She is also a UND hockey fan.",
    ],
  },
  {
    id: "Kaitlin",
    name: "Kaitlin",
    role: "Dental Assistant",
    group: "assistants",
    image: "/images/2026-kaitlin.jpg",
    bio: [
      "Kaitlin grew up on a farm in Hillsboro. She graduated from NDSCS with a degree in Dental Assisting. Kaitlin likes spending time with her dogs, friends and family.",
    ],
  },
];

export const doctors = team.filter((member) => member.group === "doctors");
