import { useState, useEffect } from "react";

const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simulate realistic loading stages
    const stages = [
      { target: 30, speed: 35 }, // fast start (JS parsing)
      { target: 65, speed: 55 }, // mid (assets loading)
      { target: 85, speed: 80 }, // slow (waiting for network)
      { target: 100, speed: 30 }, // finish burst
    ];

    let current = 0;
    let stageIndex = 0;
    let timer;

    const run = () => {
      if (stageIndex >= stages.length) return;
      const { target, speed } = stages[stageIndex];

      if (current < target) {
        current++;
        setProgress(current);
        timer = setTimeout(run, speed);
      } else {
        stageIndex++;
        if (stageIndex < stages.length) timer = setTimeout(run, 120);
      }
    };

    // Only start once the page is ready
    if (document.readyState === "complete") {
      run();
    } else {
      window.addEventListener("load", run, { once: true });
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const t = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(t);
    }
  }, [progress]);

  if (!visible) return null;

  const pad = (n) => String(n).padStart(3, "0");

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center
        transition-opacity duration-700 text-center
        ${progress === 100 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* Logo */}
      <div
        className="font-display text-4xl tracking-[0.15em] text-white mb-12
          animate-[fadeUp_0.6s_0.2s_both]"
      >
        ACHIEVERS <span className="text-accent">SAFETY</span>
      </div>

      {/* Progress bar */}
      <div className="w-[220px] h-px bg-white/10 relative overflow-hidden mb-5">
        <div
          className="h-full bg-accent transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p
        className="font-mono text-[11px] tracking-[0.2em] text-white/40
          animate-[fadeUp_0.6s_0.4s_both]"
      >
        {pad(progress)}%
      </p>

      {/* Pulse dots */}
      <div className="flex gap-1.5 mt-8 animate-[fadeUp_0.6s_0.5s_both]">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1 h-1 rounded-full bg-white/20"
            style={{ animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>
    </div>
  );
};

export default PageLoader;
