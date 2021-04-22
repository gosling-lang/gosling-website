import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {basicExamples, interactionExamples, gallery, advancedExamples} from './example-list.js';

function BasicExampleImage({imageUrl, title, url, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className={'text--center'}>
          <a href={url} target="_blank">
            <img className={clsx(styles.featureImage, styles.basicExample)} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function GalleryExampleImage({imageUrl, title, url, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className={'text--center'}>
          <a href={url} target="_blank">
            <img className={clsx(styles.featureImage, styles.galleryExample)} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
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
      title={siteConfig.title}>
        <main>
          <header className={styles.sectionHeader}>
            <h1>Basic Marks</h1>
          </header>
        {basicExamples && basicExamples.length > 0 && (
          <section className={styles.examples}>
            <div className="container">
              <div className="row">
                {basicExamples.map((props, idx) => (
                  <BasicExampleImage key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

          <header className={styles.sectionHeader}>
            <h1>Interactions</h1>
          </header>
        {interactionExamples && interactionExamples.length > 0 && (
          <section className={styles.examples}>
            <div className="container">
              <div className="row">
                {interactionExamples.map((props, idx) => (
                  <GalleryExampleImage key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        <header className={styles.sectionHeader}>
            <h1>Compositive Visualization</h1>
          </header>
        {advancedExamples && advancedExamples.length > 0 && (
          <section className={styles.examples}>
            <div className="container">
              <div className="row">
                {advancedExamples.map((props, idx) => (
                  <GalleryExampleImage key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

          <header className={styles.sectionHeader}>
            <h1>Gallery</h1>
          </header>
        {gallery && gallery.length > 0 && (
          <section className={styles.examples}>
            <div className="container">
              <div className="row">
                {gallery.map((props, idx) => (
                  <GalleryExampleImage key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
    </Layout>
  );
}
