import React from "react";
import ProductItem from "../components/ProductItem";
import useGetProducts from "../hooks/useGetProducts";
import "../styles/ProductList.scss";

const API = 'https://api.escuelajs.co/api/v1/products?limit=50&offset=0'

const ProductList = () => {
  const products = useGetProducts(API)

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(item => <ProductItem product={item} key={item.id}/>)}
      </div>
    </section>
  );
};

export default ProductList;
