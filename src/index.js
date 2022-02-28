import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const nums = [1,2,3,4,5]
const squared =nums.map(function(i) {
  return i**2
})
console.log(squared)

const names = ["alice" , "bob", "charlie" , "danielle"]
const captilsed = names.map(function(str){
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return str2
})
console.log(captilsed)

const pokemon = ["Bulbasaur","Charmander","Squirtle"]
const wrapped = pokemon.map((poke) => {
  return ("<p>" + poke + "</p>")
})
console.log(wrapped)


















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
