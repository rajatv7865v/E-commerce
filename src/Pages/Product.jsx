import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import { Mobile } from '../responsive'

const Container=styled.div`

`
const Wrapper =styled.div`
padding: 50px;
display: flex;
${Mobile({padding:'10px',flexDirection:'column'})}
`
const ImgContainer=styled.div`
flex: 1;
`
const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${Mobile({height:'40vh'})}

`

const InfoContainer=styled.div`
flex: 1;
padding: 0px 50px;
${Mobile({padding:'10px'})}

`
const Title=styled.h1`
font-weight: 200;
`
const Desc=styled.p`
margin: 20px 0px;
`
const Price =styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer =styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${Mobile({width:'100%'})}

`
const Filter =styled.div`
display: flex;
align-items: center;
`
const FilterTitle =styled.span`
font-size: 20px;
font-weight: 200;
padding-right:10px ;

`
const FilterColor =styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
margin: 0px 5px;
cursor: pointer;
`
const FilterSize =styled.select`
cursor: pointer;
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption=styled.option`

`
const AddContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${Mobile({width:'100%'})}

`
const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight: 700;
cursor: pointer;
`
const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content:center;
margin: 0px 5px;
`
const Button=styled.button`
cursor: pointer;
padding: 15px;
border: 2px solid teal;
background-color: white;
font-weight: 600;
&:hover{
    background-color: teal;
    box-shadow: 2px 6px 2px grey;
}
`
const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
            <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
        </ImgContainer>
        <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus at eos earum vero vel quibusdam?</Desc>
            <Price>$ 20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color:</FilterTitle>
                    <FilterColor  style={{background:'black'}}/>
                    <FilterColor style={{background:'blue'}}/>
                    <FilterColor style={{background:'grey'}}/>

                </Filter>
                <Filter>
                    <FilterTitle>Size:</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Product
