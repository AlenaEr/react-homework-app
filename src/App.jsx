import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './css/index.css';
import './css/login.css';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <h1 className="title">The best pizza.<br /><span className="text-yellow">Straight out of the oven, straight to you.</span></h1>
        <p className="sub-title">👋 Welcome! Please start by telling us your name:</p>
        <Form />
      </main>
    </div>
  );
};

export default App;
