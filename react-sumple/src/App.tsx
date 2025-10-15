import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloPractice from "./practice/HelloPractice"; 
import FormPractice from "./practice/FormPractice";
import ListPractice from "./practice/ListPractice";
import ParentPractice from "./practice/ParentPractice";
import FetchPractice from "./practice/FetchPractice";
import UseLocalStorageMini from "./practice/UseLocalStorageMini";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HelloPractice />
      <FormPractice />
      <ListPractice />
      <ParentPractice />
      <FetchPractice />
      <UseLocalStorageMini />
    </div>
  );
}

export default App;
