import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const directionOffset = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { y: 0, x: 24 },
    right: { y: 0, x: -24 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)", ...directionOffset[direction] }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);