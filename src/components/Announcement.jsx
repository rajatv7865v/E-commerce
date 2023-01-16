import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 38px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
`;
const Announcement = () => {
  return <Container>Super Deal! Go Order Now...!</Container>;
};

export default Announcement;
