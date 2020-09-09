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

  return (
    <div className="row task-item align-middle">

      <div className="col text-center">
        {taskName}
      </div>

      <div className="col text-center">
        <button className="btn btn-info">{dateDue}</button>
        <button className="btn btn-secondary">{priority}</button>
        <button className="btn btn-warning">{tag}</button>
      </div>

      <div className="col text-center">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-secondary" onClick={onCompleteTaskButtonClickCallBack}>✓</button>
          <button type="button" className="btn btn-secondary" onClick={onDeleteTaskButtonClickCallBack}>✗</button>
        </div>
      </div>

    </div>
  );
}

export default TaskItem;