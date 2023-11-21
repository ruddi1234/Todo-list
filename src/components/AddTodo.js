import { useState } from "react";

function AddTodo({onNewItem}) {

  const [todoName,setTodoname] = useState("");
  const [dueDate,setDuedate] = useState("");

  const handleNameChange = (event) => {
    setTodoname(event.target.value);
  }
  const handleDateChange = (event) => {
    setDuedate(event.target.value);
  }

  const handleAddButtonClicked = () => {
    onNewItem(todoName,dueDate);
    setDuedate();
    setTodoname();
  };

  return (
    <div className="container">
        <div className="row rg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter todo here" onChange={handleNameChange} value={todoName}></input>
          </div>
          <div className="col-4">
            <input type="date" onChange={handleDateChange} value={dueDate}></input>
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-success rg-button"
          onClick={handleAddButtonClicked}
          >Add</button>
          </div>
        </div>
    </div>
  );
}
export default AddTodo;
