import React, { useState } from "react";
function Todo_list() {
  const [tasks, setTasks] = useState([]);
  const [newtasks, setNewtasks] = useState("");

  function handleInputChange(event) {
    setNewtasks(event.target.value);
  }
  function addTask() {
    if (newtasks.trim() !== "") {
      setTasks((ta) => [...ta, newtasks]);
      setNewtasks("");
    }
  }
  function deleteTask(index) {
    const updatedtasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedtasks);
  }
  function movetaskup(index) {
    if (index > 0) {
      const updatedtasks = [...tasks];
      [updatedtasks[index], updatedtasks[index - 1]] = [
        updatedtasks[index - 1],
        updatedtasks[index],
      ];
      setTasks(updatedtasks);
    }
  }
  function movetaskdown(index) {
    if (index < tasks.length - 1) {
      const updatedtasks = [...tasks];
      [updatedtasks[index], updatedtasks[index + 1]] = [
        updatedtasks[index + 1],
        updatedtasks[index],
      ];
      setTasks(updatedtasks);
    }
  }
  return (
    <div className="todolist">
      <h1>Todo-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task...."
          value={newtasks}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              delete
            </button>
            <button className="move-up" onClick={() => movetaskup(index)}>
              UP /i\
            </button>
            <button className="move-down" onClick={() => movetaskdown(index)}>
              DOWN \I/
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Todo_list;
