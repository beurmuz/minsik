import React from "react";
import { Helmet } from "react-helmet-async";

const MetadataTemplate = ({
  metaTitle,
  metaDescription,
  ogUrl,
  ogTitle,
  ogDescription,
}) => {
  const publicUrl = process.env.PUBLIC_URL || "";
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta
        property="og:image"
        content={`${publicUrl}/metaImg.png`}
      />
    </Helmet>
  );
};

export default MetadataTemplate;
