import {useState} from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: inputValue,
    };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleCheckbox = (id) => {
    setSelected(selected =>
      selected.includes(id)
        ? selected.filter(selId => selId !== id)
        : [...selected, id]
    );
  };

  const deleteSelectedTasks = () => {
    setTasks(tasks.filter(task => !selected.includes(task.id)));
    setSelected([]);
  };


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
            <input
              type="checkbox"
              className="task-checkbox"
              checked={selected.includes(task.id)}
              onChange={() => handleCheckbox(task.id)}
            />
            <span>{task.text}</span>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && selected.length > 0 && (
        <button className="delete-btn" style={{marginTop: '18px'}} onClick={deleteSelectedTasks}>
          Delete Items
        </button>
      )}

      <footer>
        <p>Created by Eric Rafael Calado Ferreira &copy; 2026</p>
      </footer>
    </div>
  );
}

export default App
