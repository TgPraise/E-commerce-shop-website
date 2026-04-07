import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiFacebook, SiYoutube, SiTiktok } from "./SocialIcons";

const XIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="16" height="16">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: SiFacebook, href: "https://facebook.com/AchieversSafetySecurityConsultancyLimited", label: "Facebook" },
  { icon: SiLinkedin, href: "https://linkedin.com/company/achieversafety", label: "LinkedIn" },
  { icon: SiYoutube, href: "https://youtube.com/@Achieveroutsourcing", label: "YouTube" },
  { icon: XIcon, href: "https://twitter.com/AchieverSafety", label: "Twitter / X" },
  { icon: SiTiktok, href: "https://tiktok.com/@AchieverSafety", label: "TikTok" },
];

const Footer = () => (
  <footer className="relative bg-primary text-primary-foreground overflow-hidden">
    {/* Watermark */}
    <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none">
      <span className="font-display text-[18vw] font-bold leading-none opacity-[0.03] text-primary-foreground translate-y-[20%]">
        ARCHIVERS
      </span>
    </div>

    <div className="container-narrow relative z-10 py-16 md:py-20">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4">Archivers Safety-Security Consultancy</h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Delivering world-class safety and security solutions that protect people, assets, and operations.
          </p>
          {/* Social Media */}
          <div className="flex items-center gap-3 mt-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-primary-foreground/10 transition-all"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-mono-ui text-xs mb-4 opacity-50">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {["Home", "Services", "Certifications", "Team", "Contact", "Blog"].map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-mono-ui text-xs mb-4 opacity-50">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>23 Smart Avenue, Eneka Road, Off Eze Wali Plaza, Rumosunwho, Port Harcourt, Rivers State</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>+234 800 000 0000</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <span>info@archivers.ng</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs opacity-40">
        © {new Date().getFullYear()} Archivers Safety-Security Consultancy Limited. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;