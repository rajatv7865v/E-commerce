import React from "react";
import styled from "styled-components";

import ProductData from "./ProductData";
import { useContext } from "react";
import appContext from "../Context/appContext";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 2;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  margin: 20px 20px;
  padding: 20px 10px;
  padding-bottom: 10%;
`;
const ProductsData = () => {
  const productContext = useContext(appContext);
  const { product,  filter } = productContext;

  return (
    <Container>
      <Wrapper>
        {filter.length > 0
          ? filter.map((item, id) => {
              return <ProductData item={item} key={id} />;
            })
          : product.map((item, id) => {
              return <ProductData item={item} key={id} />;
            })}
      </Wrapper>
    </Container>
  );
};

export default ProductsData;
