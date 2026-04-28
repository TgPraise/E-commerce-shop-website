import { useState } from "react";
import { FadeIn } from "@/components/animations";
import SectionHeading from "@/components/SectionHeading";

// 👉 Import your images here
import img1 from "../assets/galary/1.webp";
import img2 from "../assets/galary/2.webp";
import img3 from "../assets/galary/3.webp";
import img4 from "../assets/galary/4.webp";
import img5 from "../assets/galary/5.webp";
import img6 from "../assets/galary/6.webp";
import img7 from "../assets/galary/image1.jpg";
import img8 from "../assets/galary/image2.webp";
import img9 from "../assets/galary/image3.webp";
import img10 from "../assets/galary/image4.webp";
import img11 from "../assets/galary/image5.webp";

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10, img11,
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow">
          <FadeIn>
            <span className="font-mono-ui text-xs text-accent mb-4 block">
              Our Work
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight">
              Gallery
            </h1>
            <p className="mt-4 text-primary-foreground/60 text-lg max-w-xl">
              A visual showcase of our safety and security operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* GRID */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <FadeIn delay={0.2}>
            <SectionHeading
              title="Project Highlights"
              description="Real moments from our field operations and consultancy work."
            />
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="cursor-pointer overflow-hidden bg-surface"
                  onClick={() => setSelected(img)}
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    loading="lazy"
                    className="w-full h-56 object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Preview"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default Gallery;