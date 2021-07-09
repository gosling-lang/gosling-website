import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

import { BrowserGosling } from '../../../GoslingEditor';
import * as SPECs from '../../../GoslingEditor/SPECS.js';


export default function Themes() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themes } = siteConfig.customFields.themes
  const visList = ['SPEC_CIRCULAR', 'SPEC_LINK']
  const [ vis, setVis] = useState('SPEC_CIRCULAR')


  const selectPanel = <><label htmlFor="cars">Choose a Visualization: </label>
  <select name="vis" id="vis" onChange={ (event) => setVis(event.target.value)}>
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

            {themes.map((theme, idx) => (
              <div key={theme.name}>
              <BrowserGosling spec={SPECs[vis]} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
