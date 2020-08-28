import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import './App.css';
import Course from './components/MainCourse/Course';


function App() {
  return (
    <div>
       <Header></Header>
       <Course></Course>
    </div>
  );
}

export default App;
