import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import image1 from "@/assets/galary/image1.jpg";
import image2 from "@/assets/galary/image2.webp";
import image3 from "@/assets/galary/image3.webp";
import image4 from "@/assets/galary/image4.webp";
import image5 from "@/assets/galary/image5.webp";

// ─── Card Data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    id: 0,
    tag: "Safety",
    title: "INDUCTION",
    sub: "training the next generation of safety pioneers",
    badge: "Featured",
    badgeBg: "rgba(139,92,246,0.3)",
    badgeColor: "#c4b5fd",
    accent: "#7c3aed",
    glow: "#7c3aed",
    num: "01",
    Image: image1,
    icon: "⬡",
    pattern:
      "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(79,70,229,0.3) 0%, transparent 40%)",
  },
  {
    id: 1,
    tag: "Security",
    title: "INSPECTION",
    sub: "uncovering hidden vulnerabilities before they become threats",
    badge: "New",
    badgeBg: "rgba(16,185,129,0.3)",
    badgeColor: "#6ee7b7",
    accent: "#059669",
    glow: "#10b981",
    num: "02",
    Image: image2,
    icon: "◈",
    pattern:
      "radial-gradient(circle at 70% 20%, rgba(16,185,129,0.4) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(5,150,105,0.3) 0%, transparent 40%)",
  },
  {
    id: 2,
    tag: "Investigation",
    title: "INVESTIGATION",
    sub: "decoding the past to safeguard the future",
    badge: "Exclusive",
    badgeBg: "rgba(245,158,11,0.25)",
    badgeColor: "#fcd34d",
    accent: "#d97706",
    glow: "#f59e0b",
    num: "03",
    Image: image3,
    icon: "✦",
    pattern:
      "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.35) 0%, transparent 55%), radial-gradient(circle at 90% 10%, rgba(217,119,6,0.25) 0%, transparent 40%)",
  },
  {
    id: 3,
    tag: "Maritime",
    title: "MARITIME & PORT SECURITY",
    sub: "navigating the complexities of maritime safety in a changing world",
    badge: "Premium",
    badgeBg: "rgba(236,72,153,0.3)",
    badgeColor: "#f9a8d4",
    accent: "#db2777",
    glow: "#ec4899",
    num: "04",
    Image: image4,
    icon: "◉",
    pattern:
      "radial-gradient(circle at 20% 50%, rgba(236,72,153,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(219,39,119,0.3) 0%, transparent 40%)",
  },
  {
    id: 4,
    tag: "Event",
    title: "EVENT SECURITY",
    sub: "orchestrating seamless safety for unforgettable experiences",
    badge: "Featured",
    badgeBg: "rgba(14,165,233,0.3)",
    badgeColor: "#7dd3fc",
    accent: "#0284c7",
    glow: "#0ea5e9",
    num: "05",
    Image: image5,
    icon: "⬡",
    pattern:
      "radial-gradient(circle at 60% 40%, rgba(14,165,233,0.4) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(2,132,199,0.3) 0%, transparent 40%)",
  },
];

const N = CARDS.length;

