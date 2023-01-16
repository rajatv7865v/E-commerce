import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Mobile } from "../responsive";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import appContext from "../Context/appContext";

const Container = styled.div`
  height: 65px;
  ${Mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${Mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${Mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  ${Mobile({ fontSize: "24px" })}
  &:hover {
    color: green;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${Mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 25px;
  ${Mobile({ fontSize: "12px", marginLeft: "10px" })}
  text-decoration: none;
  color: black;
  &:hover {
    color: green;
  }
  &.active {
    color: red;
  }
`;
const Navbar = () => {
  const productContext = useContext(appContext);
  const { cartItem } = productContext;
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search Product" />
            <Search style={{ color: "grey" }} />
          </SearchContainer>
        </Left>
        <Center>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Logo style={{ color: "black" }}>CLASSIC STORE</Logo>
          </NavLink>
        </Center>
        <Right>
          <MenuItem to="/register">REGISTER</MenuItem>
          <MenuItem to="/login">SIGN IN</MenuItem>
          <MenuItem to="/cart">
            <Badge badgeContent={`${cartItem.length}`} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
