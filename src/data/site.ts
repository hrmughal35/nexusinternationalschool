export const siteConfig = {
  name: "Nexus International School",
  shortName: "Nexus",
  description:
    "A premium future-ready school experience blending academic excellence, creativity, technology, and global citizenship.",
  url: "https://nexus-school.example",
  phone: "+971 4 555 0188",
  email: "admissions@nexus-school.example",
  address: "88 Horizon Crescent, Education City",
  whatsappLink: "https://wa.me/97145550188",
  navLinks: [
    { label: "About", href: "/#about" },
    { label: "Academics", href: "/#programs" },
    { label: "Campus Life", href: "/#campus-life" },
    { label: "Admissions", href: "/#admissions" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const stats = [
  { label: "Students Thriving", value: 1800, suffix: "+" },
  { label: "Expert Faculty", value: 145, suffix: "+" },
  { label: "University Offers", value: 98, suffix: "%" },
  { label: "Global Activities", value: 35, suffix: "+" },
] as const;

export const programs = [
  {
    title: "Early Years",
    age: "Ages 3-5",
    description:
      "Play-rich, inquiry-led learning spaces where confidence, curiosity, and communication bloom naturally.",
  },
  {
    title: "Primary School",
    age: "Grades 1-5",
    description:
      "Strong foundations in literacy, numeracy, science, and digital thinking with project-based discovery.",
  },
  {
    title: "Middle School",
    age: "Grades 6-8",
    description:
      "Interdisciplinary academics, leadership labs, and innovation studios designed for emerging thinkers.",
  },
  {
    title: "Secondary Pathways",
    age: "O-Level / Matric",
    description:
      "Rigorous academic preparation, mentoring, and university-ready guidance for ambitious future leaders.",
  },
] as const;

export const visionMission = [
  {
    title: "Vision",
    body: "To shape confident, compassionate, and globally minded young leaders ready to design a better world.",
  },
  {
    title: "Mission",
    body: "To deliver immersive education through world-class teaching, future-facing technology, and character formation.",
  },
  {
    title: "Promise",
    body: "To create a safe, inspiring campus where every child is seen, stretched, and celebrated.",
  },
] as const;

export const admissionsSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "Connect with our admissions advisors to understand your child's needs and our pathways.",
  },
  {
    step: "02",
    title: "Campus Visit",
    description:
      "Experience our immersive learning spaces, innovation labs, sports arenas, and student culture firsthand.",
  },
  {
    step: "03",
    title: "Assessment & Interview",
    description:
      "A warm, age-appropriate assessment helps us personalize the best learning journey for your child.",
  },
  {
    step: "04",
    title: "Enrollment Offer",
    description:
      "Receive your offer, fee pack, and onboarding support from our family experience team.",
  },
] as const;

export const feeHighlights = [
  "Flexible payment plans with term-based scheduling",
  "Scholarship pathways for academic and creative excellence",
  "Transparent tuition with technology and co-curricular support",
] as const;

export const testimonials = [
  {
    name: "Amina Rahman",
    role: "Parent of Year 4 Student",
    quote:
      "The first visit changed everything for us. Nexus feels like a global learning sanctuary, not just a school.",
  },
  {
    name: "Daniel Hughes",
    role: "Parent of O-Level Student",
    quote:
      "From academics to mentorship and confidence-building, the school has elevated my child's ambition beautifully.",
  },
  {
    name: "Sara Alvi",
    role: "Parent of Early Years Student",
    quote:
      "The warmth, design, and attention to every detail made us feel instantly certain this was the right place.",
  },
] as const;

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Students collaborating in a futuristic classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    alt: "Students celebrating a campus event",
  },
  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1000&q=80",
    alt: "School sports and wellness facilities",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    alt: "Innovation lab and technology learning session",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    alt: "Students engaged in creative arts",
  },
  {
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
    alt: "Outdoor learning and community culture",
  },
] as const;
