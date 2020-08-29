import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import cards from "./text/cards";
import Button from "./Button";
import { sendContactMessage } from "./api";
import SendEmailBtn from "./SendEmailBtn";

const StyledInnerView = styled.div`
  width: 100%;
  height: max-content;
  width: 78.57rem;
  margin: 0 auto 35rem;
`;

const SubmitBtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Loadingdiv = styled.div`
  display: flex;
  justify-content: center;
`;

function InnerView({ maxIndex, goNextCard, currentIndex, setCurrentIndex }) {
  const [isLoading, setIsLoading] = useState(false);
  const sendMessage = async () => {
    setIsLoading(true);
    const result = await sendContactMessage();
    setIsLoading(false);
  };
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
