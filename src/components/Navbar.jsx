import { Search } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Mobile} from '../responsive'

const Container=styled.div`
    height: 65px;
    ${Mobile({height:'50px'})}
`
const Wrapper=styled.div`
   padding: 0px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   ${Mobile({padding:'10px 0px'})}

` 
const Left=styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language=styled.span`
font-size: 14px;
cursor: pointer;
${Mobile({display:'none'})}

`
const SearchContainer=styled.div`
border: 1px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input=styled.input`
border: none;
${Mobile({width:'50px'})}

`
const Center=styled.div`
flex: 1;
text-align: center;

`
const Logo=styled.h1`
font-weight: 700;
${Mobile({fontSize:'24px'})}

`
const Right=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${Mobile({flex:2,justifyContent:'center'})}

`
const MenuItem=styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${Mobile({fontSize:'12px',marginLeft:'10px'})}

`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search style={{color:'grey'}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>Rajat</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <Badge badgeContent={1} color="primary">
      <ShoppingCartOutlinedIcon/>
    </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
