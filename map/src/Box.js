// import { Fragment } from "react";
import styled from "styled-components";

function Box() {
  const StyledBox = styled.button`
    border: 1px solid orange;
    width: 30vh;
    height: 30vh;
    font-size: 20px;
    background-color: white;
  `;

  const text = ["멋쟁이사자처럼", "중앙대학교", "최고"];
  return text.map((t, i) => <StyledBox key={i}>{t}</StyledBox>);
}

export default Box;
