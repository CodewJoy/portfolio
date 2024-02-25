import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import laptop from "../images/laptop.svg";
import us from "../images/us.svg";
import taiwan from "../images/taiwan.svg";
import github from "../images/github.svg";
import leetcode from "../images/leetcode.svg";
import linkedin from "../images/linkedin.svg";

const StyledHeader = styled.div`
  width: 100%;
  background: #e9d5a1;
  text-align: center;
`;
const StyledLaptopIcon = styled.img`
  margin: 15px 0 0 0;
  width: 120px;
`;
const StyledLanIcon = styled.img`
  cursor: pointer;
  width: 60px;
  padding: 0 5px;
  margin: 5px;
  border-radius: 5px;
  background: ${(props) => (props.selected ? "rgba(0, 0, 0, 0.5)" : "unset")};
`;
const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 20px 0;
`;
const StyledIcon = styled.img`
  width: 30px;
  margin: 10px;
`;

const Header = (props) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [language, setLanguage] = useState(currentLanguage);

  // console.log("i18n", i18n);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { transText } = props;
  return (
    <StyledHeader>
      <StyledLaptopIcon src={laptop} alt="icon" />
      <br />
      <h1>{transText.name}</h1>
      <h2>{transText.job}</h2>
      <small>Contact: yichen.hung6699@gmail.com</small>
      <StyledIconWrapper>
        <a href="https://github.com/CodewJoy" target="_blank" rel="noreferrer">
          <StyledIcon src={github} alt="icon" />
        </a>
        <a
          href="https://leetcode.com/codewjoy/"
          target="_blank"
          rel="noreferrer"
        >
          <StyledIcon src={leetcode} alt="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/joy-h-0283ab5b/"
          target="_blank"
          rel="noreferrer"
        >
          <StyledIcon src={linkedin} alt="icon" />
        </a>
      </StyledIconWrapper>
      <StyledLanIcon
        src={us}
        alt="icon"
        selected={language === "en"}
        onClick={() => {
          changeLanguage("en");
          setLanguage("en");
        }}
      />
      <StyledLanIcon
        src={taiwan}
        alt="icon"
        selected={language === "ch"}
        onClick={() => {
          changeLanguage("ch");
          setLanguage("ch");
        }}
      />
    </StyledHeader>
  );
};

export default Header;
