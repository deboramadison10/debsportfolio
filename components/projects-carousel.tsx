"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Trophy } from "lucide-react"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  href: string
  cta: string
  award?: string
}

const projects: Project[] = [
  {
    title: "Gamora's Pup-venture",
    description:
      "A side-scrolling game built with Godot and Piskel in which players guide a corgi through agility tasks to obtain badges.",
    image: "projects/pup-venture.png",
    tags: ["Godot", "Piskel", "Game Design"],
    href: "https://devpost.com/software/gamora-s-pup-venture",
    cta: "Check Devpost",
    award: "Best Retro Project — Missouri S&T PickHacks 2025",
  },
  {
    title: "Office Resource Booking",
    description:
      "Led the design and implementation of the frontend and user interface for a web-based office resource booking system.",
    image: "projects/office-booking.png",
    tags: ["React", "UI/UX", "Frontend"],
    href: "https://github.com/deboramadison10/Office-Resource-Booking-System",
      cta: "Check Repo",
  },
  {
    title: "Boeing Search Simulator",
    description:
      "Designed and developed the entire frontend and UI/UX for an air-to-ground search simulation website, including a custom Game Boy-style interface to visualize and compare search algorithms interactively.",
    image: "projects/search-simulator.png",
    tags: ["UI/UX", "Visualization", "Algorithms"],
    href: "https://github.com/CS4091/TEAM_N",
    cta: "Check Repo",
  },
  {
    title: "Small Tech Business Website",
    description:
      "A responsive website for a small tech business, featuring a modern design and intuitive user experience. Created while testing out Figma Make.",
    image: "projects/small-tech-website.png",
    tags: ["Figma", "HTML", "CSS", "JavaScript", "UI/UX"],
    href: "https://www.figma.com/@debora_a34adc18",
    cta: "Check Design",
  },
  {
    title: "Restaurant Reservation App",
    description:
      "A responsive mobile application for booking restaurant tables, featuring a clean design and seamless user experience.",
    image: "projects/restaurant-reservation.png",
    tags: ["Figma", "UI/UX", "Mobile App Design"],
    href: "https://www.figma.com/@debora_a34adc18",
    cta: "Check Design",
  },
]

export function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(index, projects.length - 1))
    const card = track.children[clamped] as HTMLElement | undefined
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" })
      setActive(clamped)
    }
  }, [])

  // track the most-centered card while scrolling
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const center = track.scrollLeft + track.clientWidth / 2
      let closest = 0
      let closestDist = Infinity
      Array.from(track.children).forEach((child, i) => {
        const el = child as HTMLElement
        const elCenter = el.offsetLeft - track.offsetLeft + el.clientWidth / 2
        const dist = Math.abs(elCenter - center)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      })
      setActive(closest)
    }
    track.addEventListener("scroll", onScroll, { passive: true })
    return () => track.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.25em] text-primary">
              My Work
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent-foreground sm:text-4xl">
              Projects
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => scrollToIndex((active - 1 + projects.length) % projects.length)}
              disabled={active === 0}
              className="grid size-11 place-items-center rounded-full border-2 border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-primary"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => scrollToIndex((active + 1) % projects.length)}
              disabled={active === projects.length - 1}
              className="grid size-11 place-items-center rounded-full border-2 border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-primary"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex w-[65%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg sm:w-[55%] lg:w-[42%]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} preview`}
                  className="size-full object-cover"
                />
                {project.award && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow">
                    <Trophy className="size-3.5" />
                    Award Winner
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {project.title}
                </h3>

                {project.award && (
                  <p className="mt-2 text-sm font-semibold text-primary">
                    {project.award}
                  </p>
                )}

                <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/25 px-3 py-1 text-xs font-semibold text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {project.cta}
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-2 flex justify-center gap-2.5">
          {projects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              aria-label={`Go to ${project.title}`}
              aria-current={active === i}
              onClick={() => scrollToIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                active === i ? "w-8 bg-primary" : "w-2.5 bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
