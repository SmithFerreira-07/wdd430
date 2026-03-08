import {useState} from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const addTask = (e) => {
    e.preventDefault();

    if (inputValue.trim() == '') return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
    };

    setTasks([...tasks, newTask]);

    setInputValue('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }


return (
    <div className="App">
      <h1>To-Do List</h1>
      <form className="form" onSubmit={addTask}>
        <label htmlFor="task">Task:</label>
        <input 
          type="text" 
          id="task" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add Task</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.text}</span>
            <button 
              onClick={() => deleteTask(task.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    <footer>
      <p>Created by Eric Rafael Calado Ferreira &copy; 2026</p>
    </footer>
    </div>
  );
}

export default App
