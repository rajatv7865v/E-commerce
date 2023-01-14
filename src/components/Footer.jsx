import {  GitHub, Instagram, LinkedIn, Mail, Phone, Room } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../responsive'

const Container=styled.div`
display: flex;
background-color: white;
${Mobile({flexDirection:'column'})}

`
const Left=styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo=styled.h1`

`
const Desc=styled.p`
margin: 20px 0px;
`
const SocialContainer=styled.div`
display: flex;
`
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
`
const Center=styled.div`
flex: 1;
padding: 20px;
${Mobile({display:'none'})}

`
const Title=styled.h3`
margin-bottom: 30px;
`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right=styled.div`
flex: 1;
padding: 20px;
${Mobile({backgroundColor:'#eee'})}

`
const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment=styled.img`
width: 50%;

`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Rajat</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste facilis praesentium labore similique architecto?</Desc>
        <SocialContainer>
            <SocialIcon >
                <a href="https://www.instagram.com/mr__rajjo/" target='_blank' style={{color:'black'}}><Instagram/></a>
            </SocialIcon>
            <SocialIcon >
                <LinkedIn/>
            </SocialIcon>
            <SocialIcon >
                <GitHub/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Whislist</ListItem>
            <ListItem>Terms</ListItem>

        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
           <Room style={{marginRight:'10px'}}/> 32A Shahjahanpur road, Bareilly
        </ContactItem>
        <ContactItem>
           <Phone style={{marginRight:'10px'}}/> +91 9794939976
        </ContactItem>
        <ContactItem>
         <Mail style={{marginRight:'10px'}}/> rajatv785v@gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
      </Right>
      
    </Container>
  )
}

export default Footer
