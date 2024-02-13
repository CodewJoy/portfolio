import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import react from "../images/react.svg";
import start from "../images/start.svg";

const StyledWrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 25px;
  font-size: 26px;
  background: #e9d5a1;
`;
const StyledTimelineWrapper = styled.div`
  width: 95%;
  padding: 20px 0 0 0;
`;
const StyledTimelineContent = styled.div`
  text-align: left;
  font-size: 18px;
`;
const StyledIcon = styled.img`
  width: 100%;
  padding: 5px;
  background: rgb(174, 148, 79);
  border-radius: 50%;
`;
const StyledSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 0;
  font-size: 12px;
`;
const StyledBadge = styled.div`
  width: fit-content;
  padding: 5px 10px;
  margin: 5px 5px 5px 0;
  border-radius: 10px;
  background: #f9f5e9;
`;
const experience = [
  {
    company: "Groundhog Technologies",
    title: "Frontend Web Developer",
    time: "2020.06 - Present",
    skill: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux Thunk",
      "Rematch",
      "styled-components",
      "SCSS",
      "Highcharts",
      "Mapbox",
      "AJAX",
      "Jest",
      "REST API",
      "GitLab",
      "Git",
    ],
  },
  {
    company: "AppWorks School",
    title: "Front-End Trainee",
    time: "2019.11 - 2020.04",
    skill: [
      "JavaScript",
      "React",
      "Material-UI",
      "Firebase",
      "GitHub",
      "Git",
      "Webpack",
      "Babel",
    ],
  },
];
const Experience = (props) => {
  const { transText } = props;
  const work = experience.map((item) => (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={item.time}
      icon={<StyledIcon src={react} alt="icon" />}
      key={item.company}
    >
      <StyledTimelineContent>
        <h3>{item.title}</h3>
        <div>{item.company}</div>
        <StyledSkill>
          {item.skill.map((s, i) => (
            <StyledBadge key={`${s}-${i}`}>{s}</StyledBadge>
          ))}
        </StyledSkill>
      </StyledTimelineContent>
    </VerticalTimelineElement>
  ));
  return (
    <StyledWrapper>
      {transText.experience}
      <StyledTimelineWrapper>
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            icon={<StyledIcon src={start} alt="icon" />}
          />
        </VerticalTimeline>
      </StyledTimelineWrapper>
    </StyledWrapper>
  );
};

export default Experience;
