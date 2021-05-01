import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default function About() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}>
        <main>
            <h1>About the Gosling Project</h1>
            <section></section>

      </main>
    </Layout>
  );
}
