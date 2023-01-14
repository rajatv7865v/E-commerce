import React from 'react'
import styled from 'styled-components'
import Announcement from './Announcement'
import Footer from './Footer'
import Navbar from './Navbar'
import NewsLetter from './NewsLetter'
import ProductData from './ProductData'
import {data} from '../data'

const Container=styled.div`

`
const Wrapper=styled.div`
display: flex;
flex-wrap: wrap;
flex: 2;
justify-content: center;
grid-template-columns: repeat(4,1fr);
margin: 20px 20px;
padding: 20px 10px;
padding-bottom: 10%;
`
const ProductsData = () => {
  return (
    <Container>
      <Wrapper>
       {
        data.map((item,id)=>(
          <ProductData item={item} key={id}/>
        ))
       }
      </Wrapper>
    </Container>
  )
}

export default ProductsData
