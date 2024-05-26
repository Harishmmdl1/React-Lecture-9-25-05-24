import axios from "axios";
import React, { useEffect, useState } from "react";

const Assignment = () => {
  const [todos, setTodos] = useState([]);

  const handleTodo = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response?.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    handleTodo();
  });

  return (
    <div>
      <h3 className="m-5"> Todo List Table</h3>
      <table className="table table-bordered">
        <thead>
          <tr className="table-primary">
            <th>USerID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Task Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => (
            <tr key={item.id}>
              <td >{item.userId} </td>
              <td >{item.id} </td>
              <td >{item.title} </td>
              <td >
                {item.completed ? (
                  <input type="checkbox" defaultChecked />
                ) : (
                  <input type="checkbox" />
                )}{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Assignment;
