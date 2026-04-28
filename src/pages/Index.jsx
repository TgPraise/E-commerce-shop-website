import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/siteData";
import herobackground from "@/assets/hero-img.webp";
import carousel from "@/components/infiniteCarousel.jsx";
import InfiniteCarousel from "../components/InfiniteCarousel";
import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SEO from "../components/SEO.jsx";
import { seoData } from "../seo/seoConfig";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* {herobackground} */}
    <img
      src={herobackground}
      alt="Safety and security consultancy"
      width="1920"
      height="1080"
      className="absolute inset-0 w-full h-full object-cover -z-10"
      loading="eager"
      fetchPriority="high"
    />
    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/70" />
    {/* Subtle accent radial */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.12),transparent_60%)]" />

    <div className="container-narrow relative z-10 py-32 md:py-40">
      <FadeIn delay={0.2}>
        <span className="font-mono-ui text-xs text-accent mb-6 block">
          Achievers Safety & Security Consultancy
        </span>
      </FadeIn>
      <FadeIn delay={0.4}>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-4xl">
          Protecting What <br className="hidden sm:block" />
          Matters Most
        </h1>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/60 max-w-xl leading-relaxed">
          World-class safety audits, security risk assessments, and consultancy
          services that safeguard your people, assets, and operations.
        </p>
      </FadeIn>
      <FadeIn delay={0.8}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="xl" asChild>
            <Link to="/contact">
              Get Consultation <ArrowRight size={18} />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            asChild
          >
            <Link to="/services">Our Services</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

const Overview = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeIn>
          <div>
            <SectionHeading
              label="Who We Are"
              title="Built on Expertise, Driven by Integrity"
            />
            <p className="text-text-secondary leading-relaxed">
              Archivers Safety-Security Consultancy Limited is a premier
              consultancy firm dedicated to delivering comprehensive safety and
              security solutions. With deep expertise across the oil & gas,
              construction, maritime, and corporate sectors, we help
              organizations build resilient operations that protect their most
              valuable assets — their people.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Retention" },
              { number: "50+", label: "Certified Experts" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface p-6 text-center">
                <div className="font-display text-3xl font-semibold text-foreground">
                  {stat.number}
                </div>
                <div className="mt-1 text-xs text-muted-foreground font-mono-ui">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="section-padding bg-surface">
    <div className="container-narrow">
      <FadeIn>
        <SectionHeading
          label="Our Services"
          title="Comprehensive Safety & Security Solutions"
          description="From risk assessment to emergency response, we deliver end-to-end solutions tailored to your industry."
        />
      </FadeIn>
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.slice(0, 4).map((service) => {
          const Icon = service.icon;
          return (
            <StaggerItem key={service.id}>
              <Link
                to={`/services/${service.id}`}
                className="group block bg-background p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full"
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
      <FadeIn>
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <FadeIn>
        <SectionHeading label="Why Archivers" title="The Archivers Advantage" />
      </FadeIn>
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Internationally certified consultants with 15+ years of field experience",
          "Customized solutions tailored to your industry and risk profile",
          "Proven track record with Fortune 500 and government clients",
          "Rapid deployment and 24/7 emergency response capability",
          "End-to-end service from assessment through implementation",
          "Commitment to continuous improvement and knowledge transfer",
        ].map((item) => (
          <StaggerItem key={item}>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-text-secondary text-sm leading-relaxed">
                {item}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

const testimonials = [
  {
    quote:
      "Archivers transformed our approach to workplace safety. Their audit identified critical gaps we had overlooked for years.",
    name: "Adeola Martins",
    role: "HSE Manager, Delta Oil & Gas",
  },
  {
    quote:
      "Professional, thorough, and results-driven. Their security assessment gave us the confidence to expand operations.",
    name: "James Okwuosa",
    role: "COO, Maritime Logistics Ltd",
  },
  {
    quote:
      "Their emergency response training program was a game-changer for our team. We now have the protocols and confidence to handle any crisis effectively.",
    name: "Chioma Eze",
    role: "Operations Director, Apex Construction Group",
  },
  {
    quote:
      "From the initial risk assessment to full implementation, Archivers delivered at every stage. Truly a partner you can trust with your most critical assets.",
    name: "Emeka Nwosu",
    role: "CEO, Harbour Maritime Services",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null); // "left" | "right"
  const [animating, setAnimating] = useState(false);

  const goTo = (index, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 650);
  };

  const prev = () =>
    goTo((current - 1 + testimonials.length) % testimonials.length, "right");

  const next = () =>
    goTo((current + 1) % testimonials.length, "left");

  useEffect(() => {
    const timer = setInterval(() => {
      if (!animating) next();
    }, 4000);
    return () => clearInterval(timer);
  }, [current, animating]);

  // Show current + next side by side on md+, just current on mobile
  const nextIndex = (current + 1) % testimonials.length;

  const slideClass = animating
    ? direction === "left"
      ? "animate-slide-left"
      : "animate-slide-right"
    : "";

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-60px); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(60px); }
        }
        .animate-slide-left {
          animation: slideInLeft 0.4s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-slide-right {
          animation: slideInRight 0.4s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>

      <section className="section-padding bg-primary overflow-hidden">
        <div className="container-narrow">
          <FadeIn>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="font-mono-ui text-xs text-accent mb-3 block">
                  Testimonials
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground">
                  Trusted by Industry Leaders
                </h2>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={prev}
                  disabled={animating}
                  className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/50 transition-colors disabled:opacity-40"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  disabled={animating}
                  className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/50 transition-colors disabled:opacity-40"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Cards — one at a time on mobile, two on md+ */}
          <div className="grid md:grid-cols-2 gap-6 overflow-hidden">
            {/* Always-visible primary card */}
            <div key={`primary-${current}`} className={slideClass}>
              <TestimonialCard t={testimonials[current]} />
            </div>

            {/* Second card — hidden on mobile */}
            <div
              key={`secondary-${nextIndex}`}
              className={`hidden md:block ${slideClass}`}
              style={{ animationDelay: "60ms" }}
            >
              <TestimonialCard t={testimonials[nextIndex]} />
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "left" : "right")}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-accent w-6"
                    : "bg-primary-foreground/20 hover:bg-primary-foreground/40 w-2"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Extracted card to keep JSX clean
const TestimonialCard = ({ t }) => (
  <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 h-full">
    <Quote className="w-8 h-8 text-accent mb-4 opacity-60" />
    <p className="text-primary-foreground/80 leading-relaxed mb-6">{t.quote}</p>
    <div>
      <div className="font-display text-sm font-semibold text-primary-foreground">
        {t.name}
      </div>
      <div className="text-xs text-primary-foreground/50">{t.role}</div>
    </div>
  </div>
);

const CTA = () => (
  <section className="section-padding bg-surface">
    <div className="container-narrow text-center">
      <FadeIn>
        <span className="font-mono-ui text-xs text-accent mb-4 block">
          Ready to Get Started?
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Let's Secure Your Future
        </h2>
        <p className="text-text-secondary mb-8 max-w-lg mx-auto">
          Contact us today for a free initial consultation and discover how we
          can strengthen your safety and security posture.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/contact">Request a Consultation</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

const Index = () => (
  <>
    <SEO {...seoData.home} />
    <Hero />
    <Overview />
    <InfiniteCarousel />
    <ServicesPreview />
    <WhyChooseUs />
    <Testimonials />
    <CTA />
  </>
);

export default Index;
