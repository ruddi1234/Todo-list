import TodoItem from "./TodoItem"

const TodoItems = ({todoItems , onDeleteClick}) => {
  return <div className="items-container">
  {todoItems.map(item => <TodoItem todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick} key={item.name
  }></TodoItem>)}
  </div>
}

export default TodoItems;