import React from 'react';
import { useSelector } from 'react-redux';

const Login = () => {
  const CLIENT_ID = 'cfec03bb8f9b3ff03b1a';

  let selectors = useSelector((state) => {
    return state.colors.theme;
  });
  function loginToGitHub() {
    window.location.assign(
      'https://github.com/login/oauth/authorize?client_id=' + CLIENT_ID
    );
  }

  return (
    <div className="login">
      <h1>Login to GitHub using OAuth</h1>
      <button
        onClick={() => {
          loginToGitHub();
        }}
        style={{
          background: selectors ? '#28231D' : 'white',
          color: selectors ? 'white' : '#28231D',
          fontFamily: 'cursive',
          width: '50%',
          height: '35px',
          borderRadius: '5px',
          fontSize: 'medium',
        }}
      >
        Login
      </button>
      <img src="" alt="" />
    </div>
  );
};

export default Login;
