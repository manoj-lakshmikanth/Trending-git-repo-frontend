import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { dummy1 } from '../store/slices/UserSlice';

const Repo = () => {
  const [repos, setRepos] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedLang, setSelectedLang] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let selectors = useSelector((state) => {
    return state.colors.theme;
  });

  let dummy = useSelector((state) => {
    return state.colors.dummyArr;
  });

  async function getRepos() {
    await fetch('http://localhost:8000/getRepos', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setRepos(data);
        setSelectedLang('Selected');
        dispatch(dummy1(data));
      });
  }

  async function weeklyRepos() {
    await fetch('http://localhost:8000/getWeeklyRepos', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setRepos(data);
        setSelectedLang('Selected');
        dispatch(dummy1(data));
      });
  }

  async function monthlyRepos() {
    await fetch('http://localhost:8000/getMonthlyRepos', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setRepos(data);
        setSelectedLang('Selected');
        dispatch(dummy1(data));
      });
  }

  function datechangeHandler(e) {
    setSelectedValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value === 'Today') {
      getRepos();
    } else if (e.target.value === 'This week') {
      weeklyRepos();
    } else {
      monthlyRepos();
    }
  }

  function langChangeHandler(e) {
    setSelectedLang(e.target.value);
    console.log(e.target.value);
    if (e.target.value === 'Python') {
      let abc = dummy.filter((item) => {
        return item.Language === e.target.value;
      });
      console.log(abc);
      setRepos(abc);
    } else if (e.target.value === 'Jupyter Notebook') {
      console.log('first');
      console.log(e.target.value);
      let abc = dummy.filter((item) => {
        return item.Language === e.target.value;
      });
      console.log(abc);
      setRepos(abc);
    } else if (e.target.value === 'Java') {
      let abc = dummy.filter((item) => {
        return item.Language === e.target.value;
      });
      //   console.log(abc);
      setRepos(abc);
    } else if (e.target.value === 'C++') {
      let abc = dummy.filter((item) => {
        return item.Language === e.target.value;
      });
      //   console.log(abc);
      setRepos(abc);
    } else if (e.target.value === 'Rust') {
      let abc = dummy.filter((item) => {
        return item.Language === e.target.value;
      });
      //   console.log(abc);
      setRepos(abc);
    } else if (e.target.value === 'TypeScript') {
      let abc = dummy.filter((item) => {
        return item.Language === e.target.value;
      });
      //   console.log(abc);
      setRepos(abc);
    } else if (e.target.value === 'C') {
      let abc = dummy.filter((item) => {
        return item.Language === e.target.value;
      });
      //   console.log(abc);
      setRepos(abc);
    } else if (e.target.value === 'Solidity') {
      let abc = dummy.filter((item) => {
        return item.Language === e.target.value;
      });
      //   console.log(abc);
      setRepos(abc);
    } else if (e.target.value === 'HTML') {
      let abc = dummy.filter((item) => {
        return item.Language === e.target.value;
      });
      //   console.log(abc);
      setRepos(abc);
    } else if (e.target.value === 'Zig') {
      let abc = dummy.filter((item) => {
        return item.Language === e.target.value;
      });
      //   console.log(abc);
      setRepos(abc);
    } else {
      setRepos(dummy);
    }
  }

  function singleRepo(item) {
    let repoName = item.Repository;
    let firstName = repoName.substring(0, repoName.indexOf(' '));
    navigate(`/repo/${firstName}`);
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className="repo">
      <div
        style={{
          width: '100%',
          paddingBottom: '20px',
          borderBottom: selectors ? '2px solid #28231D' : '2px solid white',
        }}
      >
        <h1>Trending Repositories</h1>
        <h7>See what the Github community is most excited about today</h7>
      </div>
      <div className="filters">
        <h2>Repositories</h2>
        <div>
          <select
            name="cars"
            id="cars"
            style={{
              width: '50%',
              height: '30px',
              borderRadius: '5px',
              background: selectors ? 'white' : '#28231D',
              color: selectors ? '#28231D' : 'white',
              fontFamily: 'cursive',
            }}
            value={selectedLang}
            onChange={langChangeHandler}
          >
            <option value="Select">Select</option>
            <option value="Python">Python</option>
            <option value="Jupyter Notebook">Jupyter Notebook</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="Rust">Rust</option>
            <option value="TypeScript">TypeScript</option>
            <option value="C">C</option>
            <option value="Solidity">Solidity</option>
            <option value="HTML">HTML</option>
            <option value="Zig">Zig</option>
          </select>
          <select
            name="cars"
            id="cars"
            value={selectedValue}
            style={{
              width: '50%',
              height: '30px',
              borderRadius: '5px',
              background: selectors ? 'white' : '#28231D',
              color: selectors ? '#28231D' : 'white',
              fontFamily: 'cursive',
            }}
            onChange={datechangeHandler}
          >
            <option value="Today">Today</option>
            <option value="This week">This week</option>
            <option value="This Month">This Month</option>
          </select>
        </div>
      </div>
      <div className="allrepo">
        {repos.length ? (
          repos.map((item, id) => {
            return (
              <div key={id} className="repobox">
                <h3
                  className="repohover"
                  style={{ paddingLeft: '10px', marginTop: '5px' }}
                  onClick={() => {
                    singleRepo(item);
                  }}
                >
                  {item.Repository}
                </h3>
                <h5 style={{ paddingLeft: '10px', marginTop: '-8px' }}>
                  Language: {item.Language}
                </h5>
              </div>
            );
          })
        ) : (
          <h2>Not found ! Try other filters </h2>
        )}
      </div>
    </div>
  );
};

export default Repo;
