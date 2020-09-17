import React,{useContext} from 'react';
import GitContext from "../../contexts/GitContext";
import './style.scss';

function Descr() {
  const data = useContext(GitContext);
  return (
    <>
    <p>{data.bio}</p>
    </>
  )
}

export default Descr;