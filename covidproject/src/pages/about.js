import React from "react";
import { Helmet } from "react-helmet";

import { useSiteMetadata } from "hooks";

import Layout from "components/Layout";
import Container from "components/Container";

const SecondPage = () => {
  const { companyName, companyUrl, authorName, authorUrl, siteDescription } =
    useSiteMetadata();
    const gitUrl = "https://github.com/gls1993/COVID-19-Project/";
  return (
    <Layout pageName="about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container type="content">
        <h1>About</h1>

        <h2>{companyName}</h2>
        <p>{siteDescription}</p>
        <p>
          <a href={gitUrl}>View on Github</a>
        </p>

        <h2>Created By</h2>
        <p>
          <a href={authorUrl}>{authorName}</a>
        </p>
      </Container>
    </Layout>
  );
};

export default SecondPage;