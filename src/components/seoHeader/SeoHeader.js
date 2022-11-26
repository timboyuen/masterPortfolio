import React from "react";
import { Helmet } from "react-helmet";
import { seo } from "../../portfolio.js";

function SeoHeader() {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content="Timbo Yuen's Portfolio" />
      <meta property="og:title" content="Timbo Yuen's Portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://www.timboyuen.com" />
    </Helmet>
  );
}

export default SeoHeader;
