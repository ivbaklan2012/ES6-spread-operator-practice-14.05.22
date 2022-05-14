import React, { useState } from "react";

function App() {
  const [newItem, setNew] = useState("");
  const [list, setList] = useState([]);

  function handleInput(event) {
    const inputValue = event.target.value;
    setNew(inputValue);
  }

  function addNew() {
    setList((prev) => [...prev, newItem]);
    setNew("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInput} value={newItem} />
        <button onClick={addNew}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => (
            <li> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
