import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import {
  SiFacebook,
  SiLinkedin,
  SiYoutube,
  SiTiktok,
} from "@/components/SocialIcons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/animations";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes",
    ),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(255, "Email is too long")
    .refine((val) => !val.includes("+"), "Email aliases are not allowed"),

  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(
      /^\+?[0-9]{1}[0-9\s\-()]{6,18}[0-9]$/,
      "Enter a valid phone number (e.g. +234 800 000 0000)",
    )
    .refine(
      (val) => val.replace(/\D/g, "").length >= 7,
      "Phone number is too short",
    )
    .refine(
      (val) => val.replace(/\D/g, "").length <= 15,
      "Phone number is too long",
    ),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters")
    .refine(
      (val) => !/(.)\1{9,}/.test(val),
      "Message looks invalid (repeated characters)",
    )
    .refine(
      (val) => val.split(" ").length >= 3,
      "Please write at least a few words",
    ),
});

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bot check
    if (form.honeypot) return;

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
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: result.data.name, // use parsed/trimmed data, not raw form
          email: result.data.email,
          phone: result.data.phone,
          message: result.data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast({
        title: "Message Sent Successfully",
        description: "We'll respond within 24 hours.",
      });

      setForm({ name: "", email: "", phone: "", message: "", honeypot: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
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
            <span className="font-mono-ui text-xs text-accent mb-4 block">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-primary-foreground/60 text-lg max-w-xl">
              Ready to strengthen your safety and security? Let's start a
              conversation.
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
                <SectionHeading
                  label="Contact Information"
                  title="Reach Us Directly"
                />

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Office Address
                      </p>
                      <p className="text-sm text-muted-foreground">
                        23 Smart Avenue, Eneka Road, Off Eze Wali Plaza,
                        Rumosunwho, Port Harcourt, Rivers State
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Phone
                      </p>
                      <p className="text-sm text-muted-foreground">
                        +234 706 541 7864
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Email
                      </p>
                      <p className="text-sm text-muted-foreground">
                        info@archivers.ng
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <p className="font-medium text-foreground text-sm mb-3">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    {[
                      {
                        icon: SiFacebook,
                        href: "https://facebook.com/AchieversSafetySecurityConsultancyLimited",
                        label: "Facebook",
                      },
                      {
                        icon: SiLinkedin,
                        href: "https://linkedin.com/company/achieversafety",
                        label: "LinkedIn",
                      },
                      {
                        icon: SiYoutube,
                        href: "https://youtube.com/@Achieveroutsourcing",
                        label: "YouTube",
                      },
                      {
                        icon: ({ className }) => (
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={className}
                            width="16"
                            height="16"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        ),
                        href: "https://twitter.com/AchieverSafety",
                        label: "Twitter / X",
                      },
                      {
                        icon: SiTiktok,
                        href: "https://tiktok.com/@AchieverSafety",
                        label: "TikTok",
                      },
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
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.15}>
                <form
                  onSubmit={handleSubmit}
                  className="bg-surface p-8 border border-border space-y-5"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Send Us a Message
                  </h3>

                  {/* Honeypot — hidden from real users, bots fill it */}
                  <input
                    type="text"
                    value={form.honeypot}
                    onChange={(e) => update("honeypot", e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Full Name
                    </label>
                    <Input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your full name"
                      maxLength={100}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="your@email.com"
                      maxLength={255}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+234 800 000 0000"
                      maxLength={20}
                      autoComplete="tel"
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-sm font-medium text-foreground">
                        Message
                      </label>
                      <span
                        className={`text-xs ${form.message.length > 1800 ? "text-destructive" : "text-muted-foreground"}`}
                      >
                        {form.message.length}/2000
                      </span>
                    </div>
                    <Textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="How can we help you?"
                      maxLength={2000}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    <Send size={16} />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Visit Us
          </h2>

          <div className="rounded-lg overflow-hidden border border-border shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.8214186419236!2d7.1282859!3d4.8067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d5c0c0c0c0c1%3A0x1!2sPort%20Harcourt%2C%20Rivers%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>

          <div className="mt-8 bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-muted-foreground mb-4">
              23 Smart Avenue, Eneka Road, Off Eze Wali Plaza, Rumosunwho,
              <br />
              Port Harcourt, Rivers State, Nigeria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps/search/23+Smart+Avenue,+Port+Harcourt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
