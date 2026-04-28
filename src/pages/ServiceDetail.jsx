import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { services } from "@/data/siteData";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const whatsappUrl = `https://wa.me/+2347065417864?text=${encodeURIComponent(`Hello, I'd like to inquire about your ${service.title} service.`)}`;
  const mailtoUrl = `mailto:achieveroutsourcing@gmail.com?subject=${encodeURIComponent(`Inquiry: ${service.title}`)}`;

  return (
    <>
      {/* Banner */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow">
          <FadeIn>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors mb-6">
              <ArrowLeft size={16} /> Back to Services
            </Link>
            <div className="flex items-start gap-4">
              <Icon className="w-10 h-10 text-accent shrink-0 mt-1" />
              <div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground tracking-tight">
                  {service.title}
                </h1>
                <p className="mt-3 text-primary-foreground/60 text-lg max-w-xl">{service.shortDescription}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="text-text-secondary text-lg leading-relaxed mb-10">{service.fullDescription}</p>
              </FadeIn>

              {/* Image Gallery Section */}
              <FadeIn delay={0.1}>
                <div className="grid md:grid-cols-1 gap-4 mb-12">
                  {/* Image Space 1 */}
                  <div className="aspect-video bg-surface border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 flex items-center justify-center">
                    <img 
                      src={service.image1}
                      alt={`${service.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">Key Features & Benefits</h3>
              </FadeIn>
              <StaggerContainer className="space-y-4">
                {service.features.map((feature) => (
                  <StaggerItem key={feature}>
                    <div className="flex items-start gap-3 bg-surface p-4">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Sidebar CTA */}
            <div>
              <FadeIn delay={0.2}>
                <div className="sticky top-28 bg-surface p-8 border border-border">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-3">Interested in this service?</h4>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Get in touch with our team to discuss your requirements and receive a tailored proposal.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button size="lg" className="w-full" asChild>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={18} /> Contact via WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <a href={mailtoUrl}>
                        <Mail size={18} /> Send Email Inquiry
                      </a>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
