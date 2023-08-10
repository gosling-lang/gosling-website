import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import BrowserOnly from '@docusaurus/BrowserOnly';

import { Carousel } from 'antd';
import 'antd/dist/antd.css';




const features = [
  {
    title: 'Scalability',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Gosling scales from whole genomes to single nucleotides via semantic zooming that updates visual encodings dynamically and
        by using the rendering and data access capabilities of our <a href="http://higlass.io/" class='primary-color'>HiGlass</a> genomics visualization framework.
      </>
    ),
  },
  {
    title: 'Expressiveness',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Gosling is designed to be expressive enough to generate pretty much any visualization of genome-mapped data,
        which we accomplished by basing the grammar on <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/cgf.13727" class='primary-color'>our taxonomy</a> of (epi)genomics data visualizations.
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
  <li>We release documentations for Gosling <a href='https://github.com/gosling-lang/gosling.js/releases/tag/v0.10.0' class='primary-color'>v0.10.0</a>, 
    which adds support for <a href='/docs/data#gff3-no-higlass-server' class='primary-color'>GFF files</a>, a <a href='docs/js-api#getviewids' class='primary-color'>Javscript API to get the ID of views</a>, and a <a href='/docs/non-gos-vis' class='primary-color'> placeholder track</a> for non-Gosling visualizations.
   </li>
  <li>We release documentations for Gosling <a href='https://github.com/gosling-lang/gosling.js/releases/tag/v0.9.30' class='primary-color'>v0.9.30</a>, 
    which supports <a href='/docs/#use-goslingjs-with-react' class='primary-color'>React v18</a> and
    <a href='/docs/data#beddb-require-higlass-server' class='primary-color'> BED file datafetcher</a>!
   </li>

   <li>We release documentations for Gosling <a href='https://github.com/gosling-lang/gosling.js/releases/tag/v0.9.20' class='primary-color'>v0.9.20</a>, 
    which supports <a href='docs/js-api#subscribe' class='primary-color'>mouse event APIs</a>, 
    <a href='/docs/responsive' class='primary-color'>responsive design</a>, 
    and more <a href='/docs/visual-channel#style-related-properties' class='primary-color'> expressive styles!</a>
   </li>

    <li>
      Our <a href='http://gosling-lang.org/tutorials/ismb' class='primary-color'>tutorial on Gosling</a> has been accepted for ISMB 2022 🎉
    </li>
    
    <li>
      Gosling won the <a href="https://www.iscb.org/ismbeccb2021-general/awardwinners#biovis-poster" class='primary-color'>Best Abstract Award at BioVis ISMB 2021</a> 🏆
    </li>
    <li>
      Our first paper about <a hre="https://osf.io/6evmb/" class='primary-color'>Gosling.js</a> has been presented at <a href="http://ieeevis.org/year/2021/info/papers-sessions" class='primary-color'>VIS 2021</a> and will be published to IEEE TVCG.
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
      <span className={styles.carouselTitle}>Example Gallery</span>
    </a>
  </div>
  <div className={styles.carouselContent}>
    <a className={styles.carouselContent} href='https://gosling.js.org?example=CIRCULAR_OVERVIEW_LINEAR_DETAIL' target='_blank'>
      <img className={styles.galleryImage}
        src="/img/example/multi_views.gif"
        alt='gosling_overview'
      />
      <span className={styles.carouselTitle}>Link and Brush</span>
    </a>
  </div>
  <div className={styles.carouselContent}>
    <a className={styles.carouselContent} href='https://gosling.js.org/?example=CIRCULAR_OVERVIEW_LINEAR_DETAIL' target='_blank'>
      <img className={styles.galleryImage}
        src="/img/example/circos-layout.gif"
        alt='gosling_layout'
      />
      <span className={styles.carouselTitle}>Easy Layout</span>
    </a>
  </div>
  <div className={styles.carouselContent}>
    <a className={styles.carouselContent} href='https://gosling.js.org/?example=SEMANTIC_ZOOM' target='_blank'>
      <img className={styles.galleryImage}
        src="/img/example/semantic_zoom_lollipop.gif"
        alt='gosling_lollipop'
      />
      <span className={styles.carouselTitle}>Semantic Zoom</span>
    </a>
  </div>
  <div className={styles.carouselContent}>
    <a className={styles.carouselContent} href='https://gosling.js.org/?example=MATRIX_HFFC6' target='_blank'>
      <img className={styles.galleryImage}
        src="/img/example/matrix.gif"
        alt='gosling_matrix'
      />
      <span className={styles.carouselTitle}>Comparative Matrices</span>
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

            <br/>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={'https://github.com/gosling-lang/gosling-react'}>
              Using Gosling in your <b>React</b> App
            </Link>

            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={'https://github.com/gosling-lang/streamlit-gosling'}>
              Using Gosling in your <b>Streamlit</b> App
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
