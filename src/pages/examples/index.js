import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

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

export default function Examples() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {basicExamples, advancedExamples, interactionExamples, gallery} = siteConfig.customFields.examples
  return (
    <Layout
      title="Examples">
        <main>

          {/* basic examples */}
          <header className={styles.sectionHeader}>
            <h1>{basicExamples.name}</h1>
          </header>
        {basicExamples.list && basicExamples.list.length > 0 && (
          <section className={styles.examples}>
            <div className="container">
              <div className="row">
                {basicExamples.list.map((props, idx) => (
                  <BasicExampleImage key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}


        {
          [advancedExamples, interactionExamples, gallery].map(examples=>{
            return (<><header key={`header_${examples.name}`} className={styles.sectionHeader}>
              <h1 >{examples.name}</h1>
            </header>
          {examples.list && examples.list.length > 0 && (
            <section key={`section_${examples.name}`} className={clsx(styles.examples, examples.name)}>
              <div className="container">
                <div className="row">
                  {examples.list.map((props, idx) => (
                    <GalleryExampleImage key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>)
          }
          </>)
        })
        }

          
        

      </main>
    </Layout>
  );
}
