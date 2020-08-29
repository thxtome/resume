import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import cards from "./text/cards";
import Button from "./Button";
import { sendContactMessage } from "./api";
import SendEmailBtn from "./SendEmailBtn";

const StyledInnerView = styled.div`
  height: max-content;
  max-width: 78.57rem;
  min-width: 320px;
  margin: 0 auto 35rem;
`;

function InnerView({ maxIndex, goNextCard, currentIndex, setCurrentIndex }) {
  return (
    <StyledInnerView>
      {cards.map((card, index) => (
        <Card
          {...card}
          key={index}
          index={index + 1}
          maxIndex={maxIndex}
          goNextCard={goNextCard}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        ></Card>
      ))}
      {maxIndex === cards.length + 1 ? <SendEmailBtn /> : ""}
    </StyledInnerView>
  );
}

export default InnerView;
