import React,{useContext} from 'react'
import GitContext from "../../contexts/GitContext";
import './style.scss';

function Avatar() {
  
  const data = useContext(GitContext);

  return (
    <>
    <img src={data.avy}/>
    </>
  )
}

export default Avatar;