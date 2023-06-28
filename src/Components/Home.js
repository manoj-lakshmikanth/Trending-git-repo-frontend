import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [userVal, setUserVal] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });
  let navigate = useNavigate();
  let selectors = useSelector((state) => {
    return state.colors.theme;
  });

  async function submitHandler() {
    if (
      userVal.name == '' ||
      userVal.email == '' ||
      userVal.password == '' ||
      userVal.cpassword == ''
    ) {
      alert('Please fill all the details ');
    } else {
      let options = {
        url: 'https://trending-git-repo-backend.vercel.app/user',
        method: 'post',
        headers: { 'content-type': 'application/json' },
        data: userVal,
      };
      console.log(userVal);
      try {
        let response = await axios(options);
        if (response.status == 200) {
          if (response.data.message == 'User already Exist') {
            alert(response.data.message);
          } else {
            navigate('/login');
            console.log(response);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="home">
      {/* <Header /> */}
      <h1>Sign Up</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: '30px',
          marginTop: '50px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '10px',
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
            <p style={{ marginRight: '10%' }}>Name</p>
            <input
              onChange={(e) => {
                setUserVal({ ...userVal, name: e.target.value });
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
            <p style={{ marginRight: '11%' }}>Email</p>
            <input
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
              onChange={(e) => {
                setUserVal({ ...userVal, password: e.target.value });
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
              onChange={(e) => {
                setUserVal({ ...userVal, cpassword: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          onClick={() => {
            submitHandler();
          }}
          style={{
            background: selectors ? '#28231D' : 'white',
            color: selectors ? 'white' : '#28231D',
            fontFamily: 'cursive',
            width: '50%',
            height: '30px',
            borderRadius: '5px',
          }}
        >
          Sign Up
        </button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: '20px',
          }}
        >
          <p>Already have an account?</p>
          <p
            className="signin"
            onClick={() => {
              navigate('/login');
            }}
          >
            Sign In
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
