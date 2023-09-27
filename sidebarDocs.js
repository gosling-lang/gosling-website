module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'getting-started',
    },
    {
      type: 'category',
      label: 'Grammar',
      link: {
        type: 'generated-index',
        title: 'Grammar',
        description:
          'This is the documentation for the Gosling grammar. If this is your first time looking at the docs, we recommend starting with Composition, Mark, and Visual Channel.',
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
      ],
    },
    {
      type: 'doc',
      label: 'JavaScript API Functions',
      id: 'js-api',
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
