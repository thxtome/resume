import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { sendContactMessage } from "./api";
import loadingGif from "./gif/loading.gif";

const SubmitBtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Loadingdiv = styled.div`
  display: flex;
  justify-content: center;
`;

function SendEmailBtn() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);
  const sendMessage = async () => {
    setIsLoading(true);
    try {
      const result = await sendContactMessage();
      setIsSended(true);
      alert("감사합니다.");
    } catch (error) {
      alert("오류로 인해 전송에 실패했습니다.");
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <Loadingdiv>
          <img src={loadingGif}></img>
        </Loadingdiv>
      ) : isSended ? (
        ""
      ) : (
        <SubmitBtnContainer>
          <Button size={{ width: 13.5, height: 5.2 }} onclick={sendMessage}>
            서류 합격
          </Button>
        </SubmitBtnContainer>
      )}
    </>
  );
}

export default SendEmailBtn;
