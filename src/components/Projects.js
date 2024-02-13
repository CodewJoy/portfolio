import { useTranslation } from "react-i18next";
import React from "react";
import styled from "styled-components";
import mapbox_animation from "../images/mapbox_animation.png";
import mapbox_covid19 from "../images/mapbox_covid19.png";
import personal_blog from "../images/personal_blog.png";
import taiwan_nice_weather from "../images/taiwan_nice_weather.png";
import soul_fun from "../images/soul_fun.png";

const StyledWrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 25px;
  font-size: 26px;
`;
const StyledProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0 0 0;
  font-size: 20px;
`;
const StyledProject = styled.div`
  max-width: 320px;
  padding: 10px;
  margin: 12px;
  border: 1px solid lightgray;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;
const StyledPic = styled.img`
  height: auto;
  width: 300px;
  text-align: center;
`;

const projects = [
  {
    name: "Map Animation with Mapbox",
    pic: mapbox_animation,
    url: "https://github.com/CodewJoy/mapbox_animation",
  },
  {
    name: "Markdown Blog with Next.js",
    pic: personal_blog,
    url: "https://github.com/CodewJoy/next-markdown-blog",
  },
  {
    name: "Realtime Weather App with React Hooks",
    pic: taiwan_nice_weather,
    url: "https://github.com/CodewJoy/realtime-weather-app",
  },
  {
    name: "COVID-19 map with React and Mapbox",
    pic: mapbox_covid19,
    url: "https://github.com/CodewJoy/covid-19_mapbox",
  },
  {
    name: "Social Web App with React",
    pic: soul_fun,
    url: "https://github.com/CodewJoy/soul_fun",
  },
];
const Projects = (props) => {
  const { t } = useTranslation();
  const { transText } = props;

  return (
    <StyledWrapper>
      {transText.projects}
      <StyledProjectWrapper>
        {projects.map((el) => (
          <StyledProject key={el.name}>
            <a href={el.url} target="_blank" rel="noreferrer">
              <StyledPic src={el.pic} alt="project" />
            </a>
            <p>{t(el.name)}</p>
          </StyledProject>
        ))}
      </StyledProjectWrapper>
    </StyledWrapper>
  );
};

export default Projects;
