const SectionHeading = ({ label, title, description }) => (
  <div className="mb-12 md:mb-16">
    {label && <span className="font-mono-ui text-xs text-accent mb-3 block">{label}</span>}
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
      {title}
    </h2>
    {description && <p className="mt-4 text-text-secondary text-lg max-w-2xl">{description}</p>}
  </div>
);

export default SectionHeading;