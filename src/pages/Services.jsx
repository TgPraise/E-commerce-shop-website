import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/siteData";

const ServicesPage = () => (
  <>
    {/* Banner */}
    <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-narrow">
        <FadeIn>
          <span className="font-mono-ui text-xs text-accent mb-4 block">What We Do</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-primary-foreground/60 text-lg max-w-xl">
            Comprehensive safety and security consultancy services tailored to your industry and risk profile.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <Link
                  to={`/services/${service.id}`}
                  className="group block bg-surface p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
                >
                  <Icon className="w-10 h-10 text-accent mb-5" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={16} />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-surface">
      <div className="container-narrow text-center">
        <FadeIn>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Need a Customized Solution?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Our experts will work with you to develop a tailored safety and security strategy.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get in Touch <ArrowRight size={16} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </>
);

export default ServicesPage;
