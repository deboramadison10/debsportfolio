import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

const socials = [
  { icon: GithubIcon, href: "https://github.com/deboramadison10", label: "GitHub" },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/debora-madison-028735210/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:debmadison10@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-10 text-center">
        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="grid size-10 place-items-center rounded-full bg-primary-foreground/15 transition-colors hover:bg-primary-foreground/30"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
        <p className="text-sm text-primary-foreground/80">
          Proudly developed by me, myself, and I. &copy;{" "}
          {new Date().getFullYear()} Debora Madison.
        </p>
      </div>
    </footer>
  )
}
