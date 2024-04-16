// import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [productsList, setProductsList] = useState([]);

  const getProducts = async () => {
    const url = 'https://my-json-server.typicode.com/kkaminipin/H-M/products';
    const response = await fetch(url);
    const data = await response.json();
    setProductsList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>상품들 소개</h1>
      <ul>
        {productsList.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`${product.id}`}>
                <div>
                  <h3>{product.title}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
