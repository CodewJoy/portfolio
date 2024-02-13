import React from "react";
import styled from "styled-components";
import profilePic from "../images/profilePic.jpg";

const StyledWrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 25px;
  font-size: 26px;
`;
const StyledContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0 0 0;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const StyledProfile = styled.div`
  padding: 15px 15px 45px 15px;
  margin: 15px;
  border: 1px solid lightgray;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;
const StyledProfilePic = styled.img`
  width: 200px;
  height: 100%;
`;
const StyledCard = styled.div`
  max-width: 600px;
  border-radius: 4px;
  margin: 0 50px;
  border: 1px solid lightgray;
`;
const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  width: 100%;
  height: 30px;
  background: #f7f7f7;
  border-bottom: 1px solid lightgray;
  padding: 0 10px;
  border-radius: 4px 4px 0 0;
`;
const StyledIntro = styled.div`
  padding: 20px;
  font-size: 16px;
  text-align: left;
`;

const About = (props) => {
  const { transText } = props;

  return (
    <StyledWrapper>
      {transText.aboutMe}
      <StyledContentWrapper>
        <StyledProfile>
          <StyledProfilePic src={profilePic} alt="Avatar placeholder" />
        </StyledProfile>
        <StyledCard>
          <StyledCardHeader>🔴🟡🟢</StyledCardHeader>
          <StyledIntro>
            <h5>{transText.hi} :)</h5>
            <br />
            {transText.intro}
          </StyledIntro>
        </StyledCard>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default About;
