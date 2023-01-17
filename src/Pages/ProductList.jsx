import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import ProductsData from "../components/ProductsData";
import { Mobile } from "../responsive";
import { useContext } from "react";
import appContext from "../Context/appContext";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${Mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${Mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 8px;
  margin-right: 20px;
  ${Mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const ProductList = () => {
  const productContext = useContext(appContext);
  const { product, setFilter } = productContext;

  const sorting = (e) => {
    console.log(e)
    if (e === "asc") {
      let data = product.sort((a, b) => {
        return a.finalPrice - b.finalPrice;
      });
      setFilter(data);
    }
    if (e === "dec") {
    
      let data = product.sort((a, b) => {
        return b.finalPrice - a.finalPrice;
      });
      setFilter(data);
    }
  };


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select
            onChange={(e) => {
              setFilter(
                product.filter(
                  (item) => item.cat === (e.target.value === "White" ? "W" : "")
                )
              );
            }}
          >
            <Option disabled selected>
              Categories
            </Option>
            <Option>White</Option>
            <Option>Folded Sleeves</Option>
          </Select>
          <Select
            onChange={(e) => {
              setFilter(
                product.filter(
                  (item) =>
                    item.gender === (e.target.value === "Male" ? "M" : "F")
                )
              );
            }}
          >
            <Option disabled selected>
              GENDER
            </Option>
            <Option>Male</Option>
            <Option>Female</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => sorting(e.target.value)} >
            <Option disabled selected>
              Newest
            </Option>
            <Option value="asc">Price: Low to High</Option>
            <Option value="dec">Price: High to Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductsData />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
