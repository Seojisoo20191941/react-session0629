// import { Fragment } from "react";
import styled from "styled-components";
import data from "./data.json";
import "./Box.css";

function Box() {
  const StyledBox = styled.button`
    border: 1px solid orange;
    border-radius: 20px;
    width: 30vh;
    height: 30vh;
    font-size: 20px;
    background-color: white;
    overflow: hidden;
    margin: 2vh;
  `;
  const imgList = data.imgs.map((img, index) => (
    <div key={img.id}>{img.title}</div>
  ));
  const titleList = data.titles.map((title, index) => (
    <div key={title.id}>{title.title}</div>
  ));
  const addressList = data.addresses.map((address, index) => (
    <div key={address.id}>{address.address}</div>
  ));
  const pricesList = data.prices.map((price, index) => (
    <div key={price.id}>{price.price}</div>
  ));

  return (
    <>
      <StyledBox>
        {imgList[0]}
        {titleList[0]}
        {addressList[0]}
        {pricesList[0]}
      </StyledBox>
      <StyledBox>
        {titleList[1]}
        {addressList[1]}
        {pricesList[1]}
      </StyledBox>
      <StyledBox>
        {titleList[2]}
        {addressList[2]}
        {pricesList[2]}
      </StyledBox>
      <br />
      <StyledBox>
        {titleList[3]}
        {addressList[3]}
        {pricesList[3]}
      </StyledBox>
      <StyledBox>
        {titleList[4]}
        {addressList[4]}
        {pricesList[4]}
      </StyledBox>
      <StyledBox>
        {titleList[5]}
        {addressList[5]}
        {pricesList[5]}
      </StyledBox>
    </>
  );
}

export default Box;
