/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gosling.js',
  url: 'https://gosling-lang.github.io', // Your website URL
  baseUrl: '/gosling-website/',
  projectName: 'gosling-website',
  organizationName: 'gosling-lang',
  tagline: 'A Grammar-based Toolkit for Scalable and Interactive Genomics Data Visualization',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '\u2600',
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIconStyle: {
          marginLeft: '1px',
        },
      }
    },
    navbar: {
      title: 'Gosling.js',
      logo: {
        alt: 'Gosling Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'tutorials/', label: 'Tutorials', position: 'left'},
        {to: 'examples', label: 'Examples', position: 'left'},
        {
          href: 'https://github.com/gosling-lang/gosling.js',
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
              label: 'Tutorial',
              to: 'tutorials/',
            },
            {
              label: 'Examples',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/gosling-lang/gosling.js',
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
              href: 'http://wangqianwen0418.github.io/',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'gosling-docs/docs',
          sidebarPath: require.resolve('./sidebarDocs.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
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
      },
    ],
  ],
  plugins: [
    // custmo plugin to fix the symlink bug in webpack 
    require.resolve('./my-plugin/index.js'),
    // gosling tutorials
    [
      '@docusaurus/plugin-content-docs',
      {
        id:'tutorials',
        path: 'gosling-docs/tutorials',
        sidebarPath: require.resolve('./sidebarTutorial.js'),
        routeBasePath: 'tutorials',
        include: ['*.md', '*.mdx']
      },
    ]
    
  ],
  customFields: {
    themeColor: "#e18241",
  }
}
