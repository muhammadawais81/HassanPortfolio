import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo } from "@/data/portfolio";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: personalInfo.whatsapp,
    href: `https://wa.me/${personalInfo.whatsapp.replace(/\D/g, "")}`,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "hassan-alvi",
    href: personalInfo.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeading
            number="08"
            label="Contact"
            title="Let's connect"
            description="Open to discussing export marketing opportunities, brand partnerships, and merchandising leadership roles."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="glow-border relative mx-auto max-w-4xl overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-card to-background" />
            <div className="glass-card relative grid md:grid-cols-2">
              <div className="border-b border-border/60 p-5 sm:p-8 md:border-b-0 md:border-r md:p-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dark text-background sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Send size={22} className="sm:hidden" />
                  <Send size={24} className="hidden sm:block" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  Get in touch
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                  Whether you represent a fashion brand, textile manufacturer, or
                  recruitment agency, I welcome professional conversations about
                  how my experience can support your goals.
                </p>
                <p className="mt-4 break-words rounded-xl border border-border/60 bg-surface p-3 text-xs text-muted sm:mt-6 sm:p-4 sm:text-sm">
                  <span className="font-semibold text-foreground">Address: </span>
                  {personalInfo.address}
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary mt-5 sm:mt-6 md:!w-auto"
                >
                  <Mail size={16} />
                  Send an Email
                </a>
              </div>

              <div className="p-5 sm:p-8 md:p-10">
                <ul className="space-y-2 sm:space-y-3">
                  {contactItems.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.label === "LinkedIn" || item.label === "WhatsApp"
                              ? "_blank"
                              : undefined
                          }
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-xl border border-transparent p-2.5 transition-all hover:border-accent/20 hover:bg-accent/5 sm:gap-4 sm:rounded-2xl sm:p-3"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-background sm:h-11 sm:w-11">
                            <item.icon size={18} className="sm:hidden" />
                            <item.icon size={20} className="hidden sm:block" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted sm:text-xs">
                              {item.label}
                            </span>
                            <span className="block truncate text-sm font-medium text-foreground">
                              {item.value}
                            </span>
                          </span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-3 rounded-xl p-2.5 sm:gap-4 sm:rounded-2xl sm:p-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:h-11 sm:w-11">
                            <item.icon size={18} className="sm:hidden" />
                            <item.icon size={20} className="hidden sm:block" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted sm:text-xs">
                              {item.label}
                            </span>
                            <span className="block text-sm font-medium text-foreground">
                              {item.value}
                            </span>
                          </span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
