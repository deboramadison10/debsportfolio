"use client"

import { useState } from "react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Mail, MessageCircle, Send, Download } from "lucide-react"

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "debmadison10@gmail.com",
    href: "mailto:debmadison10@gmail.com",
  },
  {
      icon: Download,
      label: "Resume",
      value: "Download Now",
      href: `${process.env.NEXT_PUBLIC_BASE_PATH}/DMadison_Resume.pdf`,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "deboramadison10",
    href: "https://github.com/deboramadison10",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Debora Madison",
    href: "https://www.linkedin.com/in/debora-madison-028735210/",
  },
]

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${name || "someone"}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)
    window.location.href = `mailto:debmadison10@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-primary">
            Get In Touch
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-teal sm:text-4xl">
            Contact Me
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Have a project in mind, an opportunity, or just want to say hi? I&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* contact channels */}
          <div className="grid content-start gap-4 sm:grid-cols-2">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate font-heading text-sm font-bold text-foreground">
                      {value}
                    </span>
                  </span>
                </>
              )
              const classes =
                "flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary"
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  download={label === "Resume" ? "DMadison_Resume.pdf" : undefined}
                  className={classes}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className={classes}>
                  {inner}
                </div>
              )
            })}
          </div>

          {/* form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-background p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-left">
                <span className="mb-1.5 block text-sm font-semibold text-foreground">
                  Name
                </span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="block text-left">
                <span className="mb-1.5 block text-sm font-semibold text-foreground">
                  Email
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>
            <label className="mt-4 block text-left">
              <span className="mb-1.5 block text-sm font-semibold text-foreground">
                Message
              </span>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me a little about your project or idea..."
                className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-heading text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
            >
              Send Message
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
