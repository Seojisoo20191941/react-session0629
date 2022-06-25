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

  const texts = ["멋쟁이사자처럼", "중앙대학교", "최고"];
  const textList = texts.map((text, index) => <div key={index}>{text}</div>);
  return (
    <>
      <StyledBox>{textList[0]}</StyledBox>
      <StyledBox>{textList[1]}</StyledBox>
      <StyledBox>{textList[2]}</StyledBox>
    </>
  );
}

export default Box;
