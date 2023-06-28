import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from '../store/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  localStorage.removeItem('accessToken');

  let navigate = useNavigate();
  const dispatch = useDispatch();
  let selectors = useSelector((state) => {
    return state.colors.theme;
  });

  const [userVal, setUserVal] = useState({ email: '', password: '' });
  async function submitHandler() {
    let options = {
      url: 'https://trending-git-repo-backend.vercel.app/login',
      method: 'post',
      headers: { 'content-type': 'application/json' },
      data: userVal,
    };
    try {
      let response = await axios(options);
      console.log(response);
      console.log(response.data.token);
      console.log(response.data.findData);
      if (response.status === 200) {
        if (response.data.message === 'Login Successful') {
          localStorage.setItem('userToken', response.data.token);
          localStorage.setItem(
            'userDetails',
            JSON.stringify(response.data.findData)
          );
          alert(response.data.message);
          navigate('/repo');
          dispatch(isLoggedIn(true));
        } else {
          alert(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <h1>Sign In</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: '30px',
          marginTop: '50px',
          // border: '1px solid green',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            rowGap: '10px',
            width: '100%',
            // border: '1px solid blue',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              columnGap: '10%',
              alignItems: 'center',
            }}
          >
            <p style={{ marginRight: '14%' }}>Email</p>
            <input
              type={'text'}
              onChange={(e) => {
                setUserVal({ ...userVal, email: e.target.value });
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              columnGap: '10%',
              alignItems: 'center',
            }}
          >
            <p>Password</p>
            <input
              type={'password'}
              onChange={(e) => {
                setUserVal({ ...userVal, password: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          onClick={submitHandler}
          style={{
            background: selectors ? '#28231D' : 'white',
            color: selectors ? 'white' : '#28231D',
            fontFamily: 'cursive',
            width: '50%',
            height: '30px',
            borderRadius: '5px',
          }}
          className="sbutton"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
