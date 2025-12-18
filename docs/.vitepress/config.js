import { defineConfig } from 'vitepress'

const siteMapIcon = {
  svg: '<svg t="1760360619836" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3431" width="64" height="64"><path d="M256 704H64c-35.34 0-64 28.66-64 64v192c0 35.34 28.66 64 64 64h192c35.34 0 64-28.66 64-64v-192c0-35.34-28.66-64-64-64z m-48-160h384v96h96v-96h384v96h96v-115.18c0-42.34-34.46-76.82-76.82-76.82H688v-128h80c35.34 0 64-28.66 64-64V64c0-35.34-28.66-64-64-64H512c-35.34 0-64 28.66-64 64v192c0 35.34 28.66 64 64 64h80v128H188.82C146.46 448 112 482.46 112 524.82V640h96v-96z m528 160h-192c-35.34 0-64 28.66-64 64v192c0 35.34 28.66 64 64 64h192c35.34 0 64-28.66 64-64v-192c0-35.34-28.66-64-64-64z m480 0h-192c-35.34 0-64 28.66-64 64v192c0 35.34 28.66 64 64 64h192c35.34 0 64-28.66 64-64v-192c0-35.34-28.66-64-64-64z" p-id="3432" fill="#7F7F85"></path></svg>'
}






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
