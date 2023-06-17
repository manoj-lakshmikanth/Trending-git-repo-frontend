import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  let selectors = useSelector((state) => {
    return state.colors.theme;
  });

  return (
    <div className="home">
      <h1>Welcome to the Github OAuth</h1>
      <button
        className="loginButton"
        onClick={() => {
          navigate('/login');
        }}
        style={{
          background: selectors ? '#28231D' : 'white',
          color: selectors ? 'white' : '#28231D',
          fontFamily: 'cursive',
          width: '50%',
        }}
      >
        Click to login
      </button>
    </div>
  );
};

export default Home;
