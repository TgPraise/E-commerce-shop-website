import { Link } from "react-router-dom";
import { Target, Globe, Shield, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import SectionHeading from "@/components/SectionHeading";

const Hero = () => (
  <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.1),transparent_70%)]" />
    <div className="container-narrow relative z-10 py-32 md:py-40">
      <FadeIn delay={0.1}>
        <span className="font-mono-ui text-xs text-accent mb-6 block">Our Purpose</span>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-4xl">
          Our Mission & Vision
        </h1>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/60 max-w-2xl leading-relaxed">
          Driving safety, security, and sustainability through excellence and innovation
        </p>
      </FadeIn>
    </div>
  </section>
);

const MissionSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeIn>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full" />
              <div className="relative bg-surface p-12 md:p-16 rounded-sm shadow-card">
                <Shield className="w-24 h-24 md:w-32 md:h-32 text-accent mx-auto" strokeWidth={1.5} />
                <Leaf className="w-12 h-12 text-accent/60 absolute bottom-8 right-8" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div>
            <SectionHeading label="Our Mission" title="Protecting What Matters Most" />
            <p className="text-text-secondary leading-relaxed text-lg">
              To deliver world-class safety, security, and environmental consultancy services that protect lives, assets, and promote sustainable environments through innovation and continuous improvement.
            </p>
            <div className="mt-8 space-y-4">
              <StaggerContainer>
                {[
                  { icon: Shield, text: "Protect lives and assets with uncompromising standards" },
                  { icon: Leaf, text: "Promote sustainable and environmentally responsible practices" },
                  { icon: Target, text: "Drive innovation through continuous improvement" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <StaggerItem key={item.text}>
                      <div className="flex gap-3 items-start">
                        <Icon className="w-5 h-5 text-accent shrink-0 mt-1" strokeWidth={2} />
                        <p className="text-muted-foreground">{item.text}</p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const VisionSection = () => (
  <section className="section-padding bg-surface">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeIn delay={0.2} className="order-2 md:order-1">
          <div>
            <SectionHeading label="Our Vision" title="Setting the Global Standard" />
            <p className="text-text-secondary leading-relaxed text-lg">
              To be the world's most trusted and innovative leader in safety and security consultancy, setting the global standard for excellence in protecting lives, assets, and environments.
            </p>
            <div className="mt-8 space-y-4">
              <StaggerContainer>
                {[
                  { icon: Globe, text: "Global leadership in safety and security excellence" },
                  { icon: Target, text: "Setting industry standards worldwide" },
                  { icon: Shield, text: "Building lasting trust through proven results" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <StaggerItem key={item.text}>
                      <div className="flex gap-3 items-start">
                        <Icon className="w-5 h-5 text-accent shrink-0 mt-1" strokeWidth={2} />
                        <p className="text-muted-foreground">{item.text}</p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="order-1 md:order-2">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full" />
              <div className="relative bg-background p-12 md:p-16 rounded-sm shadow-card">
                <Globe className="w-24 h-24 md:w-32 md:h-32 text-accent mx-auto" strokeWidth={1.5} />
                <Target className="w-12 h-12 text-accent/60 absolute top-8 right-8" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="section-padding bg-primary">
    <div className="container-narrow text-center">
      <FadeIn>
        <span className="font-mono-ui text-xs text-accent mb-4 block">Ready to Partner?</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6 max-w-3xl mx-auto">
          Partner with us to build a safer future
        </h2>
        <p className="text-primary-foreground/60 mb-10 max-w-2xl mx-auto text-lg">
          Let's work together to protect what matters most to your organization. Our team is ready to deliver world-class safety and security solutions.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" variant="gold" asChild>
            <Link to="/contact">Contact Us <ArrowRight size={18} /></Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
            <Link to="/services">Request a Consultation</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

const Mission = () => (
  <>
    <Hero />
    <MissionSection />
    <VisionSection />
    <CTA />
  </>
);

export default Mission;