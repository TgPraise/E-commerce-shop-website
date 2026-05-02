import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import SectionHeading from "@/components/SectionHeading";
import { teamMembers } from "@/data/siteData";
import { User, ChevronDown, ChevronUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CEO from "../assets/galary/CEO's-photo.webp";

const TeamPage = () => {
  const founder = teamMembers.find((m) => m.isFounder);
  const team = teamMembers.filter((m) => !m.isFounder);
  const [bioExpanded, setBioExpanded] = useState(false);

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
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
                    {founder.name}
                  </h2>
                  <p className="text-accent font-medium mb-6">{founder.role}</p>

                  {/* Bio with Read More */}
                  <div className="relative">
                    <p
                      className={`text-text-secondary leading-relaxed text-lg transition-all duration-500 ${
                        bioExpanded ? "" : "line-clamp-4"
                      }`}
                    >
                      {founder.bio}
                    </p>

                    {/* Fade mask when collapsed */}
                    {!bioExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
                    )}
                  </div>

                  {/* Toggle button */}
                  <button
                    onClick={() => setBioExpanded((prev) => !prev)}
                    className="mt-3 flex items-center gap-1.5 text-accent text-sm font-medium hover:opacity-70 transition-opacity"
                  >
                    {bioExpanded ? (
                      <>Show less <ChevronUp size={15} /></>
                    ) : (
                      <>Read more <ChevronDown size={15} /></>
                    )}
                  </button>

                  {/* View Certifications */}
                  <div className="mt-8">
                    <Button variant="outline" asChild>
                      <Link to="/certifications" className="flex items-center gap-2">
                        <Award size={16} />
                        View Certifications
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}
    </>
  );
};

export default TeamPage;