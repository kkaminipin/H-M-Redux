// import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginCompletion = (event) => {
    event.preventDefault();
    dispatch({ type: '로그인 상태', payload: true });
    dispatch({
      type: '로그인 정보',
      payload: {
        existence: true,
        id: event.target[0].value,
        password: event.target[1].value,
      },
    });
    navigate('/');
  };

  return (
    <div>
      <h1>로그인 페이지!!!</h1>
      <form onSubmit={loginCompletion}>
        <div>
          <span>아이디 : </span>
          <input type='text' className='k-id' />
        </div>
        <div>
          <span>비밀번호 : </span>
          <input type='password' className='k-pw' />
        </div>
        <div>
          <button type='submit'>로그인</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
