import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import StartPage from "./StartPage";
import InnerView from "./InnerView";

const StyledResume = styled.div`
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background: #f6f3ee;
  overflow: hidden !important;
`;

const StyledContentStart = styled.div`
  margin-bottom: 9.825rem;
`;

function Resume() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(1);
  const resumeRef = useRef();

  const upCurrentIndex = (index, maxIndex) => {
    setCurrentIndex(minMaxChk(index + 1, maxIndex));
  };

  const downCurrentIndex = (index, maxIndex) => {
    setCurrentIndex(minMaxChk(index - 1, maxIndex));
  };

  const getStart = () => {
    setCurrentIndex(0);
    setTimeout(() => {
      setCurrentIndex(1);
    }, 10);
  };

  const goNextCard = () => {
    setMaxIndex(maxIndex + 1);
    setCurrentIndex(maxIndex + 1);
  };

  const minMaxChk = (nextIndex, maxIndex) => {
    if (nextIndex > maxIndex) {
      return maxIndex;
    } else if (nextIndex < 0) {
      return 0;
    }
    return nextIndex;
  };

  const keyDownHandler = (e) => {
    if (!(e.keyCode === 40 || e.keyCode === 38)) {
      return;
    }

    e.preventDefault();
    if (e.keyCode === 38) {
      downCurrentIndex(currentIndex, maxIndex);
    }

    if (e.keyCode === 40) {
      upCurrentIndex(currentIndex, maxIndex);
    }
  };

  useEffect(() => {
    resumeRef.current.focus();
    if (currentIndex === 0) {
      moveTo();
    }
  }, [currentIndex]);

  const moveTo = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledResume ref={resumeRef} tabIndex={0} onKeyDown={keyDownHandler}>
      <StartPage getStart={getStart} />
      <StyledContentStart />
      <InnerView
        maxIndex={maxIndex}
        setMaxIndex={setMaxIndex}
        goNextCard={goNextCard}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      ></InnerView>
    </StyledResume>
  );
}

export default Resume;
