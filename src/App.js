import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";

function App() {
const [userData,setUserData]=useState([])

useEffect(()=>{
axios.get('https://swapi.dev/api/people/')
.then(resultJSON=>{
var numberOfResults = Object.keys(resultJSON).length;
//console.log(numberOfResults);
//console.log(JSON.stringify(resultJSON.data[1]));

var character = resultJSON.data[5];
//console.log(character['hair_color']);
//console.log(JSON.stringify(resultJSON.data[5]['hair_color']));

let i = 0;
var characterArray = [];
while (i < numberOfResults) {
let name = JSON.stringify(resultJSON.data[i]['name']);
let hairColor = JSON.stringify(resultJSON.data[i]['hair_color']);
// console.log(name);
//console.log(hairColor);
let characterData = {
name:name,
hairColor:hairColor
}
characterArray.push(characterData);
i++;
}
setUserData(characterArray);
})

.catch(err=>{
  console.log(err);
  })
  },[])
  const users=userData.map((data,id)=>{
  return <div key={id}>
  <h2>{data.name} {data.hairColor}</h2>
  
  </div>
  })
  return (
  <>
  {users}
  
  </>
  );
  }
  
  
  
  
  export default App; 