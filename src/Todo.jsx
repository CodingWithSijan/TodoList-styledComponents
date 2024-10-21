import { useState } from "react";
import styled from "styled-components";

const Todo = () => {
  const Wrapper = styled.div`
    height: 100vh;
    width: 50vw;
    background-color: #606c38;
    margin: 0 auto;

    h1 {
      color: #fefae0;
      text-align: center;
    }
  `;
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };
  const addItem = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { completed: false, text: newTask }]);
      setNewTask("");
    }
  };
  const deleteItem = (index) => {
    setTasks(tasks.filter((_, i) => index !== i));
  };
  const toggleComplete = (index) => {
    setTasks(
      tasks.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <Wrapper>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Enter new item..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {tasks.map((item, index) => (
          <li
            key={index}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              border: "1px solid black",
            }}
          >
            {item.text}
            <button onClick={() => deleteItem(index)}>X</button>
            <p style={{ color: item.completed ? "green" : "red" }}>
              {item.completed ? "Task Completed" : "Task Pending"}
            </p>
            <button
              onClick={() => {
                toggleComplete(index);
              }}
            >
              Set Completed
            </button>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Todo;
