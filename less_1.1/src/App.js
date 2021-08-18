import React from 'react';

const todolist = [
  {
    id:"1",
    title:"complete assignment",
  },

  {
    id:"2",
    title:"check assignment well",
  },
  {
    id:"3",
    title:"submit the assignment ",
  },
    ];

    function App() {
      return (
        <div>
          <h1>Todo List</h1>
          <ul>
          {todolist.map(function(item) {
      return <li key= {item.id}>{item.title}</li>
       })}
      </ul>
      </div>
      );
    }

export default App;
