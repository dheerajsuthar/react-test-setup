import React from 'react';
import logo from './logo.svg';
import Form from './Form';
import './App.css';

const model = {
  name: 'Dheeraj',
  number: 2
};

function App() {
  return (
    <div className="App">
      <article>
        <Form model={model} />
      </article>
    </div>
  );
}

export default App;
