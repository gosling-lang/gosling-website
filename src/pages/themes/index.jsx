import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

import { GoslingStyle } from '../../../GoslingEditor';
import * as SPECs from '../../../GoslingEditor/SPECS.js';


export default function Themes() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themes } = siteConfig.customFields.themes
  const visList = ['SPEC_CIRCULAR', 'SPEC_LINK','MAIN_SPEC']
  const [ vis, setVis] = useState('MAIN_SPEC')
  const [ theme, setTheme] = useState('light')


  const selectPanel = <><label htmlFor="cars">Visualization: </label>
  <select name="vis" id="vis" onChange={ (event) => setVis(event.target.value)}>
  <option value="MAIN_SPEC"> Main Example </option>
    <option value="SPEC_CIRCULAR"> Circular</option>
    <option value="SPEC_LINK"> Linking </option>
  </select> </>
      
  const selectTheme = <><label htmlFor="cars">Theme: </label>
  <select name="theme" onChange={ (event) => setTheme(event.target.value)}>
  <option value="light"> Light </option>
    <option value="dark"> Dark</option>
    <option value="warm"> Warm</option>
    <option value="excel"> Excel</option>
    <option value="ggplot"> ggplot</option>
    <option value="google"> Google</option>
    <option value="ensembl"> Ensembl</option>
    <option value="igv"> IGV</option>
    <option value="jbrowse"> JBrowse</option>
    <option value="ucsc"> UCSC</option>
    <option value="washu"> WashU</option>
  </select> </>    
   

  return (
    <Layout
      title="Theme">
      <main>
        <header className={styles.sectionHeader}>
          <h1 >Theme Playground</h1>
        </header>
        
        <div className="container">
          {selectPanel}
          <br/>
          {selectTheme}

          
              <div key={theme}>
              <div  className={clsx(styles.themeContainer)}>
                 
              <GoslingStyle spec={SPECs[vis]} theme={theme} />
              </div>
        </div>
        </div>
      </main>
    </Layout>
  );
}
