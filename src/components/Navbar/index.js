import React,{useContext} from 'react';
import GitContext from "../../contexts/GitContext";

function Navbar(props) {
  const data = useContext(GitContext);
  return (
    <>
    <h1>{data.name}</h1>
    </>
  )
}

export default Navbar;