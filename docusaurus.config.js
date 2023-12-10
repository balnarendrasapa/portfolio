// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const organizationName = 'balnarendrasapa';
const projectName = 'portfolio';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portfolio',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Bal Narendra Sapa | Portfolio',
        logo: {
          alt: 'Header Icon',
          src: 'Header-Footer Files/Icon.svg',
        },
        items: [
          {
            href: `https://www.linkedin.com/in/bal-narendra-s/`,
            label: "LinkedIn",
            position: "left",
          },
          {
            href: `https://www.kaggle.com/balnarendrasapa`,
            label: "Kaggle",
            position: "left",
          },
          {
            href: `https://github.com/${organizationName}`,
            label: "GitHub",
            position: "left",
          },
          {
            href: `https://huggingface.co/bnsapa`,
            label: "HuggingFace",
            position: "left",
          },
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: "Go to Site's Repo",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Bal Narendra Sapa's Portfolio`,
        logo: {
          alt: 'Footer Icon',
          src: 'Header-Footer Files/Icon.svg',
          href: 'https://balnarendrasapa.github.io/portfolio/',
          width: 160,
          height: 51,
        },
        links: [
          {
            title: 'Social',
            items: [
              {
                href: `https://www.linkedin.com/in/bal-narendra-s/`,
                label: "LinkedIn",
              },
              {
                href: `https://www.kaggle.com/balnarendrasapa`,
                label: "Kaggle",
              },
              {
                href: `https://huggingface.co/bnsapa`,
                label: "HuggingFace",
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                href: `https://github.com/${organizationName}`,
                label: "GitHub",
              },
              {
                label: "Go to Site's Repo",
                href: `https://github.com/${organizationName}/${projectName}`,
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
