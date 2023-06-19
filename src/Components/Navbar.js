import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, isLoggedIn } from '../store/slices/UserSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let selectors = useSelector((state) => {
    return state.colors.theme;
  });

  function clickHandler() {
    dispatch(darkTheme(!selectors));
  }

  let logIn = useSelector((state) => {
    return state.colors.loggedIn;
  });

  useEffect(() => {}, []);
  return (
    <div
      className="navbar"
      style={{
        borderBottom: selectors ? '3px solid #28231D' : '3px solid white',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '5%',
          alignItems: 'center',
        }}
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="github icon"
          style={{ maxWidth: '40px', maxHeight: '40px', borderRadius: '20px' }}
        />
        <h2>Explore</h2>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '5%',
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => {
            clickHandler();
          }}
          style={{
            background: selectors ? '#28231D' : 'white',
            color: selectors ? 'white' : '#28231D',
            fontFamily: 'cursive',
            width: '70px',
            height: '30px',
            borderRadius: '5px',
          }}
        >
          Theme
        </button>
        {logIn ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: '10%',
            }}
          >
            <button
              onClick={() => {
                localStorage.removeItem('accessToken');
                dispatch(isLoggedIn(false));
                navigate('/');
              }}
              style={{
                background: selectors ? '#28231D' : 'white',
                color: selectors ? 'white' : '#28231D',
                fontFamily: 'cursive',
                width: '70px',
                height: '30px',
                borderRadius: '5px',
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
