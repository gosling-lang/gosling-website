import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import BrowserOnly from '@docusaurus/BrowserOnly';

import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';




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
        Gosling has intuitive and effective user interactions built in, including zooming and panning and brushing and linking.
        This enables flexible visualizations that cover a wide range of visual analysis scenarios, like overview + detail views with brushes or comparative views.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
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

const dummyGosling = <BrowserOnly>
  {() => {
    const { GoslingComponent } = require("gosling.js");
    return <div className='dummyGosling'><GoslingComponent /></div>
  }}
</BrowserOnly>


const floatingWindow = <div className={styles.floatingNews}>
  <h3 style={{ textAlign: 'center' }}>News</h3>
  <ul>
    <li>
      Our <a href='http://gosling-lang.org/tutorials/ismb'>tutorial on Gosling</a> has been accepted for ISMB 2022 🎉
    </li>
    <li>We release <a href='https://github.com/gosling-lang/gosling.js/releases/tag/v0.9.16'>v0.9.16</a> of Gosling</li>
    <li>
      Gosling won the <a href="https://www.iscb.org/ismbeccb2021-general/awardwinners#biovis-poster">Best Abstract Award at BioVis ISMB 2021</a> 🏆
    </li>
    <li>
      Our first paper about <a hre="http://localhost:3000/docs/">Gosling.js</a> has been presented at <a href="http://ieeevis.org/year/2021/info/papers-sessions">VIS 2021</a> and will be published to IEEE TVCG.
    </li>
  </ul>
</div>


const carousel = <Carousel autoplay autoplaySpeed={7000}>
  <div className={styles.carouselContent}>
    <a className={styles.carouselContent} href='/examples' target='_blank'>
      <img className={styles.galleryImage}
        src="https://user-images.githubusercontent.com/9922882/109852545-e05f3400-7c22-11eb-90f3-7371e4ddeb42.png"
        alt='gosling_gallery'
      />
    </a>
  </div>
  <div className={styles.carouselContent}>
    <a className={styles.carouselContent} href='/examples' target='_blank'>
      <img className={styles.galleryImage}
        src="/img/example/multi_views.gif"
        alt='gosling_overview'
      />
    </a>
  </div>
  <div className={styles.carouselContent}>
    <a className={styles.carouselContent} href='/examples' target='_blank'>
      <img className={styles.galleryImage}
        src="/img/example/circos-layout.gif"
        alt='gosling_layout'
      />
    </a>
  </div>
  <div className={styles.carouselContent}>
    <a className={styles.carouselContent} href='/examples' target='_blank'>
      <img className={styles.galleryImage}
        src="/img/example/lollipop.gif"
        alt='gosling_lollipop'
      />
    </a>
  </div>
  <div className={styles.carouselContent}>
    <a className={styles.carouselContent} href='/examples' target='_blank'>
      <img className={styles.galleryImage}
        src="/img/example/matrix.gif"
        alt='gosling_matrix'
      />
    </a>
  </div>
</Carousel>

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx("row row--no-gutters", styles.header)}>
          <div className={clsx('col col--8 col--offset-2', styles.halfHeader)}>
            <h1 className="hero__title"> <img src={siteConfig.customFields.logo} className={styles.title_logo} /> {siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>

            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/')}>
              <b>Gosling.js:</b> JavaScript library for Gosling
            </Link>

            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={'https://gosling-lang.github.io/gos/'}>
              <b>Gos:</b> Python package for Gosling
            </Link>
          </div>

          <div className='col col--2 padding--none'>
            {floatingWindow}
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {carousel}

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
      { }
    </Layout >
  );
}
