import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

import { BrowserGosling } from '../../../GoslingEditor';
import { SPEC_LINK, SPEC_CIRCULAR } from '../../../GoslingEditor/SPECS.js';


export default function Themes() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themes } = siteConfig.customFields.themes


  const selectPanel = <><label for="cars">Choose a Visualization: </label>
  <select name="vis" id="vis">
    <option value="SPEC_CIRCULAR"> Circular</option>
    <option value="SPEC_LINK"> Linking </option>
  </select> </>
  return (
    <Layout
      title="Theme">
      <main>
        <header className={styles.sectionHeader}>
          <h1 >Theme Gallery</h1>
        </header>
        
        <div className="container">
          {selectPanel}
          <div className="row">

            {themes.map((them, idx) => (
              <BrowserGosling spec={SPEC_LINK} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