// ─── Position calculator ──────────────────────────────────────────────────────
function getPositionStyle(offset) {
  const abs = Math.abs(offset);
  if (abs > 2) return null;

  const configs = {
    0:   { x: 0,    z: 0,    rotY: 0,   scale: 1,    opacity: 1,    zIndex: 10 },
    1:   { x: 310,  z: -180, rotY: -22, scale: 0.82, opacity: 0.65, zIndex: 6  },
    "-1":{ x: -310, z: -180, rotY:  22, scale: 0.82, opacity: 0.65, zIndex: 6  },
    2:   { x: 520,  z: -320, rotY: -35, scale: 0.65, opacity: 0.28, zIndex: 3  },
    "-2":{ x: -520, z: -320, rotY:  35, scale: 0.65, opacity: 0.28, zIndex: 3  },
  };

  const c = configs[offset.toString()];
  if (!c) return null;

  return {
    transform: `translateX(${c.x}px) translateZ(${c.z}px) rotateY(${c.rotY}deg) scale(${c.scale})`,
    opacity: c.opacity,
    zIndex: c.zIndex,
    filter: abs === 0 ? "none" : `blur(${abs * 0.8}px)`,
  };
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function InfiniteCarousel() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const autoRef = useRef(null);

  const go = useCallback(
    (dir) => {
      if (transitioning) return;
      setTransitioning(true);
      setActive((prev) => (prev + dir + N) % N);
      setTimeout(() => setTransitioning(false), 700);
    },
    [transitioning]
  );

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => go(1), 3800);
  }, [go]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoRef.current);
  }, [startAuto]);

  const handlePrev = () => { go(-1); startAuto(); };
  const handleNext = () => { go(1);  startAuto(); };
  const handleDot  = (i) => { if (i !== active) { setActive(i); startAuto(); } };

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-fit-content overflow-x-hidden py-16 px-4"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 60%, #1a1035 0%, #09090b 70%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.015) 60px,rgba(255,255,255,0.015) 61px), repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.015) 60px,rgba(255,255,255,0.015) 61px)",
        }}
      />

      {/* Label */}
      <p className="mb-8 text-xs tracking-[4px] uppercase text-white/25 font-light z-10">
        Mini Galary
      </p>

      {/* ── Scene ── */}
      <div
        className="relative flex items-center justify-center w-full"
        style={{ perspective: "1200px", height: 420 }}
      >
        {CARDS.map((card, i) => {
          let offset = i - active;
          if (offset > N / 2) offset -= N;
          if (offset < -N / 2) offset += N;

          const posStyle = getPositionStyle(offset);
          if (!posStyle) return null;
          const isActive = offset === 0;

          return (
            <div
              key={card.id}
              className="absolute cursor-pointer"
              style={{
                width: 280,
                height: 380,
                transformStyle: "preserve-3d",
                transition: "all 0.7s cubic-bezier(0.34,1.2,0.64,1)",
                willChange: "transform, opacity",
                ...posStyle,
              }}
              onClick={() =>
                !isActive && (offset > 0 ? handleNext() : handlePrev())
              }
            >
              {/* Active glow blob */}
              {isActive && (
                <div
                  className="absolute pointer-events-none rounded-full"
                  style={{
                    bottom: -60,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 160,
                    height: 60,
                    objectFit: "cover",
                    background: `url(${card.Image})`,
                    filter: "blur(30px)",
                    opacity: 1,
                    animation: "breathe 3s ease-in-out infinite",
                  }}
                />
              )}

              {/* Card shell */}
              <div
                className="relative w-full h-full overflow-hidden"
                
                style={{
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
                }}
              >
                {/* <img 
                  src="{card.Image}" 
                  alt="{card.title}" 
                  className="absolute inset-0 w-full h-full object-cover" 
                /> */}

                <div
                  className="absolute inset-0 transition-transform duration-700"
                  style={{
                    backgroundImage: `url(${card.Image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Radial light pattern */}
                <div
                  className="absolute inset-0"
                  style={{ background: card.pattern }}
                />

                {/* Bottom fade */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.05) 40%,rgba(0,0,0,0.75) 100%)",
                  }}
                />

                {/* Glass shimmer overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: 20,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background:
                      "linear-gradient(135deg,rgba(255,255,255,0.06) 0%,transparent 50%)",
                  }}
                />

                {/* Active top line accent */}
                {isActive && (
                  <div
                    className="absolute top-0 left-0 right-0"
                    style={{
                      height: 1,
                      background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                    }}
                  />
                )}

                {/* Big number watermark */}
                <div
                  className="absolute top-5 right-5 select-none leading-none"
                  style={{
                    fontSize: 64,
                    fontFamily: "'Bebas Neue', sans-serif",
                    color: "rgba(255,255,255,0.07)",
                  }}
                >
                  {card.num}
                </div>

                {/* Decorative icon */}
                <div
                  className="absolute top-6 left-6 select-none leading-none"
                  style={{
                    fontSize: 48,
                    fontFamily: "monospace",
                    opacity: 0.15,
                    color: card.accent,
                  }}
                >
                  {card.icon}
                </div>

                {/* Content block */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    padding: "28px 24px 24px",
                    background:
                      "linear-gradient(to top,rgba(0,0,0,0.92) 0%,rgba(0,0,0,0.5) 60%,transparent 100%)",
                  }}
                >
                  {/* Badge */}
                  <span
                    className="inline-block mb-2 text-[10px] font-medium tracking-wide"
                    style={{
                      padding: "4px 10px",
                      borderRadius: 100,
                      background: card.badgeBg,
                      color: card.badgeColor,
                    }}
                  >
                    {card.badge}
                  </span>

                  {/* Tag */}
                  <p
                    className="text-[10px] font-medium tracking-[3px] uppercase mb-2"
                    style={{ color: card.badgeColor, opacity: 0.7 }}
                  >
                    {card.tag}
                  </p>

                  {/* Title */}
                  <h2
                    className="text-white mb-2 leading-none tracking-wide"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 36,
                    }}
                  >
                    {card.title}
                  </h2>

                  {/* Subtitle */}
                  <p
                    className="text-xs font-light leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {card.sub}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Controls ── */}
      <div className="flex items-center gap-5 mt-12 z-10 relative">
        {/* Prev */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.05)",
            color: "#fff",
            backdropFilter: "blur(10px)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8l4-4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {CARDS.map((card, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to card ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? 20 : 6,
                height: 6,
                background:
                  i === active ? CARDS[active].glow : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.05)",
            color: "#fff",
            backdropFilter: "blur(10px)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 4l4 4-4 4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Breathe keyframe (injected once) */}
      <style>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
          50%       { opacity: 1;   transform: translateX(-50%) scale(1.1); }
        }
      `}</style>

      {/* View More Button */}
      <div className="mt-8 z-10 relative">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide text-white/70 hover:text-white transition-all duration-300 group"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 100,
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(10px)",
            marginBottom: 10,
          }}
        >
          View Gallery
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M6 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
