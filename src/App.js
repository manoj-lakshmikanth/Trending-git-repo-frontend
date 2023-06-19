import { Route, Routes, useParams } from 'react-router-dom';
import Home from './Components/Home';
import { useSelector } from 'react-redux';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Repo from './Components/Repo';
import SingleRepo from './Components/SingleRepo';

function App() {
  let selectors = useSelector((state) => {
    return state.colors.theme;
  });
  let logIn = useSelector((state) => {
    return state.colors.loggedIn;
  });
  console.log(logIn);

  return (
    <div
      className="app"
      style={{
        backgroundColor: selectors ? 'white' : '#28231D',
        color: selectors ? '#28231D' : 'white',
        fontFamily: 'cursive',
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/repo" element={<Repo />}></Route>
        <Route path="/repo/:reponame" element={<SingleRepo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
