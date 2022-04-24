import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function BasicExampleImage({ imageUrl, title, url, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)} >
      <a id={title.toLocaleLowerCase().replace(' ', '_')} className={styles.invisibleAnchor} />
      {imgUrl && (
        <div className={'text--center'}>
          <a href={url} target="_blank">
            <img className={clsx(styles.featureImage, styles.basicExample)} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3 >{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }} ></p>
    </div>
  );
}

function GalleryExampleImage({ imageUrl, title, url, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      <a id={title.toLocaleLowerCase().replace(' ', '_')} className={styles.invisibleAnchor} />
      {imgUrl && (
        <div className={'text--center'}>
          <a href={url} target="_blank">
            <img className={clsx(styles.featureImage, styles.galleryExample)} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3 >{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }} ></p>
    </div>
  );
}

function getExampleSubgroups(examples) {
  return <ul>
    {examples.map(exp => <li key={exp.title} className={styles.subgroupli}>
      <a href={`#${exp.title.toLocaleLowerCase().replace(' ', '_')}`} className='table-of-contents__link toc-highlight'>
        {exp.title}
      </a>
    </li>)}
  </ul>
}

function getExampleGroups(examples) {
  const exampleGroupNames = Object.keys(examples)

  return <ul className='table-of-contents table-of-contents__left-border'>
    {exampleGroupNames.map(groupname => {
      const group = examples[groupname]
      return <li key={groupname}>
        <a className='table-of-contents__link toc-highlight' href={`#${group.name.toLocaleLowerCase().replace(' ', '_')}`}>{group.name}</a>
        {getExampleSubgroups(group.list)}
      </li>
    })}
  </ul>
}

export default function Examples() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { basicExamples, advancedExamples, interactionExamples, multiViewExamples, gallery } = siteConfig.customFields.examples
  return (
    <Layout
      title="Examples">
      <main className='row'>
        <div className='col col--10'>

          {/* basic examples */}
          <header className={styles.sectionHeader}>
            <a id={basicExamples.name.toLowerCase().replace(' ', '_')} className={styles.invisibleAnchor} />
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
            [advancedExamples, interactionExamples, multiViewExamples, gallery].map(examples => {
              return (<>
                <header key={`header_${examples.name}`} className={styles.sectionHeader}>
                  <a id={examples.name.toLowerCase().replace(' ', '_')} className={styles.invisibleAnchor} />
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
        </div>

        <div className='col col--2'>
          <div className={styles.floatingSiderbar}>
            {getExampleGroups(siteConfig.customFields.examples)}
          </div>
        </div>
      </main>
    </Layout>
  );
}
