import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const EN = "en";
export const ZH = "zh";

type TranslationKeys = typeof EN | typeof ZH;

interface Resources {
  [key: string]: {
    translations: Record<string, string>;
  };
}

const resources: Resources = {
  [EN]: {
    translations: {
      "To get started, edit <1>src/App.js</1> and save to reload.":
        "To get started, edit <1>src/App.js</1> and save to reload.",
      "Welcome to React": "Welcome to React and react-i18next",
      Name: "Joy Hung",
      Job: "Front-End Developer",
      About: "About",
      Experience: "Experience",
      Projects: "Projects",
      Blog: "Blog",
      AboutMe: "ABOUT ME",
      Hi: "Hi",
      Intro:
        "👋  Hello! I'm Joy Hung, a front-end professional with 5+ years of experience. Familiar with HTML, CSS, JavaSript, TypeScript, React and Redux. Love to study how different technologies are implemented. Aim to be a problem-solver willing to do cross-functional communication. 💜",
      "Map Animation with Mapbox": "Map Animation with Mapbox",
      "Markdown Blog with Next.js": "Markdown Blog with Next.js",
      "Realtime Weather App with React Hooks":
        "Realtime Weather App with React Hooks",
      "COVID-19 map with React and Mapbox":
        "COVID-19 map with React and Mapbox",
      "Social Web App with React": "Social Web App with React",
      "Realize Room Allocation with Custom component in React & TypeScript":
        "Realize Room Allocation with Custom component in React & TypeScript",
      "Realize XML diff viewer with React & TypeScript":
        "Realize XML diff viewer with React & TypeScript",
      "Full-Stack Recipe Management App with Next.js and SQLite":
        "Full-Stack Recipe Management App with Next.js and SQLite",
      "Full-Stack Event Registration System with Next.js and PostgreSQL":
        "Full-Stack Event Registration System with Next.js and PostgreSQL",
    },
  },
  [ZH]: {
    translations: {
      "To get started, edit <1>src/App.js</1> and save to reload.":
        "Starte in dem du, <1>src/App.js</1> editierst und speicherst.",
      Name: "洪以真",
      Job: "前端工程師",
      About: "關於",
      Experience: "學經歷",
      Projects: "作品專案",
      Blog: "部落格",
      AboutMe: "關於我",
      Hi: "嗨",
      Intro:
        "👋 你好。我是洪以真，一個有 5+ 年經驗的前端工程師。熟悉 HTML，CSS，JavaSript，TypeScript，React 與 Redux。喜歡研究不同前端應用技術，樂意與不同部門溝通並解決問題 💜",
      "3D Map Data Visualization with Threebox":
        "使用 Threebox 製作 3D 地圖資料視覺化",
      "Map Animation with Mapbox": "使用 Mapbox 製作地圖動畫",
      "Markdown Blog with Next.js": "使用 Next.js 製作 Markdown 部落格",
      "Realtime Weather App with React Hooks":
        "使用 React Hooks 製作即時天氣應用程式",
      "COVID-19 map with React and Mapbox":
        "使用 React 和 Mapbox 製作 COVID-19 地圖",
      "Social Web App with React": "使用 React 製作交友網站應用程式",
      "Realize Room Allocation with Custom component in React & TypeScript":
        "用 React 與 TypeScript 實作自訂元件與最佳房間分配",
      "Realize XML diff viewer with React & TypeScript":
        "用 React 與 TypeScript 中實現 XML 差異比較",
      "Full-Stack Recipe Management App with Next.js and SQLite":
        "使用 Next.js 和 SQLite 開發的全端食譜管理應用",
      "Full-Stack Event Registration System with Next.js and PostgreSQL":
        "使用 Next.js 和 PostgreSQL 開發的全端活動報名系統",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: EN,
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
