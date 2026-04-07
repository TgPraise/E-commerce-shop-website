import { Award } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/data/siteData";

const CertificationsPage = () => (
  <>
    <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-narrow">
        <FadeIn>
          <span className="font-mono-ui text-xs text-accent mb-4 block">Credentials</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight">
            Certifications
          </h1>
          <p className="mt-4 text-primary-foreground/60 text-lg max-w-xl">
            Our team holds internationally recognized certifications, ensuring the highest standards of professional excellence.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <div className="bg-surface p-6 border border-border hover:shadow-card-hover transition-shadow duration-300 h-full">
                <Award className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{cert.name}</h3>
                <p className="text-xs text-muted-foreground mb-3 font-mono-ui">{cert.description}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{cert.issuer}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  </>
);

export default CertificationsPage;
