import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singleObjRepo } from '../store/slices/UserSlice';

const SingleRepo = () => {
  let { reponame } = useParams();
  let dispatch = useDispatch();
  console.log(reponame);
  const [sAndf, setsAndf] = useState({
    shine: '',
    forks: '',
    sepStars: '',
    day: '',
  });

  let dummy = useSelector((state) => {
    console.log(state.colors.dummyArr);
    return state.colors.dummyArr;
  });

  let singleObj = useSelector((state) => {
    return state.colors.repoObj;
  });

  function extractObj() {
    console.log('first');
    for (let i = 0; i < dummy.length; i++) {
      let x = dummy[i].Repository;
      let str = x.substring(0, x.indexOf(' '));
      if (str === reponame) {
        console.log('yes');
        dispatch(singleObjRepo(dummy[i]));
        let y = dummy[i].StarsForks;
        let twinkle = y.substring(0, y.indexOf(' '));
        let spoon = y.substring(y.indexOf(' '));
        let spoon1 = spoon.trim();
        let z = dummy[i].Date;
        let sepStars = z.substring(0, z.indexOf(' '));
        let day = z.substring(z.indexOf(' t'));
        setsAndf({ ...sAndf, forks: spoon1, shine: twinkle, sepStars, day });
      }
    }
  }
  console.log(sAndf.forks);
  useEffect(() => {
    extractObj();
  }, []);

  return (
    <div className="singlerepo">
      <h1>{singleObj.Repository}</h1>
      <h4>Language: {singleObj.Language}</h4>
      <h4>Immediate Stars: {singleObj.Date}</h4>
      <h4>Date Range: {sAndf.day}</h4>
      <h4>Forks: {sAndf.forks}</h4>
      <h4>Stars: {sAndf.shine}</h4>
    </div>
  );
};

export default SingleRepo;
