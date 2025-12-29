---
layout: home
hero:
  name: 彭海东
  text: 技术学习者
  tagline: 大模型，Langchain，Langgraph，入侵检测，深度学习

  actions:
    - theme: brand
      text: 个人主页
      link: https://github.com/BrandPeng
    # - theme: alt
    #   text: 关于我
    #   link: /resume
features:
  - icon:

      width: 30
    title: Langchain 1.0
    details: Notes and Examples for Learning LangChain 1.0 and LangGraph 1.0
    link: https://github.com/BrandPeng/Langchain1.0-Langgraph1.0-Learning
    linkText: 查看笔记
  - icon:
      # src: /mininet/favicon.png
      width: 28
    title: Multi Agent
    details: A multi-agent development project built on LangGraph 1.0
    link: https://github.com/BrandPeng/Langgraph1.0
    linkText: 查看笔记
  - icon:
      width: 28
    title: Agentic RAG
    details:  A Agentic RAG project built on LangGraph 1.0
    link:  https://github.com/BrandPeng/RAG_Agent
    linkText: 查看笔记
---

---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: '/avatar.jpg',
    name: 'Haidong Peng',
    title: 'Large Language Model (LLM) Enthusiast',
    desc: 'Focused on Langchain, Langgraph,Agent and RAG',
    links: [
      { icon: 'github', link: 'https://github.com/BrandPeng' },
    ],
  },
]
</script>

<div align="center">
  <a  class="ToResume">
    <VPTeamMembers size="small" :members />
  </a>
</div>
