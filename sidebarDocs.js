module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'getting-started',
    },
    {
      type: 'doc',
      id: 'usage'
    },
    {
      type: 'category',
      label: 'Grammar Guide',
      link: {
        type: 'generated-index',
        title: 'Grammar Guide',
        description:
          'This is a guide to the Gosling grammar. If this is your first time looking at the docs, we recommend starting with Composition, Mark, and Visual Channel.',
        keywords: ['guides'],
      },
      collapsed: true,
      items: [
        'composition',
        'data',
        'mark',
        'visual-channel',
        'genome-builds',
        'user-interaction',
        'semantic-zoom',
        'fixed-responsive',
      ],
    },
    {
      type: 'doc',
      label: 'Grammar Reference',
      id: 'reference',
    },
    {
      type: 'doc',
      label: 'React Component API',
      id: 'react-api',
    },
    {
      type: 'doc',
      label: 'Integrating non-Gosling visualizations',
      id: 'non-gos-vis',
    },
    {
      type: 'doc',
      id: 'public-datasets',
    },
    {
      type: 'doc',
      id: 'FAQ',
    },
  ],
};
