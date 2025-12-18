import { defineConfig } from 'vitepress'





const keywords = [
  '彭海东',
  '笔记', '学习笔记', '科研笔记', '读书笔记', '阅读笔记','Langchain','大模型','Langgraph'
]

const description_cn = '彭海东的个人网站。'
const description_en = 'This is Haidong Peng\'s personal website.'
export default defineConfig({
  title: '彭海东',
  lang: 'zh-Hans',
  description: description_cn + description_en,
  appearance: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'keywords', content: keywords.join(', ') }],
    ['meta', { name: 'google-site-verification', content: 'wMOTcBwCiCMV7ESftQRY3Glvq8UL4xzUKrZ-1wjOpqM' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['script', {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-414XCQ3MDV');
      `
    ]
  ],
  markdown: {
    math: true,

  },
  themeConfig: {
    siteTitle: '彭海东',

    footer: {
      message: 'Released under the <a href="/mit">MIT License</a>.',
      copyright: 'Copyright © 2025-present <a href="/resume">Haidong Peng</a>'
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BrandPeng' },


    ]
  },
  sitemap: { hostname: 'https://BrandPeng.github.io' }
})
