// import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});

  const loginStatus = useSelector((state) => state.loginStatus);

  const getProdouctDetail = async () => {
    const url = `https://my-json-server.typicode.com/kkaminipin/H-M/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductDetail(data);
  };

  useEffect(() => {
    getProdouctDetail();
  }, []);

  return loginStatus ? (
    <div>
      <h1>상세보기 페이지입니다.</h1>
      <h3>{productDetail.title}</h3>
      <img src={productDetail.img} alt={productDetail.title} />
      <p>가격 : {productDetail.price}</p>
    </div>
  ) : (
    <Navigate to='/login' />
  );
};

export default ProductDetail;
