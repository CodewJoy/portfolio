import { useTranslation } from "react-i18next";
import React from "react";
import styled from "styled-components";
import react_react_allocation from "../images/react_react_allocation_cmpt.png";
import threebox_earthquake from "../images/threebox_earthquake.png";
import mapbox_animation from "../images/mapbox_animation.png";
import mapbox_covid19 from "../images/mapbox_covid19.png";
import personal_blog from "../images/personal_blog.png";
import taiwan_nice_weather from "../images/taiwan_nice_weather.png";
import soul_fun from "../images/soul_fun.png";
import xml_diff from "../images/xml_diff.png";

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
  border: 1px solid gray;
  height: auto;
  width: 300px;
  text-align: center;
`;

const projects = [
  {
    name: "Realize XML diff viewer with React & TypeScript",
    pic: xml_diff,
    url: "https://github.com/CodewJoy/xml-diff",
  },
  {
    name: "Realize Room Allocation with Custom component in React & TypeScript",
    pic: react_react_allocation,
    url: "https://github.com/CodewJoy/react-room-allocation",
  },
  {
    name: "3D Map Data Visualization with Threebox",
    pic: threebox_earthquake,
    url: "https://github.com/CodewJoy/3d_map_data_visualization_threebox",
  },
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
