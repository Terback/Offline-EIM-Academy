
import { SiteConfig } from './types';

export const SITE_CONFIG: SiteConfig = {
  theme: {
    primary: '#0066FF', // 经典科技蓝
    accent: '#00D1FF',  // 强调青色
  },
  hero: {
    title: 'EIM Academy 线下课程体系',
    subtitle: '以硬核工程为核心，连接设计美学与商业逻辑。我们培养的不只是开发者，更是具备技术底座的未来科技领袖。',
    primaryBtn: '立即咨询',
    secondaryBtn: '下载课程大纲',
    heroImage: 'https://github.com/Terback/Images/blob/main/OfflineEIMAcademy/PXL_20250212_003353346.jpg?raw=true', 
  },
  levels: [
    {
      id: 'level-1',
      name: 'Bootcamp',
      badge: 'Level 1',
      duration: '1天 (5小时)',
      valueProp: '快速体验和入门，带走一个小成果',
      target: '对工程、设计或科技创业感兴趣的初学者',
      intro: '5 小时的高密度实战，旨在通过一个闭环的小项目，让你在短时间内建立对硬核技术的感性认识与逻辑信心。',
      structure: [
        { label: '技能速学', description: '核心工具链快速上手 (2小时)', ratio: 40 },
        { label: '动手练习', description: '引导式闭环任务实践 (3小时)', ratio: 60 }
      ],
      outputs: ['完成一个可运行的最小原型', '掌握基础开发工具链的使用', '项目经历'],
      schedule: '13:00 签到及破冰 -> 14:00 理论讲解 -> 15:00 技能讲解  -> 16:00 项目实操 -> 17:00 调修及成果展示',
      images: ['https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800'],
      ctaLink: '#contact',
      subCourses: [
        {
          id: 'bc-1',
          title: 'Microcontroller 掌上游戏机开发',
          description: '从电路原理到游戏逻辑，亲手搭建一个专属掌机。',
          images: ['https://github.com/Terback/Images/blob/main/OfflineEIMAcademy/microcontroller.png?raw=true'],
          tags: ['硬件工程', 'MicroPython', '电子电路']
        },
        {
          id: 'bc-2',
          title: 'Unity 2D 游戏开发基础',
          description: '开启游戏开发之门，掌握MicroPython基础语法与 2D 物理引擎的应用。',
          images: ['https://github.com/Terback/Images/blob/main/OfflineEIMAcademy/Unity2D.png?raw=true'],
          tags: ['Unity', '2D', '交互设计']
        },
        {
          id: 'bc-3',
          title: 'Unity 3D 沉浸式空间构建',
          description: '探索 3D 建模、光影渲染与物理模拟，构建你的第一个虚拟数字世界。',
          images: ['https://github.com/Terback/Images/blob/main/OfflineEIMAcademy/Unity3D.png?raw=true'],
          tags: ['3D 引擎', '图形学', '虚拟现实']
        },
        {
          id: 'bc-4',
          title: '电脑硬件组装与架构学习',
          description: '不只是拼装零件，更是深入理解架构与系统性能优化。',
          images: ['https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=600'],
          tags: ['计算机组成', '硬件组装', '性能调优']
        },
        {
          id: 'bc-5',
          title: 'AI Vibe Coding 智能辅助编程',
          description: '利用 Cursor/Copilot 等前沿工具，告别枯燥语法，快速将创意转写为代码。',
          images: ['https://github.com/Terback/Images/blob/main/OfflineEIMAcademy/application.jpg?raw=true'],
          tags: ['AI 协作', '全栈开发', '效能工具']
        },
        {
          id: 'bc-6',
          title: 'AI 与硬件：边缘计算入门',
          description: '赋予硬件以大脑，学习如何将机器学习模型部署到微控制器，实现本地智能感知。',
          images: ['https://github.com/Terback/Images/blob/main/OfflineEIMAcademy/1000012798.jpg?raw=true'],
          tags: ['MicroPython', '机器视觉', '智能硬件']
        }
      ]
    },
    {
      id: 'level-2',
      name: '项目课',
      badge: 'Level 2',
      duration: '30 - 60小时',
      valueProp: '技能学习加项目落地，完成一个完整项目',
      target: '有一定基础，希望打造具有商业/求职竞争力的个人作品集的学生',
      intro: '基于真实问题定义的项目制学习（PBL）。学生将经历从需求分析、方案设计到最终交付的全过程，产出具有竞争力的作品。',
      structure: [
        { label: '技能深化', description: '专业领域进阶知识', ratio: 40 },
        { label: '项目实战', description: '独立或小组项目研发', ratio: 60 }
      ],
      outputs: ['完整的个人/团队项目作品集内容', '工程文档与技术说明书', '深度掌握特定技术栈'],
      schedule: '每周 2-3 次线下课程，持续 6-10 周。包含：阶段性技术研讨、导师 1-on-1 评审、Final Pitch。',
      images: ['https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800'],
      ctaLink: '#contact'
    },
    {
      id: 'level-3',
      name: '学徒制',
      badge: 'Level 3',
      duration: '1年 (3个Term)',
      valueProp: '全程参与公司真实项目，融入专业开发流程',
      target: '有明确职业/学术进阶兴趣的长期学习者，或未来的科技创业者',
      intro: '打破传统课堂界限。学生作为“实习工程师”加入实验室真实研发序列，在导师带领下参与面向市场的真实产品开发。',
      structure: [
        { label: 'Term 1', description: '基础技能补齐', steps: ['代码规范', 'Git协作', '测试'] },
        { label: 'Term 2', description: '真实项目实战协作', steps: ['子模块开发', '需求对齐', '评审'] },
        { label: 'Term 3', description: '独立负责功能模块', steps: ['架构设计', '优化', '发布'] }
      ],
      outputs: ['真实商业项目贡献记录', '行业大咖推荐信', '具备初级工程师全栈能力'],
      schedule: '每周 1 次线下深度交流 + 线上持续协作。参与真实的 Weekly Stand-up 和 Sprint Review。',
      images: ['https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800'],
      ctaLink: '#contact'
    }
  ],
  timeline: {
    nodes: [
      { label: 'L1: 入门体验', duration: '5小时', capability: '工具感知 & 信心建立', outcome: '最小原型', condition: '零基础可入' },
      { label: 'L2: 项目实战', duration: '30-60小时', capability: '独立解决问题 & 工程思维', outcome: '个人作品集', condition: '通过 L1 或基础评估' },
      { label: 'L3: 长期培养', duration: '12个月', capability: '团队协作 & 真实产品交付', outcome: '商业项目经验', condition: '通过面试评估' }
    ]
  },
  methodology: {
    title: '教学方式与支持',
    items: [
      { title: '导师线下指导', desc: '行业资深工程师手把手带教', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
      { title: '小班制教学', desc: '1:4以内 导师学生比，确保关注度', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
      { title: '项目定期评审', desc: '工业级评审标准，快速迭代反馈', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
      { title: '全时线上答疑', desc: '专属社区支持，问题不过夜', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
      { title: '学习资源库', desc: '内部技术沉淀与案例库永久访问', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
      { title: '专业工具支持', desc: '实验室级设备，最新开发套件', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' },
    ]
  },
  portfolio: [
    { id: 1, title: 'Smart Stackable Greenhouse', tags: ['Level 2', '3D Prototype', 'MicroPython'], description: '基于STEPico的多层只能温室', imageUrl: 'https://github.com/Terback/Images/blob/main/OfflineEIMAcademy/charles_upscale.jpg?raw=true' },
    { id: 2, title: 'ECG心跳检测仪器', tags: ['Level 2', 'Bio-Medical', 'MicroPython'], description: '通过模块连接以及编程做一款ECG心跳检测的仪器', imageUrl: 'https://github.com/Terback/Images/blob/main/OfflineEIMAcademy/eva_exp.png?raw=true' },
    { id: 3, title: 'IoT环境监测气象站', tags: ['Level 3', '物联网', 'ESP32'], description: '分布式传感器网络与实时可视化面板', imageUrl: 'https://github.com/Terback/Images/blob/main/OfflineEIMAcademy/IMG_1711.jpg?raw=true' },
    { id: 4, title: '智能农耕无人机', tags: ['Level 3', '硬件', 'IoT'], description: '无人机检测土壤指标反馈功能', imageUrl: 'https://github.com/Terback/Images/blob/main/OfflineEIMAcademy/linkedinPost1%20-%20Copy.jpg?raw=true' },
  ],
  audiences: [
    { type: '零基础初学者', benefits: ['快速获得技术初体验', '发现工程兴趣所在', '掌握实用的基础工具'] },
    { type: '进阶作品集创作者', benefits: ['产出高质量可展示项目', '建立系统的工程化思维', '获得专业导师背书'] },
    { type: '未来科技领袖', benefits: ['深入理解工程底层逻辑', '在真实研发团队中积累话语权', '打造跨学科的硬核履历'] },
  ],
  faqs: [
    { question: '参加 Level 1 需要基础吗？', answer: '不需要。Level 1 专门为零基础同学设计，我们会提供预置的工具环境，只要有好奇心即可。' },
    { question: '建议多大的年龄段参加？', answer: '我们的课程主要面向 12-22 岁的学生，内容会根据不同年龄段的认知水平进行适配调整。' },
    { question: '是否需要自带电脑？', answer: 'Level 1-3 我们建议携带，我们会协助安装环境。' },
  ],
  cta: {
    title: '开启你的工程师成长之旅',
    qrImage: 'https://github.com/Terback/Images/blob/main/OfflineEIMAcademy/Capture.PNG?raw=true',
    contact: '电话: 778-321-1369 | 微信: EIM_Technology'
  },
  footer: {
    about: 'EIM Academy 致力于打造最具活力的项目制工程学习社区，让每个孩子都能在真实项目中发现自己。',
    address: '180-6660 Graybar Rd, Richmond, BC',
    email: 'info@eimtechnology.com',
    social: [
      { platform: '微信公众号', url: '#' },
      { platform: 'Bilibili', url: '#' },
      { platform: 'LinkedIn', url: '#' },
    ]
  }
};
