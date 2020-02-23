import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import ProfItem from './components/DevItem';
import ProfForm from './components/ProfForm';

function App() {
  const [profs, setProfs]=useState([]);

 
  

  useEffect(()=>{
    async function loadProfs(){
      const response = await api.get('/profs');
      setProfs(response.data);
    }
    loadProfs();
  },[]);




  async function handleAddProf(data) {
    

    const response = await api.post("/profs",data);
      
  
  
    setProfs([...profs,response.data]);//copia o array original e acrescenta um
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <ProfForm onSubmit= {handleAddProf} />
      </aside>
      <main>
        <ul>
        {profs.map(prof=>(
          <ProfItem key={prof._id} prof={prof}/>
        ))}
          
          
        </ul>
      </main>
    </div>
  );
}

export default App;
