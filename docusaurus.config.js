/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gosling',
  url: 'https://gosling-lang.github.io', // Your website URL
  baseUrl: '/',
  projectName: 'gosling-website',
  organizationName: 'gosling-lang',
  tagline: 'A Grammar-based Toolkit for Scalable and Interactive Genomics Data Visualization',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/gosling-dark.png',
  stylesheets: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
    "https://unpkg.com/higlass@1.11.3/dist/hglib.css",
  ],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    algolia: {
      appId: 'BH4D9OD16A',
      // Public API key: it is safe to commit it
      apiKey: '2433596549fc3097cdfb5d71b22811ab',
      indexName: 'gosling-lang',
      // useful for versioned docs
      // contextualSearch: true,
    },
    navbar: {
      title: 'Gosling',
      hideOnScroll: false,
      logo: {
        alt: 'Gosling Logo',
        src: 'img/gosling-dark.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'tutorials/', label: 'Tutorials', position: 'left' },
        { to: 'usage/', label: 'Usage', position: 'left' },
        { to: 'examples/', label: 'Examples', position: 'left' },
        { to: 'themes/', label: 'Themes', position: 'left' },
        { to: 'about/', label: 'About', position: 'left' },
        {
          href: 'https://github.com/gosling-lang/gosling.js/issues/new/choose',
          label: 'Questions & Suggestions',
          position: 'right',
        },
        {
          href: 'https://github.com/gosling-lang',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Tutorials',
              to: 'tutorials/',
            },
            {
              label: 'Examples',
              to: 'examples/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/gosling-lang',
            },
            {
              label: 'Paper',
              href: 'https://doi.org/10.1109/TVCG.2021.3114876',
            },
            {
              label: 'Online Editor',
              href: 'https://gosling.js.org/',
            },
            {
              label: "Road Map",
              href: "https://github.com/gosling-lang/gosling.js/projects/1"
            }
          ],
        },
        {
          title: 'Team',
          items: [
            {
              label: 'Sehi L\'Yi',
              href: 'http://sehilyi.com/',
            },
            {
              label: 'Qianwen Wang',
              href: 'https://qianwen.info/',
            },
            {
              label: 'Trevor Manz',
              href: 'https://trevorma.nz/',
            },
            {
              label: 'Fritz Lekschas',
              href: 'https://lekschas.de',
            },
            {
              label: "Nils Gehlenborg",
              href: "http://gehlenborglab.org/team/members/nils-gehlenborg/"
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Harvard. Built with Docusaurus.`,
    },
    metadata: [
      { name: 'twitter:card', content: 'summary' },
      { name: "twitter:title", content: "Gosling" },
      { name: 'twitter:description', content: 'A Grammar-based Toolkit for Scalable and Interactive Genomics Data Visualization' },
      { name: 'twitter:image', content: 'https://user-images.githubusercontent.com/9922882/109852545-e05f3400-7c22-11eb-90f3-7371e4ddeb42.png' }
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          editUrl: ({versionDocsDirPath, docPath}) =>
          `https://github.com/gosling-lang/gosling-website/edit/main/${versionDocsDirPath}/${docPath}`,
          include: ['**/*.md', '**/*.mdx'],
          sidebarPath: require.resolve('./sidebarDocs.js'),
         
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'UA-96954979-4',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        googleAnalytics: {
          trackingID: 'UA-96954979-4',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
  plugins: [
    require.resolve('./plugins/monaco-plugin/index.js'),
    // gosling tutorials
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'tutorials/',
        sidebarPath: require.resolve('./sidebarTutorial.js'),
        routeBasePath: 'tutorials',
        editUrl: ({versionDocsDirPath, docPath}) =>
          `https://github.com/gosling-lang/gosling-website/edit/main/${versionDocsDirPath}/${docPath}`,
        include: ['*.md', '*.mdx']
      },
    ],
  ],
  customFields: {
    logo: 'img/gosling-dark.png',
    examples: require('./assets/example-list'),
    themes: require('./assets/theme-list'),
  }
}
