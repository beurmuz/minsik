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

      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content="SIK-K" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image" content="%PUBLIC_URL%/metaImg.png" />

      <link rel="canonical" href="" />
    </Helmet>
  );
};

export default MetadataTemplate;
