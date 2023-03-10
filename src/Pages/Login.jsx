import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Mobile } from "../responsive";




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${Mobile({width:'75%'})}
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  text-decoration: none;
`;

const Link = styled(NavLink)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [user,setUser]=useState();
  const [pass,setPass]=useState();
  console.log("user",user)
  console.log("pass",pass)
  const submitHandle=()=>{
    console.log('clicked')
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form >
          <Input type='text' placeholder="username" onChange={(e)=>setUser(e.target.value)} />
          <Input type='password' placeholder="password" onChange={(e)=>setPass(e.target.value)}/>
          <NavLink to='/greet/:1'>
          <Button onSubmit={submitHandle} >LOGIN</Button>
          </NavLink>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link to='/register'>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;