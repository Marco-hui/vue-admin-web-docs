var nav = require('./nav.js')
var { EcosystemNav, ComponentNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'vue-admin-web',
  description: 'A magical vue admin',
  base: '/vue-admin-web-docs/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  port: 9093,
  themeConfig: {
    // logo: '/home.png',
    repo: 'Marco-hui/vue-admin-web',
    docsRepo: 'Marco-hui/vue-admin-web-docs',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 2,
    displayAllHeaders: false,
    smoothScroll: true,
    algolia: {
      apiKey: 'ffce0083d0830de5f562c045a481410b',
      indexName: 'vue_element_admin'
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Features',
            items: genNav(deepClone(ComponentNav), 'EN')
          },
          {
            text: 'Ecosystem',
            items: genNav(deepClone(EcosystemNav), 'EN')
          },
          {
            text: 'Donate',
            link: '/donate/'
          },
          {
            text: '中文站点(gitee)',
            link: 'https://Marco-hui.gitee.io/vue-admin-web-docs/zh/'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Essentials',
              collapsable: false,
              children: genEssentialsSidebar()
            },
            {
              title: 'Advanced',
              collapsable: false,
              children: genAdvancedSidebar()
            },
            {
              title: 'Other',
              collapsable: false,
              children: [
                '/guide/other/gitter.md',
                '/guide/other/release-notes.md'
              ]
            }
          ],
          '/feature/': [
            {
              title: 'Component',
              children: getComponentSidebar(
                deepClone(ComponentNav),
                'EN'
              ),
            },
            {
              title: 'Script',
              collapsable: false,
              children: [
                '/feature/script/svgo.md',
                '/feature/script/new.md'
              ]
            }
          ]
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '功能',
            items: genNav(deepClone(ComponentNav), 'ZH')
          },
          {
            text: '生态系统',
            items: genNav(deepClone(EcosystemNav), 'ZH')
          },
          {
            text: '捐赠',
            link: '/zh/donate/'
          },
          {
            text: '中文站点(gitee)',
            link: 'https://Marco-hui.gitee.io/vue-admin-web-docs/zh/'
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '基础',
              collapsable: true,
              children: genEssentialsSidebar('/zh')
            },
            {
              title: '进阶',
              collapsable: true,
              children: genAdvancedSidebar('/zh')
            },
            {
              title: '其它',
              collapsable: false,
              children: [
                '/zh/guide/other/faq.md',
                '/zh/guide/other/release-notes.md'
              ]
            }
          ],
          '/zh/feature/': [
            {
              title: '组件',
              children: getComponentSidebar(
                deepClone(ComponentNav),
                'ZH'
              ),
            },
            {
              title: '脚本',
              collapsable: false,
              children: [
                '/zh/feature/script/svgo.md',
                '/zh/feature/script/new.md'
              ]
            }
          ]
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      description: 'A magical vue admin'
    },
    '/zh/': {
      lang: 'zh-CN',
      description: '一个多功能化的vue后台'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  plugins: ['@vuepress/back-to-top'],
  ga: 'UA-109340118-1'
}

function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/guide/',
    '/guide/essentials/layout.md',
    '/guide/essentials/router-and-nav.md',
    '/guide/essentials/permission.md',
    '/guide/essentials/tags-view.md',
    '/guide/essentials/new-page.md',
    '/guide/essentials/style.md',
    '/guide/essentials/server.md',
    '/guide/essentials/mock-api.md',
    '/guide/essentials/import.md',
    '/guide/essentials/deploy.md',
    '/guide/essentials/env.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genAdvancedSidebar(type = '') {
  const mapArr = [
    '/guide/advanced/cors.md',
    '/guide/advanced/eslint.md',
    '/guide/advanced/git-hook.md',
    '/guide/advanced/style-guide.md',
    '/guide/advanced/lazy-loading.md',
    '/guide/advanced/chart.md',
    '/guide/advanced/icon.md',
    '/guide/advanced/cdn.md',
    '/guide/advanced/theme.md',
    '/guide/advanced/i18n.md',
    '/guide/advanced/error.md',
    '/guide/advanced/webpack.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
