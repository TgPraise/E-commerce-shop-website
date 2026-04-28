import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  url,
  image,
  type = "website",
}) => {
  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical */}
      <link rel="canonical" href='http://localhost:8080' />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content='http://localhost:8080' />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo (Nigeria SEO boost) */}
      <meta name="geo.region" content="NG-LA" />
      <meta name="geo.placename" content="Lagos" />
    </Helmet>
  );
};

export default SEO;