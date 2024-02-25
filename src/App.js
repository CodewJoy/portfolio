import styled from "styled-components";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link, Element } from "react-scroll";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const StyledTop = styled.div`
  // position: fixed;
  display: flex;
  height: 40px;
  width: 100%;
  color: white;
  background: black;
  justify-content: flex-end;
  align-items: center;
`;
const StyledTopText = styled.span`
  margin: 10px;
  cursor: pointer;
`;
const StyledBlogLink = styled.a`
  color: white;
  text-decoration: unset;
`;
const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  color: white;
  background: black;
`;

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <StyledTop>
        <Link to="about" spy={true} smooth={true} duration={500}>
          <StyledTopText>{t("About")}</StyledTopText>|
        </Link>
        <Link to="experience" spy={true} smooth={true} duration={500}>
          <StyledTopText>{t("Experience")}</StyledTopText>|
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          <StyledTopText>{t("Projects")}</StyledTopText>|
        </Link>
        <StyledTopText>
          <StyledBlogLink
            href="https://code-to-joy-blog.vercel.app/"
            target="_blank"
          >
            {t("Blog")}
          </StyledBlogLink>
        </StyledTopText>
      </StyledTop>
      <Header transText={{ name: t("Name"), job: t("Job") }} />
      <Element name="about">
        <About
          transText={{
            aboutMe: t("AboutMe"),
            hi: t("Hi"),
            intro: t("Intro"),
          }}
        />
      </Element>
      <Element name="experience">
        <Experience
          transText={{
            experience: t("Experience"),
          }}
        />
      </Element>
      <Element name="projects">
        <Projects
          transText={{
            projects: t("Projects"),
          }}
        />
      </Element>
      {/* <Trans>
          To get started, edit <code>src/App.js</code> and save to reload.
      </Trans> */}
      <StyledFooter>
        <small>Copyright &copy; Joy Hung</small>
      </StyledFooter>
    </div>
  );
}

export default App;
