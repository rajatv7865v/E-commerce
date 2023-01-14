import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Mobile } from '../responsive'

const Container=styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image=styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${Mobile({height:'30vh'})}


`
const Info=styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title=styled.h1`
color: white;
margin: 20px;
`
const Button=styled.button`
border: none;
padding: 10px;
background-color: white;
cursor: pointer;
color: gray;
font-weight: 600;
`
const CategoryItem = ({item}) => {
  const navigate=useNavigate()
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={()=>navigate('/productList')}>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
