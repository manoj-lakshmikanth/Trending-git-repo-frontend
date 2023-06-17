import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme } from '../store/slices/UserSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [reRender, setReRender] = useState(true);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let selectors = useSelector((state) => {
    return state.colors.theme;
  });

  function clickHandler() {
    dispatch(darkTheme(!selectors));
  }

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParams = urlParams.get('code');

    if (codeParams && localStorage.getItem('accessToken') === null) {
      async function getAccessToken() {
        await fetch('http://localhost:8000/getAccessToken?code=' + codeParams, {
          method: 'GET',
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            // console.log(data);
            if (data.access_token) {
              localStorage.setItem('accessToken', data.access_token);
              setReRender(!reRender);
            } else {
              console.log('error');
            }
          });
      }
      getAccessToken();
    }
    async function getUserData() {
      await fetch('http://localhost:8000/getUserData', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          setUserData(data);
        });
    }
    getUserData();
  }, []);
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
        {localStorage.getItem('accessToken') ? (
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
            <h4 style={{ width: '40%' }}>{userData.login}</h4>
            <img
              src={userData.avatar_url}
              alt="profile pic"
              style={{
                maxWidth: '40px',
                maxHeight: '40px',
                borderRadius: '20px',
              }}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
