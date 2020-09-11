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

      <div className="col-sm-1 id-column padding" style={completedStrikeThrough}>
        <span className="badge badge-pill badge-warning id" style={completedStrikeThrough}>#{id}</span>
      </div>

      <div className="col-sm-4 text-center task-name-column padding" style={completedStrikeThrough}>
        <span className="task-name">{taskName}</span>
      </div>

      <div className="col-sm-6 text-center middle-buttons padding">
        <button className="btn btn-info btn-sm">{dateDue}</button>
        <button className= {`btn btn-${priorityButtonColour} btn-sm`}>{priority}</button>
        <button className="btn btn-dark btn-sm">{tag}</button>
      </div>

      <div className="col-sm-1 text-center padding">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-secondary complete-delete btn-sm" onClick={onCompleteTaskButtonClickCallBack}>✓</button>
          <button type="button" className="btn btn-secondary complete-delete btn-sm" onClick={onDeleteTaskButtonClickCallBack}>✗</button>
        </div>
      </div>

    </div>
  );
}

export default TaskItem;