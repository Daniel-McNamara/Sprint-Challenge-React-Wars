import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharContainer from './components/CharContainer';
import './App.css';
import Pagination from "./components/Pagination";

const App = () => {
const [data, setData] = useState([]);
const [url, setUrl] = useState("https://swapi.co/api/people/");
const [next, setNext] = useState();
const [prev, setPrev] = useState();

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
      <Pagination />

      

      <CharContainer parentData={data} />
    </div>
  );
}

export default App;
