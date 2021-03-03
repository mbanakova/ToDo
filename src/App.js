import React from 'react';
import './App.scss';
import TodoList from './components/TodoList';

function App() {
  return (
    <section>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
        <div className="container">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <TodoList />
        </div>
    </section>
  );
}

export default App;
