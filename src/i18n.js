import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
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
            "👋  Hello! I'm Joy Hung, a front-end professional with over 3 years of experience. Familiar with HTML, CSS, JavaSript, TypeScript, React and Redux. Love to study how different technologies are implemented. Aim to be a problem-solver willing to do cross-functional communication. 💜",
          "Map Animation with Mapbox": "Map Animation with Mapbox",
          "Markdown Blog with Next.js": "Markdown Blog with Next.js",
          "Realtime Weather App with React Hooks":
            "Realtime Weather App with React Hooks",
          "COVID-19 map with React and Mapbox":
            "COVID-19 map with React and Mapbox",
          "Social Web App with React": "Social Web App with React",
        },
      },
      ch: {
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
            "👋 你好。我是洪以真，一名有超過3年經驗的前端工程師。熟悉 HTML，CSS，JavaSript，TypeScript，React 與 Redux。喜歡研究不同前端應用使用的技術，樂意與不同部門溝通並解決問題 💜",
          "Map Animation with Mapbox": "使用 Mapbox 製作地圖動畫",
          "Markdown Blog with Next.js": "使用 Next.js 製作 Markdown 部落格",
          "Realtime Weather App with React Hooks":
            "使用 React Hooks 製作即時天氣應用程式",
          "COVID-19 map with React and Mapbox":
            "使用 React 和 Mapbox 製作 COVID-19 地圖",
          "Social Web App with React": "使用 React 製作交友網站應用程式",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
