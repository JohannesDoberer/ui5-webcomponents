import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  documentationSidebar: [{ type: 'autogenerated', dirName: 'docs' }],
  componentsSidebar: [
    {
      type: 'category',
      label: "Main",
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Main components',
        slug: '/components',
      },
      items: [{ type: 'autogenerated', dirName: 'components/main' }]
    },
    {
      type: 'category',
      label: "Fiori",
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Fiori',
        slug: '/components/fiori',
      },
      items: [{ type: 'autogenerated', dirName: 'components/fiori' }]
    },
    {
      type: 'category',
      label: "Compatibility",
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Compatibility',
        slug: '/components/compat',
      },
      items: [{ type: 'autogenerated', dirName: 'components/compat' }]
    },
    {
      type: 'category',
      label: "AI",
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'AI',
        slug: '/components/ai',
      },
      items: [{ type: "autogenerated", dirName: 'components/ai' }]
    },
    {
      type: 'category',
      label: "AI Patterns",
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'AI Patterns',
        slug: '/components/ai_patterns',
      },
      items: [{ type: "autogenerated", dirName: 'components/ai_patterns' }]
    }
  ]
};

export default sidebars;
