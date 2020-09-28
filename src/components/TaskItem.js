import React from 'react';
import './TaskItem.css';

const TaskItem = ({ taskName, index, dateDue, priority, tag, complete, deleted, onCompleteTaskButtonClick, id, onDeleteTaskButtonClick, onTaskNameUpdateChange, onDateUpdateChange, onPriorityUpdateChange, onTagUpdateChange, animateNoOfTasks}) => {

  // Editing existing task callbacks

  const onTaskNameUpdateChangeCallBack = (e) => {
    // Updates state of Task Name when a user edits a task item Task Name
    onTaskNameUpdateChange(id, e.target.value);
  }

  const onDateUpdateChangeCallBack = (e) => {
    // Updates state of Task Name when a user edits a task item Task Name
    onDateUpdateChange(id, e.target.value);
  }

  const onPriorityUpdateChangeCallBack = (e) => {
    // Updates state of Task Name when a user edits a task item Task Name
    onPriorityUpdateChange(id, e.target.value);
  }

  const onTagUpdateChangeCallBack = (e) => {
    // Updates state of Task Name when a user edits a task item Task Name
    onTagUpdateChange(id, e.target.value);
  }


  // Complete and delete callbacks

  const onCompleteTaskButtonClickCallBack = () => {
    // Sends the ID of current component up to the App
    onCompleteTaskButtonClick(id);
    animateNoOfTasks();
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
    (complete) ? { textDecoration: "line-through"} : { };

  const completedStrikeThroughTaskName = 
    (complete) ? { textDecoration: "line-through", backgroundColor: "#D3D3D3" } : { };


  return (
    <div className="row task-item align-middle" style={completedBackgroundColor}>

      <div className="col-sm-1 id-column padding" style={completedStrikeThrough}>
        <span className="badge badge-pill badge-warning id" style={completedStrikeThrough}>#{index}</span>
      </div>

      <div className="col-sm-4 text-center task-name-column padding">
        <input 
          type="text" 
          value={taskName} 
          maxLength="25"
          className="task-name"
          style={completedStrikeThroughTaskName}
          onChange={onTaskNameUpdateChangeCallBack}
        />
      </div>

      <div className="col-sm-5 text-center padding">
        {/* Date button */}
        <input 
          type="date"
          value={dateDue}
          onChange={onDateUpdateChangeCallBack}
          className="btn btn-info btn-sm middle-button date-button"
        />

        {/* Priority button*/}  
        <select 
          value={priority}
          onChange={onPriorityUpdateChangeCallBack}
          className={`btn btn-${priorityButtonColour} btn-sm middle-button`}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        {/* Tag button */}
        <input 
          type="text" 
          value={tag} 
          maxLength="15"
          className="btn btn-dark btn-sm middle-button"
          onChange={onTagUpdateChangeCallBack}
        />
      </div>

      <div className="col-sm-2 text-center padding">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-secondary complete-delete btn-sm" onClick={onCompleteTaskButtonClickCallBack}>✓</button>
          <button type="button" className="btn btn-secondary complete-delete btn-sm" onClick={onDeleteTaskButtonClickCallBack}>✗</button>
        </div>
      </div>

    </div>
  );
}

export default TaskItem;