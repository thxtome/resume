import React, { memo } from "react";
import styled from "styled-components";
import backgroundSvg from "./svg/pocketsurvey.svg";
import logoSvg from "./svg/logo.svg";
import Button from "./Button";
const StyledStartPage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundSvg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledInnerContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 820px;
  height: 320px;
  min-width: 320px;
  min-height: 330px;
  padding: 10px;
  box-sizing: border-box;
`;

const StyledTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.title};
`;

const StyledLogo = styled.img`
  width: 288px;
`;

const StyledDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.description};
  line-height: 22px;
  max-height: 10rem;
  white-space: pre-line;
  overflow-y: scroll;
  font-family: "Noto Sans KR Medium";
`;

function StartPage({ getStart }) {
  return (
    <StyledStartPage>
      <StyledInnerContent>
        <StyledLogo src={logoSvg}></StyledLogo>
        <StyledTitle>얼리슬로스 입사 지원서</StyledTitle>
        <StyledDescription>
          2020년 하반기 얼리슬로스 공개 채용에 지원하는 지원서입니다.
          <br />
          <br />
          저의 B급 감성과 회사에 입사하고 싶은 열정을 잘 전달하기 위해 작성되었습니다.
          <br />
          <br />본 페이지는 입사지원의 목적 외엔 아무것도 없습니다.
        </StyledDescription>
        <Button size={{ width: 13.5, height: 5.2 }} onclick={getStart}>
          지원서 보기
        </Button>
      </StyledInnerContent>
    </StyledStartPage>
  );
}

export default memo(StartPage);
