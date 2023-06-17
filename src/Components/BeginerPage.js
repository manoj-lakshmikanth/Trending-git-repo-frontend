// import { useEffect, useState } from 'react';
// import { UseNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// // import { addUser } from '../store/slices/UserSlice';

// // const CLIENT_ID = 'cfec03bb8f9b3ff03b1a';

// function BeginerPage() {
//   const [reRender, setReRender] = useState(true);
//   let count = 0;
//   // console.log('dshbv');
//   const dispatch = useDispatch();
//   let selectors = useSelector((state) => {
//     return state.users;
//     // console.log(state.users);
//   });

//   // function loginToGitHub() {
//   //   window.location.assign(
//   //     'https://github.com/login/oauth/authorize?client_id=' + CLIENT_ID
//   //   );
//   // }

//   // useEffect(() => {
//   //   const queryString = window.location.search;
//   //   const urlParams = new URLSearchParams(queryString);
//   //   const codeParams = urlParams.get('code');
//   //   console.log(codeParams);

//   //   if (codeParams && localStorage.getItem('accessToken') === null) {
//   //     async function getAccessToken() {
//   //       await fetch('http://localhost:8000/getAccessToken?code=' + codeParams, {
//   //         method: 'GET',
//   //       })
//   //         .then((response) => {
//   //           return response.json();
//   //         })
//   //         .then((data) => {
//   //           // console.log(data);
//   //           if (data.access_token) {
//   //             localStorage.setItem('accessToken', data.access_token);
//   //             setReRender(!reRender);
//   //           } else {
//   //             console.log('error');
//   //           }
//   //         });
//   //     }
//   //     getAccessToken();
//   //   }
//   // }, []);

//   // async function getUserData() {
//   //   await fetch('http://localhost:8000/getUserData', {
//   //     method: 'GET',
//   //     headers: {
//   //       Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
//   //     },
//   //   })
//   //     .then((response) => {
//   //       return response.json();
//   //     })
//   //     .then((data) => {
//   //       console.log(data);
//   //     });
//   // }

//   // function testing() {
//   //   count++;
//   //   dispatch(addUser(count));
//   // }

//   return (
//     <div className="beginerpage">
//       {localStorage.getItem('accessToken') ? (
//         <>
//           <h2>Logged in</h2>
//           {/* <button onClick={getUserData}>Get User Data</button> */}
//           <button
//           // onClick={() => {
//           //   testing();
//           // }}
//           >
//             redux toolkit
//           </button>
//           <h4>{selectors}</h4>
//           <h3> See details in console</h3>
//           <button
//             onClick={() => {
//               localStorage.removeItem('accessToken');
//               setReRender(!reRender);
//             }}
//           >
//             Logout
//           </button>
//         </>
//       ) : (
//         <>{/* <button onClick={loginToGitHub}>Login to GitHub</button> */}</>
//       )}
//     </div>
//   );
// }

// export default BeginerPage;
