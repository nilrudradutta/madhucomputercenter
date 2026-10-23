import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Courses } from "@/components/sections/Courses";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madhu Computer Center — Digital Services & Computer Training in Janai, Hooghly" },
      { name: "description", content: "Aadhaar, PAN, online forms, ticket booking, printing & modern computer courses — your trusted local digital service center in Janai, Hooghly, West Bengal." },
      { property: "og:title", content: "Madhu Computer Center — Janai, Hooghly" },
      { property: "og:description", content: "Trusted digital service & computer training center in Janai, Hooghly. Aadhaar, PAN, printing, courses, and more." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Courses />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
