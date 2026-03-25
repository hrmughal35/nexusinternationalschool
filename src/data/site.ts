export const siteConfig = {
  name: "Nexus International School",
  shortName: "Nexus",
  description:
    "A premium future-ready school experience blending academic excellence, creativity, technology, and global citizenship.",
  url: "https://nexus-school.example",
  phone: "+92 300 1234567",
  email: "admissions@nexusinternationalschool.pk",
  address: "Garden Town Phase 2 Block H, Gujranwala",
  whatsappLink: "https://wa.me/923001234567",
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
    name: "Ayesha Khalid",
    role: "Parent of Year 4 Student",
    quote:
      "Our first visit gave us full confidence. Nexus feels modern, caring, and exactly the environment we wanted for our daughter.",
  },
  {
    name: "Usman Tariq",
    role: "Parent of O-Level Student",
    quote:
      "From academics to mentorship, the school has improved my son's confidence and future planning in a very positive way.",
  },
  {
    name: "Maria Javed",
    role: "Parent of Early Years Student",
    quote:
      "The welcoming environment and teacher attention made us feel this was the right place for our child from day one.",
  },
] as const;

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=1200&q=80",
    alt: "Pakistani students collaborating in a modern classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
    alt: "School assembly and student participation",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80",
    alt: "Students in sports and physical training activities",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
    alt: "Technology lab session with school students",
  },
  {
    src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=900&q=80",
    alt: "Pakistani students engaged in creative arts",
  },
  {
    src: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1000&q=80",
    alt: "Outdoor learning and community culture on campus",
  },
] as const;
