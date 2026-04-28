import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import SectionHeading from "@/components/SectionHeading";
import { teamMembers } from "@/data/siteData";
import { User } from "lucide-react";
import CEO from "../assets/galary/CEO's-photo.webp";

const TeamPage = () => {
  const founder = teamMembers.find((m) => m.isFounder);
  const team = teamMembers.filter((m) => !m.isFounder);

  return (
    <>
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow">
          <FadeIn>
            <span className="font-mono-ui text-xs text-accent mb-4 block">Our People</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight">
              Leadership & Team
            </h1>
            <p className="mt-4 text-primary-foreground/60 text-lg max-w-xl">
              Meet the professionals behind our world-class safety and security consultancy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder */}
      {founder && (
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <FadeIn>
              <div className="grid md:grid-cols-3 gap-10 items-start">
                <div className="bg-surface flex items-center justify-center aspect-[3/4] rounded-lg overflow-hidden">
                  <img src={CEO} alt={founder.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-2">
                  <span className="font-mono-ui text-xs text-accent mb-3 block">Founder & CEO</span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">{founder.name}</h2>
                  <p className="text-accent font-medium mb-6">{founder.role}</p>
                  <p className="text-text-secondary leading-relaxed text-lg">{founder.bio}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Team */}
      {/* <section className="section-padding bg-surface">
        <div className="container-narrow">
          <FadeIn>
            <SectionHeading label="The Team" title="Our Experts" description="Dedicated professionals committed to your safety and security." />
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-background p-6 shadow-card h-full">
                  <div className="w-full aspect-square bg-surface flex items-center justify-center mb-4">
                    <User className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">{member.name}</h3>
                  <p className="text-xs text-accent mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}
    </>
  );
};

export default TeamPage;
