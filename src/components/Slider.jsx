import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { sliderItems } from "../data";
import { Mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${Mobile({display:'none'})}

`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex* -99}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 99vw;
  height: 100vh;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 78px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  &:hover{
    background-color: teal;
    box-shadow: 2px 4px 6px grey;
  }
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate=useNavigate();
  const clickHandler = (dir) => {
   if(dir==='left'){
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
   }
   else{
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
   }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => clickHandler("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide style={{backgroundColor:item.bg}} key={item.id}>
              <ImgContainer>
                <Image src={item.image} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button onClick={()=>navigate('/productList')}>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => clickHandler("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
