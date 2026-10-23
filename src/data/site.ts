import {
  Fingerprint, CreditCard, Vote, Plane, Train, FileText, Printer, Scan,
  Copy, Image, IdCard, FileSignature, Globe, Briefcase, GraduationCap,
  Monitor, Keyboard, Mail, Calculator, BookOpen, Wifi,
  ShieldCheck, Users, Wallet, Zap, Sparkles, HeartHandshake,
} from "lucide-react";

export const services = [
  {
    group: "Government Services",
    items: [
      { icon: Fingerprint, title: "Aadhaar Services", desc: "Enrolment, updates & corrections." },
      { icon: CreditCard, title: "PAN Card Services", desc: "New PAN, corrections & e-PAN download." },
      { icon: Vote, title: "Voter Card Services", desc: "New voter ID, address change & corrections." },
      { icon: IdCard, title: "Passport Assistance", desc: "Form fill-up, appointments & documents." },
    ],
  },
  {
    group: "Online Services",
    items: [
      { icon: FileSignature, title: "Online Form Fill-up", desc: "Any online form, neatly handled." },
      { icon: Briefcase, title: "Government Applications", desc: "Schemes, certificates & licenses." },
      { icon: GraduationCap, title: "Exam Registrations", desc: "School, college & competitive exams." },
      { icon: Globe, title: "Job Application Forms", desc: "Sarkari & private job applications." },
    ],
  },
  {
    group: "Travel Services",
    items: [
      { icon: Train, title: "Railway Ticket Booking", desc: "IRCTC booking & tatkal support." },
      { icon: Plane, title: "Air Ticket Booking", desc: "Domestic & international flights." },
    ],
  },
  {
    group: "Documentation",
    items: [
      { icon: Printer, title: "Printing", desc: "Color & B/W, A4 to A3." },
      { icon: Scan, title: "Scanning", desc: "High-resolution document scans." },
      { icon: Copy, title: "Photocopy", desc: "Bulk Xerox at the best rate." },
      { icon: FileText, title: "Lamination", desc: "ID-card to A4 lamination." },
      { icon: Image, title: "Passport Photos", desc: "Instant studio-quality prints." },
    ],
  },
  {
    group: "Computer Services",
    items: [
      { icon: Monitor, title: "Resume Creation", desc: "Modern, ATS-friendly resumes." },
      { icon: Keyboard, title: "DTP Work", desc: "Posters, cards & layout design." },
      { icon: Wifi, title: "Internet Services", desc: "Reliable internet for your tasks." },
    ],
  },
] as const;

export const courses = [
  { title: "Basic Computer Course", duration: "3 months", level: "Beginner", progress: 90,
    highlights: ["Windows basics", "File management", "Hardware overview"] },
  { title: "MS Office Mastery", duration: "2 months", level: "Beginner → Intermediate", progress: 80,
    highlights: ["Word, Excel, PowerPoint", "Formulas & charts", "Real-world projects"] },
  { title: "Internet & Email", duration: "1 month", level: "Beginner", progress: 70,
    highlights: ["Safe browsing", "Email etiquette", "Cloud basics"] },
  { title: "Typing Course", duration: "1–2 months", level: "All levels", progress: 85,
    highlights: ["English & Bengali", "Speed drills", "Certificate"] },
  { title: "Tally Basics", duration: "2 months", level: "Intermediate", progress: 75,
    highlights: ["Accounting fundamentals", "GST entries", "Reports"] },
  { title: "Digital Literacy Program", duration: "1 month", level: "All levels", progress: 95,
    highlights: ["UPI & DigiLocker", "Online safety", "Govt. portals"] },
];

export const whyUs = [
  { icon: ShieldCheck, title: "Trusted Local Service", desc: "Proudly serving Janai for years." },
  { icon: Users, title: "Experienced Staff", desc: "Patient, friendly & knowledgeable." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Fair rates for every service." },
  { icon: Zap, title: "Fast Processing", desc: "Most work delivered same-day." },
  { icon: GraduationCap, title: "Student Friendly", desc: "Designed around real learners." },
  { icon: HeartHandshake, title: "Professional Support", desc: "We stay with you till it's done." },
];

export const stats = [
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 8, suffix: "+", label: "Years of Service" },
  { value: 24, suffix: "h", label: "Quick Turnaround" },
];

export const testimonials = [
  { name: "Riya Das", role: "Student, B.A.", rating: 5,
    quote: "I learned MS Office and typing here. The teachers are very patient and the lab is clean and modern." },
  { name: "Subhasish Ghosh", role: "Shop Owner", rating: 5,
    quote: "Got my PAN correction done in just two days. Honest pricing and great service every time." },
  { name: "Mou Sarkar", role: "Homemaker", rating: 5,
    quote: "They helped me with Aadhaar update and online form fill-up. Felt welcomed and never confused." },
  { name: "Arnab Pal", role: "Job Aspirant", rating: 5,
    quote: "Booked exam forms and railway tickets here. Reliable, fast, and always available when I need them." },
];

export const contact = {
  address: "Madhu Computer Center, Janai, Hooghly, West Bengal 712304",
  phone: "+91 84810 63981 / +91 80130 90809",
  email: "hello@madhucomputer.in",
  hours: "Mon–Sat · 9:00 AM – 8:00 PM",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];