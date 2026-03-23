import MainLayout from "@/layouts/MainLayout";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Gallery from "@/sections/Gallery";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </MainLayout>
  );
}
