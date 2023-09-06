import React from "react";
import { Helmet } from "react-helmet-async";

const MetadataTemplate = ({
  metaTitle,
  metaDescription,
  ogUrl,
  ogTitle,
  ogDescription,
}) => {
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta
        property="og:image"
        content={`${process.env.PUBLIC_URL}/metaImg.png`}
      />
    </Helmet>
  );
};

export default MetadataTemplate;
