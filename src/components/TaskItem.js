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
    <div className="task-item">
      <div className="task-item-section-task-name">
        {taskName}
      </div>
      <div className="task-item-section-due">
        <button className="ui blue basic button">{dateDue}</button>
        <button className="ui red basic button">{priority}</button>
        <button className="ui green basic button">{tag}</button>
      </div>
      <div className="task-item-section-complete">
        <div className="ui icon buttons">
          <button className="ui button" onClick={onCompleteTaskButtonClickCallBack}>✓</button>
          <button className="ui button" onClick={onDeleteTaskButtonClickCallBack}>✗</button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;