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
      <form className="form" onSubmit={addTask}>
        <label htmlFor="task">Task:</label>
        <input type="text" id="task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default App
