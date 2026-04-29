import { useState } from "react";
import {
  Shield, Flame, HardHat, Eye, Lock, Zap, HeartPulse,
  ArrowUpRight, X, Clock, Calendar, Search,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const blogPosts = [
  {
    id: "top-security-company-nigeria",
    title: "Top Security Company in Nigeria (2026 Guide): How to Choose the Right Security Partner",
    excerpt: "Choosing the right security company in Nigeria is critical for protecting your assets and people. Here's a comprehensive guide to help you make an informed decision in 2026.",
    icon: Shield,
    category: "Security",
    date: "March 25, 2026",
    readTime: "5 min read",
    content: [
      { heading: "Protecting Businesses with Expert Solutions", body: "In today's fast-changing environment, choosing the right security company in Nigeria is critical for protecting your business, assets, and people. At Achievers Safety & Security Consultancy, we provide trusted, professional solutions tailored to meet the needs of modern organizations across industries." },
      { heading: "Professional Security Services You Can Trust", body: "We offer a wide range of services including corporate security, risk assessment, private security guards, and safety audits. Our team of experienced consultants works closely with clients to identify vulnerabilities and implement effective strategies that ensure maximum protection." },
      { heading: "Why Businesses Choose Us", body: "Organizations across Nigeria rely on us because of our proven expertise in security risk management, highly trained and certified personnel, customized security strategies for every client, and strong presence in key locations including Port Harcourt." },
      { heading: "Comprehensive Risk Management", body: "Our approach goes beyond basic protection. We focus on preventing threats before they happen through detailed risk analysis, planning, and continuous monitoring. Whether you operate in oil & gas, construction, or corporate sectors, we provide solutions that keep your operations secure." },
      { heading: "Get Started Today", body: "Looking for a dependable security agency in Nigeria? Contact Achievers Safety & Security Consultancy today for expert advice and tailored security solutions that work for you." },
    ],
  },
  {
    id: "reliable-security-services-nigeria",
    title: "Reliable Security Services in Nigeria: Safeguarding Your Business and Assets",
    excerpt: "In a world of evolving threats, finding reliable security services in Nigeria is essential. Achievers Safety & Security Consultancy offers expert solutions tailored to meet the unique needs of Nigerian businesses.",
    icon: Flame,
    category: "Risk Management",
    date: "March 18, 2026",
    readTime: "4 min read",
    content: [
      { heading: "Safeguarding Your Business and Assets", body: "Security is no longer optional — it's a necessity for businesses operating in Nigeria. With increasing risks across industries, partnering with a reliable security company ensures your organization stays protected and prepared for any situation." },
      { heading: "Complete Security Solutions for Modern Businesses", body: "Our services cover everything from physical security and private guards to security risk assessments and safety program development. We help businesses identify threats early and implement strategies that reduce risks." },
      { heading: "Security Expertise Across Industries", body: "We serve a wide range of sectors including oil & gas, construction, maritime and port operations, and corporate organizations. Our industry-specific approach ensures every client gets tailored solutions that match their exact needs." },
      { heading: "Why Choose Achievers Safety & Security Consultancy", bullets: ["Trusted security consultancy in Nigeria", "Experienced and certified professionals", "Reliable and responsive service delivery", "Strong operational presence in Port Harcourt"] },
      { heading: "Secure Your Future Today", body: "If you're searching for a dependable security agency in Nigeria, Achievers Safety & Security Consultancy is your trusted partner. Get in touch today and let us help you build a safer, more secure business environment." },
    ],
  },
  {
    id: "event-security-nigeria",
    title: "Event Security in Nigeria: The Silent Force Behind Every Successful Event",
    excerpt: "Event security in Nigeria is the silent force that ensures every successful event runs smoothly and safely. From corporate conferences to large public gatherings, we provide expert services.",
    icon: HardHat,
    category: "Event Security",
    date: "March 10, 2026",
    readTime: "6 min read",
    content: [
      { heading: "The Silent Force Behind Every Successful Event", body: "If you've attended a major event in Nigeria recently, you've probably experienced great music, good vibes, and a smooth flow from start to finish. But what most people don't notice — none of that happens without proper security." },
      { heading: "When Security Is Done Right", body: "At well-organized events, security isn't loud or aggressive — it's strategic and almost invisible. That's why people feel safe without even thinking about it.", bullets: ["Crowd control is smooth", "Entry and exit points are well managed", "Emergency response teams are on standby", "Surveillance is quietly monitoring everything"] },
      { heading: "The Role of Professional Event Security", body: "Event security isn't just about placing guards at the gate — it's a full system, not just manpower.", bullets: ["Risk assessment before the event even starts", "Understanding crowd behavior and movement", "Planning for worst-case scenarios", "Coordinating response teams and access control"] },
      { heading: "Final Thought", body: "People may forget the DJ, the food, or even the speeches… but they will never forget how safe or unsafe they felt. Don't treat security as an afterthought — it's what makes the entire event successful." },
    ],
  },
  {
    id: "workplace-security-nigeria",
    title: "Workplace Security in Nigeria: What Most Companies Overlook Until It's Too Late",
    excerpt: "Workplace security in Nigeria is often overlooked until a crisis occurs. Many companies focus on growth and operations, neglecting security until they face a breach or incident.",
    icon: Shield,
    category: "Workplace Safety",
    date: "March 3, 2026",
    readTime: "5 min read",
    content: [
      { heading: "What Most Companies Overlook Until It's Too Late", body: "Most businesses in Nigeria invest heavily in growth — better offices, more staff, bigger operations. But there's one area many companies quietly ignore: real, structured workplace security and risk management. Not just guards at the gate." },
      { heading: "It Usually Starts Small", body: "A missing laptop. Unauthorized visitors walking in unnoticed. Staff feeling uneasy during late hours. At first, it doesn't feel like a big deal — but over time, small gaps in security become serious vulnerabilities." },
      { heading: "When It Escalates", body: "When these things happen, the damage isn't just financial — it affects trust, reputation, and employee confidence.", bullets: ["Sensitive company data gets exposed", "Internal theft goes unnoticed for months", "Unauthorized individuals gain access to restricted areas", "Emergencies happen with no clear response plan"] },
      { heading: "The Companies That Get It Right", body: "Well-structured organizations don't wait for problems — they plan ahead.", bullets: ["Security risk assessments to identify weak points", "Controlled access systems for staff and visitors", "Trained personnel who understand both safety and professionalism", "Clear emergency response procedures"] },
      { heading: "Final Thought", body: "A secure workplace isn't just about protection — it's about confidence. When employees feel safe, they perform better. When systems are secure, businesses grow stronger." },
    ],
  },
  {
    id: "cybersecurity-nigeria",
    title: "Cybersecurity in Nigeria: Real Scams, Real Losses, and Why Businesses Can't Ignore It Anymore",
    excerpt: "Cybersecurity in Nigeria is no longer just an IT issue — it's a critical business concern. With real scams causing real losses, Nigerian businesses can no longer afford to ignore it.",
    icon: HeartPulse,
    category: "Cybersecurity",
    date: "February 24, 2026",
    readTime: "7 min read",
    content: [
      { heading: "Real Scams, Real Losses", body: "A few years ago, cybersecurity felt like something only big tech companies talked about. Today in Nigeria, it has become a daily risk for individuals, startups, and even large corporations. Most attacks don't look like attacks at all." },
      { heading: "It Usually Starts With Something Small", body: "A simple email. A fake bank alert. A WhatsApp message that looks 'normal.' Someone clicks, responds, or logs in… and just like that, access is compromised.", bullets: ["Fake bank support messages requesting OTP codes", "Phishing emails pretending to be job offers or invoices", "Social media account takeovers of business pages", "Fraudulent 'payment confirmation' screenshots sent to vendors"] },
      { heading: "Real-World Impact You Can't Ignore", body: "Cybercrime in Nigeria isn't theoretical anymore — it's operational. And in many cases, recovery is either expensive… or impossible.", bullets: ["Loss of customer funds through compromised accounts", "Website defacements that damage brand reputation", "Internal data leaks affecting contracts and negotiations", "Social engineering attacks targeting staff directly"] },
      { heading: "What Strong Cybersecurity Actually Looks Like", body: "Good cybersecurity isn't about fear — it's about structure.", bullets: ["Staff awareness training — humans are the first line of defense", "Strong authentication systems, not just simple passwords", "Continuous monitoring of systems and access logs", "Proper risk assessment and response planning"] },
      { heading: "Final Thought", body: "Cybersecurity isn't about technology alone. It's about awareness, discipline, and structure. In today's digital Nigeria, ignoring it is no longer an option — it's a risk you eventually pay for." },
    ],
  },
  {
    id: "maritime-port-security-nigeria",
    title: "Maritime & Port Security in Nigeria: Why Port Harcourt Remains a Critical Focus",
    excerpt: "Maritime and port security in Nigeria is a critical concern, with Port Harcourt remaining a focal point due to its strategic importance in the oil and gas industry.",
    icon: Eye,
    category: "Maritime Security",
    date: "February 17, 2026",
    readTime: "6 min read",
    content: [
      { heading: "Why Port Harcourt Remains a Critical Focus", body: "Nigeria's maritime sector is one of the most important pillars of the economy. From oil exports to international trade, ports handle billions of naira worth of goods every day. But with that level of activity comes risk." },
      { heading: "Common Security Challenges in Nigerian Ports", body: "Maritime operations in Nigeria face several real-world threats. These are not rare situations — they happen more often than most organizations admit.", bullets: ["Unauthorized access to restricted areas", "Cargo theft and tampering", "Smuggling and illegal shipments", "Insider threats from unverified personnel", "Weak monitoring at entry and exit points"] },
      { heading: "What Effective Maritime Security Looks Like", body: "Proper maritime and port security is not just about guards at the gate — it's a structured system.", bullets: ["Access control management — knowing exactly who enters and exits", "Surveillance systems — continuous monitoring of sensitive areas", "Risk assessment — identifying weak points before they're exploited", "Personnel verification — ensuring only trusted individuals are involved", "Emergency response planning — being ready when things go wrong"] },
      { heading: "Final Thought", body: "Maritime and port operations are too valuable to leave exposed. In Port Harcourt, where activity is high and risks are real, security is not optional — it's operational survival." },
    ],
  },
  {
    id: "maritime-cybersecurity-nigeria",
    title: "Maritime & Cybersecurity in Nigeria: Real Risks, Real Stories, and Why Your Business Is Not as Safe as You Think",
    excerpt: "Maritime and cybersecurity in Nigeria are intertwined risks businesses can no longer ignore. Real stories of cyber attacks affecting maritime operations reveal the vulnerabilities Nigerian companies face.",
    icon: Zap,
    category: "Cybersecurity",
    date: "February 10, 2026",
    readTime: "8 min read",
    content: [
      { heading: "Why Your Business Is Not as Safe as You Think", body: "In Nigeria today, security is no longer just about gates, guards, or locked doors. It's about what you can't see — and what you don't prepare for. Businesses are being exposed to two major threats at the same time: physical breaches and silent cyber attacks." },
      { heading: "A Real Scenario in Port Harcourt", body: "In early 2024, a mid-sized logistics company noticed a discrepancy in their cargo records. Access control was weak. By the time they reacted, the damage was done. And the painful part? It was preventable.", bullets: ["Containers had been tampered with before clearance", "Unauthorized individuals had accessed restricted zones", "Goods worth millions were missing", "Operations were delayed and clients lost trust"] },
      { heading: "Another Reality: Cyber Attack on a Growing Business", body: "A fast-growing company in Lagos experienced something different. No break-ins. No physical damage. Just one email. One click, one login — and by the time they noticed, several clients had already paid fraudulent invoices.", bullets: ["Their business email was compromised", "Fake invoices were sent to clients", "Payments were redirected to a fraudulent account"] },
      { heading: "The Role of Professional Security Consultancy", body: "Achievers Safety & Security Consultancy doesn't just provide manpower — they provide systems.", bullets: ["Identify hidden vulnerabilities", "Design tailored security frameworks", "Implement both physical and digital protection strategies", "Stay ahead of risks instead of reacting to them"] },
      { heading: "Take Action", body: "If you're serious about protecting your business, assets, and operations, now is the time to act. Work with professionals who understand both maritime security and cybersecurity in Nigeria." },
    ],
  },
  {
    id: "security-failures-nigeria",
    title: "Why Most Security Failures in Nigeria Start with 'It Won't Happen to Us'",
    excerpt: "In Nigeria, many security failures start with the mindset of 'It won't happen to us.' This complacency leads to devastating consequences. Learn how to take a proactive approach to security.",
    icon: Lock,
    category: "Security",
    date: "February 3, 2026",
    readTime: "6 min read",
    content: [
      { heading: "The Dangerous Mindset That Costs Businesses Everything", body: "Every business owner in Nigeria has said it at least once: 'We're careful. Nothing like that can happen here.' Until it does. Not loudly. Not dramatically. Just one small gap… and everything changes." },
      { heading: "A Friday Evening in Port Harcourt", body: "At a logistics yard, a truck entered the facility with the right documents. Nobody properly checked who authorized the entry. By Monday morning, the damage was done. No forced entry. No broken locks. Just a gap in verification.", bullets: ["One container had been swapped", "Documentation didn't match physical inventory", "Internal confusion turned into panic"] },
      { heading: "The Dangerous Myth of 'We Have Security'", body: "Many companies say they have guards, CCTV, and passwords. But that's not security — that's presence. Real security answers deeper questions.", bullets: ["Who can access what — and why?", "What happens if something goes wrong right now?", "Where are the blind spots no one is watching?"] },
      { heading: "The Shift Smart Businesses Are Making", body: "Forward-thinking companies are no longer waiting for incidents.", bullets: ["Running security risk assessments regularly", "Training staff to recognize both physical and digital threats", "Building systems that prevent, not just react", "Working with professionals who understand local realities"] },
      { heading: "Final Thought", body: "Security failures don't usually start with big mistakes. They start with one unchecked access point, one untrained staff member, one overlooked detail. The real question isn't 'Are we secure?' — it's 'What are we not seeing right now?'" },
    ],
  },
];

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const categoryMeta = {
  "Security":         { color: "#1d4ed8", bg: "#eff6ff", dot: "#3b82f6", border: "#bfdbfe" },
  "Risk Management":  { color: "#b45309", bg: "#fffbeb", dot: "#f59e0b", border: "#fde68a" },
  "Event Security":   { color: "#047857", bg: "#ecfdf5", dot: "#10b981", border: "#a7f3d0" },
  "Workplace Safety": { color: "#7e22ce", bg: "#faf5ff", dot: "#a855f7", border: "#e9d5ff" },
  "Cybersecurity":    { color: "#be123c", bg: "#fff1f2", dot: "#f43f5e", border: "#fecdd3" },
  "Maritime Security":{ color: "#0e7490", bg: "#ecfeff", dot: "#06b6d4", border: "#a5f3fc" },
};

function CategoryBadge({ category }) {
  const m = categoryMeta[category] || { color: "#374151", bg: "#f3f4f6", dot: "#6b7280", border: "#e5e7eb" };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "3px 10px", borderRadius: 100,
      background: m.bg, color: m.color,
      fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
      border: `1px solid ${m.border}`, whiteSpace: "nowrap",
    }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: m.dot, flexShrink: 0 }} />
      {category}
    </span>
  );
}

