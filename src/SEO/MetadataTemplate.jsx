import React from "react";
import { Helmet } from "react-helmet-async";

const MetadataTemplate = ({ metaUrl, metaTitle, metaDescription }) => {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      {/* <meta property="og:image" content="https://example.com/image.jpg" /> */}
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content="SIK-K" />
      <meta property="og:locale" content="ko_KR" />
      {/* <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}
    </Helmet>
  );
};

export default MetadataTemplate;
