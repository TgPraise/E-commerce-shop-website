import { Award, ShieldCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/data/siteData";

const categoryGroups = [
  { key: "academic",   label: "Academic Qualifications" },
  { key: "safety",     label: "Safety & Health" },
  { key: "security",   label: "Security & Intelligence" },
  { key: "membership", label: "Professional Memberships" },
];

const CertificationsPage = () => {
  return (
    <>
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow">
          <FadeIn>
            <span className="font-mono-ui text-xs text-accent mb-4 block tracking-widest uppercase">
              Credentials
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight">
              Certifications
            </h1>
            <p className="mt-4 text-primary-foreground/60 text-lg max-w-xl leading-relaxed">
              Our team holds internationally recognized certifications, ensuring
              the highest standards of professional excellence.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow space-y-16">
          {categoryGroups.map((group) => {
            const items = certifications.filter((c) => c.cat === group.key);
            if (!items.length) return null;

            return (
              <FadeIn key={group.key}>
                {/* Group Header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono-ui text-xs text-[hsl(216,69%,35%)] tracking-widest uppercase whitespace-nowrap">
                    {group.label}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                  <span className="font-mono-ui text-xs text-muted-foreground/40">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Cards */}
                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((cert) => (
                    <StaggerItem key={cert.name}>
                      <div className="group relative bg-surface border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden h-full">
                        
                        {/* top accent line on hover */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[hsl(216,69%,35%)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                        <div className="p-6">
                          {/* Icon + badge row */}
                          <div className="flex items-start justify-between mb-5">
                            <div className="w-10 h-10 text-[hsl(216,69%,35%)] border border-accent/20 flex items-center justify-center shrink-0">
                              <Award className="w-5 h-5 text-[hsl(216,69%,35%)]" />
                            </div>
                            <span className="font-mono-ui text-[9px] tracking-[0.2em] text-muted-foreground/40 uppercase mt-1">
                              {group.label.split(" ")[0]}
                            </span>
                          </div>

                          {/* Name */}
                          <h3 className="font-display text-xl font-semibold text-foreground mb-2 leading-tight tracking-tight">
                            {cert.name}
                          </h3>

                          {/* Description */}
                          <p className="font-mono-ui text-[11px] text-[hsl(216,69%,35%)]/80 tracking-wide mb-4 leading-relaxed">
                            {cert.description}
                          </p>

                          {/* Divider */}
                          <div className="h-px bg-border mb-4" />

                          {/* Issuer */}
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CertificationsPage;