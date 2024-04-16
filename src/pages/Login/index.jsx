// import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginStatus }) => {
  const navigate = useNavigate();

  const loginCompletion = (event) => {
    event.preventDefault();
    setLoginStatus(true);
    navigate('/');
  };

  return (
    <div>
      <h1>로그인 페이지!!!</h1>
      <form onSubmit={loginCompletion}>
        <div>
          <span>아이디 : </span>
          <input type='text' />
        </div>
        <div>
          <span>비밀번호 : </span>
          <input type='password' />
        </div>
        <div>
          <button type='submit'>로그인</button>
        </div>
      </form>
    </div>
  );
};
Login.propTypes = {
  setLoginStatus: PropTypes.func.isRequired,
};
export default Login;
