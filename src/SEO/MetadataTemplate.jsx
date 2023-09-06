import React from "react";
import { Helmet } from "react-helmet-async";
import metaImg from "../assets/images/metaImg.png";

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
      <meta property="og:image" content={metaImg} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content="SIK-K" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="600" />

      <link rel="canonical" href="" />
    </Helmet>
  );
};

export default MetadataTemplate;
