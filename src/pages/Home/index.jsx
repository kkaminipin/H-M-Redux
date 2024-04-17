// import React from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.loginStatus);
  const loginInfo = useSelector((state) => state.loginInfo);

  const logout = () => {
    dispatch({ type: '로그인 상태', payload: false });
    dispatch({ type: '로그인 정보', payload: { existence: false } });
    navigate('/');
  };

  return (
    <>
      <h1>메인 페이지입니다!!!</h1>
      {loginStatus ? (
        <button type='button' onClick={logout}>
          로그아웃
        </button>
      ) : (
        <Link to={'/login'}>로그인</Link>
      )}
      <ul>
        <li>
          <Link to={'/products'}>상품보기</Link>
        </li>
      </ul>

      {loginInfo.existence ? (
        <div>
          <div>유저 아이디 : {loginInfo.id}</div>
          <div>유저 비밀번호 : {loginInfo.password}</div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
