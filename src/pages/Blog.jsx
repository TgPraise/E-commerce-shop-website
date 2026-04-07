import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Flame, HardHat, AlertTriangle, Eye, Lock, Zap, HeartPulse } from "lucide-react";

const blogPosts = [
  {
    id: "workplace-hazard-identification",
    title: "5 Steps to Identify Workplace Hazards Before They Cause Harm",
    excerpt: "Proactive hazard identification is the cornerstone of any effective safety programme. Learn the five critical steps every safety officer should follow.",
    icon: AlertTriangle,
    category: "Workplace Safety",
    date: "March 25, 2026",
    content: [
      "Conduct regular walkthroughs of every work area, paying attention to changes in layout, equipment, or processes.",
      "Engage workers directly — frontline employees often notice risks that formal audits miss.",
      "Review incident reports, near-misses, and first-aid logs for recurring patterns.",
      "Assess both physical hazards (slips, falls, machinery) and health hazards (noise, chemicals, ergonomics).",
      "Document findings with photographs and prioritise corrective actions using a risk matrix.",
    ],
  },
  {
    id: "fire-safety-essentials",
    title: "Fire Safety Essentials Every Business Must Know",
    excerpt: "Fire incidents can devastate operations in minutes. Here are the non-negotiable fire safety measures for any commercial facility.",
    icon: Flame,
    category: "Fire Safety",
    date: "March 18, 2026",
    content: [
      "Install and maintain smoke detectors and fire alarms on every floor and in high-risk areas.",
      "Ensure fire extinguishers are accessible, inspected monthly, and staff know how to use them (PASS technique).",
      "Develop and rehearse an emergency evacuation plan at least twice a year.",
      "Keep exit routes clear and well-lit at all times — blocked exits are one of the leading causes of fire fatalities.",
      "Conduct electrical audits regularly to prevent wiring faults, one of the top causes of workplace fires.",
    ],
  },
  {
    id: "ppe-best-practices",
    title: "PPE Best Practices: More Than Just Wearing It",
    excerpt: "Personal Protective Equipment is your last line of defence. Make sure your team uses it correctly.",
    icon: HardHat,
    category: "PPE & Equipment",
    date: "March 10, 2026",
    content: [
      "PPE must be selected based on a thorough risk assessment — one size does not fit all hazards.",
      "Train workers on how to properly don, doff, adjust, and maintain each piece of equipment.",
      "Inspect PPE before every use; damaged or worn equipment must be replaced immediately.",
      "Store PPE in clean, dry, designated areas to prevent degradation.",
      "Remember: PPE is the last line of defence, not the first. Always try to eliminate or engineer out the hazard first.",
    ],
  },
  {
    id: "security-awareness",
    title: "Building a Security-Aware Culture in Your Organisation",
    excerpt: "Technology alone cannot protect your assets. A security-conscious workforce is your strongest shield.",
    icon: Shield,
    category: "Security",
    date: "March 3, 2026",
    content: [
      "Conduct regular security awareness training that covers physical security, access control, and reporting suspicious activity.",
      "Implement a clear visitor management policy — every visitor should be logged, badged, and escorted.",
      "Encourage a 'see something, say something' culture without fear of reprisal.",
      "Review and update access control lists quarterly to remove former employees and expired permissions.",
      "Run periodic security drills to test response times and identify gaps in your protocols.",
    ],
  },
  {
    id: "first-aid-readiness",
    title: "First Aid Readiness: Are You Prepared for an Emergency?",
    excerpt: "When an emergency strikes, the first few minutes are critical. Ensure your workplace is first-aid ready.",
    icon: HeartPulse,
    category: "Emergency Response",
    date: "February 24, 2026",
    content: [
      "Maintain fully stocked first aid kits in accessible locations — check and replenish them monthly.",
      "Train at least one first aider for every 50 employees, and ensure they hold current certifications.",
      "Display emergency contact numbers prominently in common areas and near high-risk zones.",
      "Conduct basic first aid awareness sessions for all staff — everyone should know CPR and how to control bleeding.",
      "Keep an Automated External Defibrillator (AED) on-site and ensure multiple staff members are trained to use it.",
    ],
  },
  {
    id: "cctv-surveillance-tips",
    title: "Maximising Your CCTV System: Tips for Effective Surveillance",
    excerpt: "A poorly configured CCTV system gives a false sense of security. Here's how to get real value from your cameras.",
    icon: Eye,
    category: "Surveillance",
    date: "February 17, 2026",
    content: [
      "Position cameras to cover all entry/exit points, car parks, and high-value asset areas without blind spots.",
      "Ensure adequate lighting for camera performance — infrared cameras are essential for night-time coverage.",
      "Set appropriate recording retention periods (minimum 30 days) and secure footage against tampering.",
      "Regularly maintain and clean camera lenses — a dirty lens defeats the purpose of high-resolution equipment.",
      "Integrate CCTV with access control systems for a unified security management approach.",
    ],
  },
  {
    id: "electrical-safety",
    title: "Electrical Safety: Preventing Shocks, Burns, and Fires",
    excerpt: "Electrical hazards are silent but deadly. Follow these tips to keep your workforce and facility safe.",
    icon: Zap,
    category: "Electrical Safety",
    date: "February 10, 2026",
    content: [
      "Never allow unqualified personnel to work on electrical installations or equipment.",
      "Implement a lock-out/tag-out (LOTO) procedure for all maintenance and repair work on energised systems.",
      "Inspect power cords, plugs, and outlets regularly — frayed wires and overloaded sockets are fire hazards.",
      "Use Ground Fault Circuit Interrupters (GFCIs) in wet or damp environments.",
      "Schedule periodic electrical audits by certified electricians to identify and fix wiring issues before they escalate.",
    ],
  },
  {
    id: "access-control",
    title: "Access Control: The First Layer of Physical Security",
    excerpt: "Controlling who enters your facility is fundamental. Here's how to build an effective access control strategy.",
    icon: Lock,
    category: "Security",
    date: "February 3, 2026",
    content: [
      "Define access zones — not everyone needs access to every area. Apply the principle of least privilege.",
      "Use multi-factor authentication for sensitive areas (card + PIN, biometrics + card).",
      "Maintain a real-time log of all access events and review it regularly for anomalies.",
      "Ensure all access points are monitored — tailgating is one of the most common physical security breaches.",
      "Have a rapid response protocol for lost or stolen access credentials, including immediate deactivation.",
    ],
  },
];

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow">
          <FadeIn>
            <span className="font-mono-ui text-xs text-accent mb-4 block">Knowledge Centre</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight">
              Safety &amp; Security Blog
            </h1>
            <p className="mt-4 text-primary-foreground/60 text-lg max-w-xl">
              Educational tips, industry insights, and best practices to keep your people and assets safe.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          {/* Category Filter */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {filtered.map((post) => {
              const Icon = post.icon;
              return (
                <StaggerItem key={post.id}>
                  <article className="bg-surface border border-border p-8 h-full flex flex-col transition-shadow hover:shadow-card-hover">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <span className="font-mono-ui text-xs text-accent">{post.category}</span>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                    <h2 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="mt-auto">
                      <h3 className="font-mono-ui text-xs text-muted-foreground mb-3">Key Tips</h3>
                      <ul className="space-y-2">
                        {post.content.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="font-mono-ui text-xs text-accent mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
