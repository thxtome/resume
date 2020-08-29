import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  background-color: rgb(250, 198, 9);
  width: ${(props) => `${props.size.width}rem`};
  height: ${(props) => `${props.size.height}rem`};
  font-size: ${(props) => (props.size.width > 10 ? props.theme.fontSize.contentTitle : props.theme.fontSize.label)};
  font-weight: bold;
  margin-top: ${(props) => `${props.size.height}rem`};
`;

function Button({ text, onclick, children, ...rest }) {
  return (
    <StyledButton {...rest} type={"button"} onClick={onclick}>
      {children}
    </StyledButton>
  );
}

export default Button;
