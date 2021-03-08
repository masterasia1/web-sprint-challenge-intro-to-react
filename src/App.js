import React, {usestate, useEffect} from 'react';
import './App.css';
import axios from "axios";
import ReactDOM from 'react-dom'; 
import Character from "./components/Character";
const App = () => {
  const [characters, setCharacters] = usestate ([]);
  useEffect(() => {
   const fetchData = () => {
    axios
    .get("https://swapi.dev/api/people" )
    .then(res => setCharacters (res.data.message))
    
    .catch
    
    });
 
  ReactDOM.render(<Character />, document.getElementById("characters"));

    
  return (
    <div className="App">
      <h1 className="Header">XXCharacters</h1>
    </div>
    
  );
  
  }
  export default App
 