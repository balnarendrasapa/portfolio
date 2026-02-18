// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const organizationName = 'balnarendrasapa';
const projectName = 'portfolio';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portfolio',
  tagline: 'AI Engineer · Data Scientist',
  favicon: 'Header-Footer Files/Icon.svg',
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  organizationName,
  projectName,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['public', 'static'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'Header-Footer Files/Icon.svg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'Bal Narendra Sapa',
        logo: {
          alt: 'Bal Narendra Sapa',
          src: 'Header-Footer Files/Icon.svg',
        },
        items: [
          {to: '/#about', label: 'About', position: 'left'},
          {to: '/#experience', label: 'Experience', position: 'left'},
          {to: '/#projects', label: 'Projects', position: 'left'},
          {to: '/#contact', label: 'Contact', position: 'left'},
          {href: 'https://github.com/balnarendrasapa', label: 'GitHub', position: 'right'},
          {href: 'https://www.linkedin.com/in/balnarendrasapa/', label: 'LinkedIn', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Bal Narendra Sapa`,
        links: [
          {
            title: 'Profiles',
            items: [
              {label: 'GitHub', href: 'https://github.com/balnarendrasapa'},
              {label: 'LinkedIn', href: 'https://www.linkedin.com/in/balnarendrasapa/'},
              {label: 'Hugging Face', href: 'https://huggingface.co/bnsapa'},
              {label: 'Kaggle', href: 'https://www.kaggle.com/balnarendrasapa'},
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
