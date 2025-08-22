import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import laptop from "../images/laptop.svg";
import us from "../images/us.svg";
import taiwan from "../images/taiwan.svg";
import github from "../images/github.svg";
import leetcode from "../images/leetcode.svg";
import linkedin from "../images/linkedin.svg";
import { EN, ZH } from "../i18n";

interface HeaderProps {
  transText: {
    name: string;
    job: string;
  };
}

const StyledHeader = styled.div`
  width: 100%;
  background: #e9d5a1;
  text-align: center;
`;
const StyledLaptopIcon = styled.img`
  margin: 15px 0 0 0;
  width: 120px;
`;
const StyledLanIcon = styled.img<{ selected: boolean }>`
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

const Header: React.FC<HeaderProps> = (props) => {
  const { transText } = props;
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isZH = currentLanguage.includes(ZH);
  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, [i18n]);

  useEffect(() => {
    if (isZH) {
      i18n.changeLanguage(ZH);
    } else {
      changeLanguage(EN);
    }
  }, [isZH,  i18n]);

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
        selected={!isZH}
        onClick={() =>  changeLanguage(EN)}
      />
      <StyledLanIcon
        src={taiwan}
        alt="icon"
        selected={isZH}
        onClick={() => changeLanguage(ZH)}
      />
    </StyledHeader>
  );
};

export default Header;