function PostModal({ post, onClose }) {
  if (!post) return null;
  const Icon = post.icon;
  const m = categoryMeta[post.category] || { color: "#374151", bg: "#f3f4f6", dot: "#6b7280" };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(15,23,42,0.65)", backdropFilter: "blur(5px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1.5rem", overflowY: "auto",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#fff", borderRadius: 20,
          width: "100%", maxWidth: 660,
          maxHeight: "88vh", overflowY: "auto",
          boxShadow: "0 32px 80px rgba(0,0,0,0.2)",
          margin: "auto",
        }}
      >
        {/* Sticky header */}
        <div style={{
          padding: "1.75rem 2rem 1.5rem",
          borderBottom: "1px solid #f1f5f9",
          position: "sticky", top: 0,
          background: "#fff", borderRadius: "20px 20px 0 0", zIndex: 1,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 42, height: 42, borderRadius: 11,
                background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon size={18} style={{ color: m.color }} />
              </div>
              <CategoryBadge category={post.category} />
            </div>
            <button
              onClick={onClose}
              style={{
                width: 32, height: 32, borderRadius: "50%",
                border: "1px solid #e2e8f0", background: "#f8fafc",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#64748b", flexShrink: 0,
              }}
            >
              <X size={14} />
            </button>
          </div>

          <h2 style={{
            fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)",
            fontWeight: 700, color: "#0f172a", lineHeight: 1.3,
            fontFamily: "'Playfair Display', Georgia, serif",
            marginBottom: "0.75rem",
          }}>
            {post.title}
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#94a3b8" }}>
              <Calendar size={12} /> {post.date}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#94a3b8" }}>
              <Clock size={12} /> {post.readTime}
            </span>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "1.75rem 2rem 2.5rem" }}>
          <p style={{
            fontSize: "0.9375rem", color: "#475569",
            lineHeight: 1.8, marginBottom: "2rem",
            paddingBottom: "1.5rem", borderBottom: "1px solid #f1f5f9",
          }}>
            {post.excerpt}
          </p>

          {post.content.map((section, i) => (
            <div key={i} style={{ marginBottom: "1.625rem" }}>
              <h3 style={{
                fontSize: "0.9375rem", fontWeight: 700, color: "#1e293b",
                marginBottom: "0.625rem",
                fontFamily: "'Playfair Display', Georgia, serif",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <span style={{ width: 3, height: 15, borderRadius: 2, background: m.dot, flexShrink: 0 }} />
                {section.heading}
              </h3>
              {section.body && (
                <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.8, marginLeft: 11 }}>
                  {section.body}
                </p>
              )}
              {section.bullets && (
                <ul style={{ listStyle: "none", marginTop: "0.625rem", marginLeft: 11, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {section.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: "0.85rem", color: "#475569", lineHeight: 1.65 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: m.dot, marginTop: 7, flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ post, onClick }) {
  const Icon = post.icon;
  const m = categoryMeta[post.category] || { color: "#374151", bg: "#f3f4f6", dot: "#6b7280" };
  const [hov, setHov] = useState(false);

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#0f172a",
        borderRadius: 18, overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column", gap: "0.875rem",
        border: "1px solid #1e293b",
        transition: "box-shadow 0.25s, transform 0.25s",
        transform: hov ? "translateY(-3px)" : "none",
        boxShadow: hov ? "0 24px 56px rgba(0,0,0,0.2)" : "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      {/* Left */}
      <div style={{ padding: "2.25rem 2rem 2.25rem 2.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
            <div style={{ width: 42, height: 42, borderRadius: 11, background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon size={18} style={{ color: m.color }} />
            </div>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569" }}>Featured Article</span>
          </div>
          <CategoryBadge category={post.category} />
          <h2 style={{
            marginTop: "0.9rem", marginBottom: "0.75rem",
            fontSize: "clamp(1rem, 1.8vw, 1.375rem)",
            fontWeight: 700, color: "#f1f5f9", lineHeight: 1.3,
            fontFamily: "'Playfair Display', Georgia, serif",
          }}>
            {post.title}
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginTop: "1rem" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#475569" }}>
            <Calendar size={11} /> {post.date}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#475569" }}>
            <Clock size={11} /> {post.readTime}
          </span>
        </div>
      </div>

      {/* Right */}
      <div style={{
        padding: "2.25rem 2.25rem 2.25rem 2rem",
        borderLeft: "1px solid #1e293b",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.8, flex: 1 }}>
          {post.excerpt}
        </p>
        <button style={{
          marginTop: "1.5rem",
          display: "inline-flex", alignItems: "center", gap: 7,
          padding: "10px 20px", borderRadius: 100,
          background: "#fff", color: "#0f172a",
          fontSize: 13, fontWeight: 600,
          border: "none", cursor: "pointer", fontFamily: "inherit",
          alignSelf: "flex-start",
          transition: "background 0.15s",
        }}>
          Read Article <ArrowUpRight size={13} />
        </button>
      </div>
    </article>
  );
}

function PostCard({ post, onClick }) {
  const Icon = post.icon;
  const m = categoryMeta[post.category] || { color: "#374151", bg: "#f3f4f6", dot: "#6b7280", border: "#e5e7eb" };
  const [hov, setHov] = useState(false);

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff", borderRadius: 14,
        padding: "1.5rem", cursor: "pointer",
        border: `1px solid ${hov ? "#cbd5e1" : "#e2e8f0"}`,
        display: "flex", flexDirection: "column", gap: "0.875rem",
        transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
        transform: hov ? "translateY(-3px)" : "none",
        boxShadow: hov ? "0 16px 40px rgba(0,0,0,0.09)" : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon size={17} style={{ color: m.color }} />
        </div>
        <div style={{
          width: 30, height: 30, borderRadius: "50%",
          border: `1px solid ${hov ? m.border : "#e2e8f0"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: hov ? m.color : "#94a3b8",
          transition: "all 0.2s",
        }}>
          <ArrowUpRight size={13} />
        </div>
      </div>

      <CategoryBadge category={post.category} />

      <h2 style={{
        fontSize: "0.9375rem", fontWeight: 700, color: "#0f172a",
        lineHeight: 1.4, fontFamily: "'Playfair Display', Georgia, serif",
      }}>
        {post.title}
      </h2>

      <p style={{
        fontSize: "0.8125rem", color: "#64748b", lineHeight: 1.7,
        display: "-webkit-box", WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical", overflow: "hidden",
        flex: 1,
      }}>
        {post.excerpt}
      </p>

      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        paddingTop: "0.75rem", borderTop: "1px solid #f1f5f9",
        flexWrap: "wrap",
      }}>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#94a3b8" }}>
          <Calendar size={11} /> {post.date}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#94a3b8" }}>
          <Clock size={11} /> {post.readTime}
        </span>
      </div>
    </article>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openPost, setOpenPost] = useState(null);

  const filtered = blogPosts.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const [featured, ...rest] = filtered;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0;  }

        html { scrollbar-gutter: stable; }
        body { overflow-x: hidden; }
        .bp-root { font-family: 'DM Sans', sans-serif; background: #f8fafc; min-height: 100vh; color: #1e293b; -webkit-font-smoothing: antialiased; }

        .bp-filter-btn {
          padding: 7px 15px; border-radius: 100px;
          font-size: 12.5px; font-weight: 500;
          border: 1.5px solid #e2e8f0; background: transparent;
          color: #64748b; cursor: pointer;
          transition: all 0.15s; font-family: inherit; white-space: nowrap;
        }
        .bp-filter-btn:hover { border-color: #94a3b8; color: #1e293b; }
        .bp-filter-btn.active { background: #0f172a; color: #f8fafc; border-color: #0f172a; }

        .bp-search-wrap { position: relative; display: flex; align-items: center; }
        .bp-search-wrap svg { position: absolute; left: 11px; color: #94a3b8; pointer-events: none; }
        .bp-search {
          padding: 7px 12px 7px 34px; border-radius: 100px;
          border: 1.5px solid #e2e8f0; background: #fff;
          font-size: 13px; color: #1e293b; font-family: inherit;
          outline: none; width: 210px; transition: border-color 0.15s, box-shadow 0.15s;
        }
        .bp-search:focus { border-color: #94a3b8; box-shadow: 0 0 0 3px rgba(148,163,184,0.12); }
        .bp-search::placeholder { color: #94a3b8; }

        .bp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.125rem;
        }

        .bp-featured { grid-column: 1 / -1; }

        @media (max-width: 1024px) {
          .bp-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .bp-grid { 
            grid-template-columns: 1fr;
            max-width: 300px;
            margin: 0 auto;
          }
          .bp-feat-inner { grid-template-columns: 1fr !important; }
          .bp-search { width: 150px; }
        }
      `}</style>

      <div className="bp-root">

        {/* ── HERO ─────────────────────────────────────── */}
        <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", padding: "5rem 1.5rem 4rem" }}>
          <div style={{ width: "100%", padding: "0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#38bdf8" }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#38bdf8" }}>
                Knowledge Centre
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 800, color: "#f8fafc",
              lineHeight: 1.1, marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}>
              Safety & Security<br />Insights
            </h1>
            <p style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              color: "#94a3b8", lineHeight: 1.8,
              maxWidth: 520, marginBottom: "2.5rem",
            }}>
              Expert tips, industry insights, and best practices from Achievers Safety & Security Consultancy — protecting lives and assets across Nigeria.
            </p>
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
              {[{ val: blogPosts.length, label: "Articles" }, { val: categories.length - 1, label: "Topics" }, { val: "2026", label: "Latest" }].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.625rem", fontWeight: 700, color: "#f8fafc", fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: "0.75rem", color: "#475569", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FILTER BAR ───────────────────────────────── */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 40 }}>
          <div style={{
            maxWidth: "100%", margin: "0 auto",
            padding: "0.875rem 1rem",
            display: "flex", alignItems: "center", gap: 10,
            overflowX: "auto", width: "100%", overflowY: "hidden", WebkitOverflowScrolling: "touch",
          }}>
            <div className="bp-search-wrap" style={{ flexShrink: 0, marginRight: 4 }}>
              <Search size={13} />
              <input className="bp-search" placeholder="Search articles…" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div style={{ width: 1, height: 22, background: "#e2e8f0", flexShrink: 0 }} />
            <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
              {categories.map(cat => (
                <button key={cat} className={`bp-filter-btn${activeCategory === cat ? " active" : ""}`} onClick={() => setActiveCategory(cat)}>
                  {cat}
                </button>
              ))}
            </div>
            <span style={{ marginLeft: "auto", fontSize: 12, color: "#94a3b8", flexShrink: 0, paddingLeft: 8 }}>
              {filtered.length} {filtered.length === 1 ? "article" : "articles"}
            </span>
          </div>
        </div>

        {/* ── POSTS ────────────────────────────────────── */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 1rem" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 0" }}>
              <p style={{ fontSize: "1.125rem", fontWeight: 600, color: "#64748b", marginBottom: 8 }}>No articles found</p>
              <p style={{ fontSize: "0.875rem", color: "#94a3b8" }}>Try adjusting your search or filter.</p>
            </div>
          ) : (
            <div className="bp-grid">
              {featured && (
                <div className="bp-featured">
                  <FeaturedCard post={featured} onClick={() => setOpenPost(featured)} />
                </div>
              )}
              {rest.map(post => (
                <PostCard key={post.id} post={post} onClick={() => setOpenPost(post)} />
              ))}
            </div>
          )}
        </div>

      </div>

      {/* ── MODAL ────────────────────────────────────── */}
      <PostModal post={openPost} onClose={() => setOpenPost(null)} />
    </>
  );
}
