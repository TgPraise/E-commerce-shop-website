import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { SiFacebook, SiLinkedin, SiYoutube, SiTiktok } from "@/components/SocialIcons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/animations";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    toast({ title: "Message Received", description: "We'll respond within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <>
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow">
          <FadeIn>
            <span className="font-mono-ui text-xs text-accent mb-4 block">Get in Touch</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-primary-foreground/60 text-lg max-w-xl">
              Ready to strengthen your safety and security? Let's start a conversation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <SectionHeading label="Contact Information" title="Reach Us Directly" />

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Office Address</p>
                      <p className="text-sm text-muted-foreground">
                        23 Smart Avenue, Eneka Road, Off Eze Wali Plaza, Rumosunwho, Port Harcourt, Rivers State
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Phone</p>
                      <p className="text-sm text-muted-foreground">+234 800 000 0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Email</p>
                      <p className="text-sm text-muted-foreground">info@archivers.ng</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <p className="font-medium text-foreground text-sm mb-3">Follow Us</p>
                  <div className="flex items-center gap-3">
                    {[
                      { icon: SiFacebook, href: "https://facebook.com/AchieversSafetySecurityConsultancyLimited", label: "Facebook" },
                      { icon: SiLinkedin, href: "https://linkedin.com/company/achieversafety", label: "LinkedIn" },
                      { icon: SiYoutube, href: "https://youtube.com/@Achieveroutsourcing", label: "YouTube" },
                      {
                        icon: ({ className }) => (
                          <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="16" height="16">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        ),
                        href: "https://twitter.com/AchieverSafety",
                        label: "Twitter / X",
                      },
                      { icon: SiTiktok, href: "https://tiktok.com/@AchieverSafety", label: "TikTok" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                      >
                        <s.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 w-full h-64 rounded-md overflow-hidden border border-border">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6!2d7.05!3d4.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMDAuMCJOIDfCsDAzJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.15}>
                <form onSubmit={handleSubmit} className="bg-surface p-8 border border-border space-y-5">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Send Us a Message
                  </h3>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                    <Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                    <Input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+234 ..." />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="How can we help you?" />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send size={16} /> Send Message
                  </Button>
                </form>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;