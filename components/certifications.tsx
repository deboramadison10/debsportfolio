import { ExternalLink } from "lucide-react"

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const certifications = [
    {
        title: "Simplifying Web Development with Accessibility Best Practices",
        issuer: "LinkedIn Learning",
        date: "Jul 2026",
        image: `${base}/projects/webdev_certificate.jpeg`,
        href: "https://www.linkedin.com/learning/certificates/af61e0c154c523b7089536c338dd653ca1b6ce49b968497162c39adaa6700c4d",
    },
    {
        title: "Sculptformer Qualified Instructor",
        issuer: "Core Collab",
        date: "Sept 2026",
        image: `${base}/projects/Debora_Madison_Sculptformer_Certificate.jpg`,
        href: "https://my-certificates.com/certificates/6ae291eb6f6540accd26dbca",
    },
]

export function Certifications() {
    return (
        <section id="certifications" className="bg-background py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <p className="font-heading text-sm uppercase tracking-[0.25em] text-primary">
                    Credentials
                </p>
                <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-teal sm:text-4xl">
                    Certifications
                </h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {certifications.map(({ title, issuer, date, image, href }) => (
                        <a
                            key={title}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary hover:shadow-lg"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-muted">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={image}
                                    alt={`${title} certificate`}
                                    className="size-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                            </div>
                            <div className="flex items-start justify-between gap-3 p-5">
                                <div className="min-w-0">
                                    <h3 className="font-heading text-sm font-bold text-foreground">
                                        {title}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {issuer}
                                        {date ? ` · ${date}` : ""}
                                    </p>
                                </div>
                                <ExternalLink className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}