import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Scalability',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Gosling scales from whole genomes to single nucleotides via semantic zooming that updates visual encodings dynamically and 
        by using the rendering and data access capabilities of our <a href="http://higlass.io/">HiGlass</a> genomics visualization framework.
      </>
    ),
  },
  {
    title: 'Expressiveness',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Gosling is designed to be expressive enough to generate pretty much any visualization of genome-mapped data, 
        which we accomplished by basing the grammar on <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/cgf.13727">our taxonomy</a> of (epi)genomics data visualizations.
      </>
    ),
  },
  {
    title: 'Interactivity',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        EGosling has intuitive and effective user interactions built in, including zooming and panning and brushing and linking. 
        This enables flexible visualizations that cover a wide range of visual analysis scenarios, like overview + detail views with brushes or comparative views.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {/* {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )} */}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
                styles.buttonLink
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.galleryImage}>
          <img className={styles.galleryImage}
            src="https://user-images.githubusercontent.com/9922882/109852545-e05f3400-7c22-11eb-90f3-7371e4ddeb42.png" 
            alt='gsoling_gallery' 
          />
        </section>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
