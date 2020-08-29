import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledCard = styled.div`
  position: relative;
  display: ${(props) => props.display};
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  background-color: #fff;
  min-height: 14.786rem;
  box-shadow: 0 0 10px #e0d8cd;
  border-radius: 10px;
  padding: 42px 70px;
  box-sizing: border-box;
  border: ${(props) => (props.isFocused ? "1.5px solid #59c4db" : "")};
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 1.2rem;
`;

const AnswerNumber = styled.span`
  color: #f2ab27;
  font-size: 20px;
  line-height: 1;
`;

const StyledTitle = styled.span`
  white-space: normal;
  display: block;
  overflow-wrap: break-word;
  line-height: 1;
  min-height: 3rem;
  width: 100%;
  font-family: "Noto Sans KR Medium";
  padding-top: -0.1rem;
  margin: 0 0 0 0.5rem;
  font-size: ${(props) => props.theme.fontSize.contentTitle};
`;

const StyledContent = styled.p`
  display: block;
  overflow-wrap: break-word;
  line-height: 1.4;
  width: 100%;
  font-family: "Noto Sans KR Medium";
  font-size: ${(props) => props.theme.fontSize.label};
`;

function Card({
  title,
  content,
  link,
  index,
  maxIndex,
  goNextCard,
  currentIndex,
  setCurrentIndex,
}) {
  const isLast = () => index === maxIndex;
  const cardRef = useRef();

  const clickHandler = () => {
    setCurrentIndex(index);
  };

  const moveTo = () => {
    const height = window.innerHeight;
    window.scrollTo({
      top: cardRef.current.offsetTop - height / 3,
      left: 0,
      behavior: "smooth",
    });
  };

  const isFocused = index === currentIndex;

  useEffect(() => {
    if (!isFocused) {
      return;
    }
    moveTo();
  });

  return (
    <StyledCard
      isFocused={isFocused}
      ref={cardRef}
      display={index <= maxIndex ? "flex" : "none"}
      onClickCapture={clickHandler}
    >
      <StyledTitleContainer>
        <AnswerNumber>N{index}.</AnswerNumber>
        <StyledTitle>{title}</StyledTitle>
      </StyledTitleContainer>
      {link ? (
        <a href={link} target={"_blank"}>
          웹 포트폴리오
        </a>
      ) : (
        ""
      )}
      <StyledContent>
        {content.map((text, index) => {
          return (
            <span key={index}>
              {text}
              <br />
            </span>
          );
        })}
      </StyledContent>
      {isLast() ? (
        <Button
          size={{ width: 8.5, height: 3.4 }}
          text={"다음"}
          onclick={goNextCard}
        >
          다음 보기
        </Button>
      ) : (
        ""
      )}
    </StyledCard>
  );
}

export default Card;
