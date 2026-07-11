import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectsCarousel />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
