function TodoItem({todoDate,todoName,onDeleteClick}) {
  return (
    <div className="container">
      <div className="row rg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger rg-button" onClick={()=> onDeleteClick(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
