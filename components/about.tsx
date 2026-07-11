import { GraduationCap, Camera, Plane } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Science Grad",
    text: "B.S. from Missouri University of Science and Technology, May 2025.",
  },
  {
    icon: Camera,
    title: "Film Photography",
    text: "Capturing memories on my film cameras whenever I get the chance.",
  },
  {
    icon: Plane,
    title: "Traveling",
    text: "Exploring new places and spending quality time with family.",
  },
]

export function About() {
  return (
    <section id="about" className="bg-card py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-primary">
            About Me
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-teal sm:text-4xl">
            Hi, I&apos;m Deb!
          </h2>
          <div className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-foreground/80">
            <p>
              I am a Computer Science graduate (May 2025 - Missouri S&T) who builds interfaces
              the way I would want to use them; clean, intentional, and user-friendly.
            </p>
            <p>
              My background is in Front End development but my passion is UX/UI design.
              I care as much about how an interface feels and looks as I do about how it works, 
              and I love turning a rough idea into something visually considered and easy to use. 
            </p>
            <p>
              In my free time, I enjoy spending quality moments with my family,
              traveling, and capturing memories with my film cameras.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-background p-4 text-left"
              >
                <Icon className="size-6 text-primary" />
                <h3 className="mt-3 font-heading text-sm font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-accent/30 blur-xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about-deb.svg"
              alt="Illustration of Debora Madison"
              className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
