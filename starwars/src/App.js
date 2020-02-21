import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharContainer from './components/CharContainer';
import './App.css';
import { Button } from "reactstrap";

const App = () => {
const [data, setData] = useState([]);
const [url, setUrl] = useState("https://swapi.co/api/people/");
const [next, setNext] = useState();
const [prev, setPrev] = useState();

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setData(res.data.results);
        setNext(res.data.next);
        setPrev(res.data.previous);
      })
      .catch(err => {
        console.log(err);
      }) 
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      

      <CharContainer parentData={data} />
    </div>
  );
}

export default App;
