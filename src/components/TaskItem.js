import React from 'react';
import './TaskItem.css';

const TaskItem = ({ taskName, dateDue, priority, tag, complete, deleted, onCompleteTaskButtonClick, id, onDeleteTaskButtonClick}) => {

  const onCompleteTaskButtonClickCallBack = () => {
    // Sends the ID of current component up to the App
    onCompleteTaskButtonClick(id);
  };

  const onDeleteTaskButtonClickCallBack = () => {
   // Sends the ID of current component up to the App
   onDeleteTaskButtonClick(id);
  };

  const priorityButtonColour = 
    (priority === 'High') ? "danger"
    : (priority === 'Medium') ? "warning"
    : "success";

  const completedBackgroundColor = 
    (complete) ? { backgroundColor: "#52525241" } : { };

  const completedStrikeThrough = 
  (complete) ? { textDecoration: "line-through" } : { };

  return (
    <div className="row task-item align-middle" style={completedBackgroundColor}>

      <div className="col text-center" style={completedStrikeThrough}>
        <span className="badge badge-pill badge-warning id" style={completedStrikeThrough}>#{id}</span>
        <span className="task-name">{taskName}</span>
      </div>

      <div className="col text-center middle-buttons">
        <button className="btn btn-info">{dateDue}</button>
        <button className= {`btn btn-${priorityButtonColour}`}>{priority}</button>
        <button className="btn btn-dark">{tag}</button>
      </div>

      <div className="col text-center">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-secondary complete-delete" onClick={onCompleteTaskButtonClickCallBack}>✓</button>
          <button type="button" className="btn btn-secondary complete-delete" onClick={onDeleteTaskButtonClickCallBack}>✗</button>
        </div>
      </div>

    </div>
  );
}

export default TaskItem;