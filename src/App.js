
import React, {useState, useEffect} from "react";
import { GitProvider } from "./contexts/GitContext";
import Navbar from './components/Navbar';
import Avatar from './components/Avatar';
import Descr from './components/Descr';
import Projects from './components/Projects';


function App() {
  const [github,setGithub] = useState([]);
  const [gitrepos,setGitrepos] = useState([]);

  useEffect(() => {
   
  
    fetchData("https://api.github.com/users/Ciervos",setGithub);
    fetchData("https://api.github.com/users/Ciervos/repos",setGitrepos);
   },[]);

   async function fetchData(url,setter){
    const data = await fetch(url);
    const dataJson = await data.json();
    setter(dataJson);
    }

    
  const mockProv={
  name: github.login,
  avy: github.avatar_url,
  bio: github.bio,
  proyectos: gitrepos,

  }

 return (
<GitProvider value={mockProv}>
<Navbar/>
<Avatar/>
<Descr/>
<Projects/>
</GitProvider>
  );
}

export default App;
