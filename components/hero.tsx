import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/gradient-background.jpeg`}
        alt="Background gradient"
        className="absolute inset-0 size-full object-cover"
      />

      {/* readability overlay */}
      <div className="absolute inset-0 bg-background/55" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
          Welcome to Deb&apos;s site
        </p>
        <h1 className="text-balance font-heading text-4xl font-bold leading-tight text-teal sm:text-6xl">
          Hi, I&apos;m Deb!
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-foreground/80">
          Welcome to my creative world! Take a look into my work and projects.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-primary px-7 py-3 font-heading text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-primary bg-background/70 px-7 py-3 font-heading text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Contact Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-primary"
      >
        <ArrowDown className="size-7 animate-bounce" />
      </a>
    </section>
  )
}
