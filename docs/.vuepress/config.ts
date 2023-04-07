import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import { codeBlockPlugin } from '@yanyu-fe/vuepress-plugin-code-block';
// import { sear } from "@vuepress/plugin-search";
import * as navbar from './configs/navbar';
import * as sidebar from './configs/sidebar';
import path from "path";

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'tuge-ui',
  description: '这是我的第一个 VuePress 站点',
  plugins: [
    codeBlockPlugin({}),
    // searchPlugin({
    // locales: {
    //   "/": {
    //     placeholder: "搜索",
    //   },
    // },
    // })
  ],
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          "@tuge-ui/comps": path.resolve(__dirname, "../../packages/components/src"),
          "@tuge-ui/theme-chalk": path.resolve(__dirname, "../../packages/theme-chalk")
        }
      }
    }
  }),
  theme: defaultTheme({
    logo: "https://oss.tuge7025.com/images/favicon.ico",
    lastUpdatedText: "最后更新时间",
    contributorsText: "贡献者",
    locales: {
      "/": {
        navbar: navbar.zh,
        sidebar: sidebar.zh
      }
    }
  }),
  
})