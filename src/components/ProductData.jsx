import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container=styled.div`
    column-gap: 30px;
    display: flex;
    flex-wrap: nowrap;
    box-shadow: 2px 4px 4px  grey;
    margin: 15px 15px;
`
const Wrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
`
const ImgContainer=styled.div`
cursor: pointer;
`
const Image=styled.img`
    object-fit: contain;
    width: 12rem;

`
const InfoContainer=styled.div`
padding-top: 0px;
display: flex;
flex-direction: column;
align-items: center;
`
const Title=styled.h1`
margin: 0px 0px;
font-size: 1em;
`
const Desc=styled.p`
padding-top: 0px;
font-size: 16px;
font-weight: 300;
`
const PriceContainer=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Price=styled.span`
font-size: 19px;
font-weight: 700;
color: red;
`
const Strike=styled.span`
font-size: 19px;
padding:10px;

`
const Off=styled.span`
color: red;
font-weight: 700;
`
const ProductData = ({item}) => {
  const navigate=useNavigate();
  return (
    <Container >
      <Wrapper>
         <ImgContainer onClick={()=>navigate('/product')}>
            <Image src={item.otherImages[0]}/>
         </ImgContainer>
         <InfoContainer>
            <Title>{item.name}</Title>
            <Desc>{item.description}</Desc>
            <PriceContainer>
                <Price>₹{item.finalPrice}</Price>
                <Strike>₹<strike>{item.strickPrice}</strike></Strike>
                <Off>{item.discount}% OFF</Off>
            </PriceContainer>
         </InfoContainer>

      </Wrapper>
    </Container>
  )
}

export default ProductData
