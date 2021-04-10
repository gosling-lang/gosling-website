/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'GOSLING',
  tagline: 'A Grammar-based Toolkit for Interactive (Epi)Genomics Visualization',
  url: 'https://gosling.js.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GehlenborgLab', // Usually your GitHub org/user name.
  projectName: 'GOSLING', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
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
      title: 'GOSLING',
      logo: {
        alt: 'GOSLING Logo',
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
        {to: 'blog', label: 'Examples', position: 'left'},
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
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
    // 
    [
      '@docusaurus/plugin-content-docs',
      {
        id:'tutorials',
        path: 'gosling-docs/tutorials',
        routeBasePath: 'tutorials',
        include: ['*.md', '*.mdx'],
        // ...
      },
    ],
    
  ],
}
