import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = (props) => {

  // 
  const taskListToUse = (props.inputValue === "") ? props.tasks : props.filteredTasks;

  const renderedTaskList = taskListToUse.map((task) => {
    if (task.deleted === false) {
      return (
        <TaskItem 
          taskName={task.taskName}
          dateDue={task.dateDue}
          priority={task.priority}
          tag={task.tag}
          complete={task.complete}
          deleted={task.deleted}
          key={task.id}
          id={task.id}
          onTaskNameUpdateChange={props.onTaskNameUpdateChange}
          onDateUpdateChange={props.onDateUpdateChange}
          onPriorityUpdateChange={props.onPriorityUpdateChange}
          onTagUpdateChange={props.onTagUpdateChange}
          onCompleteTaskButtonClick={props.onCompleteTaskButtonClick}
          onDeleteTaskButtonClick={props.onDeleteTaskButtonClick}
          animateNoOfTasks={props.animateNoOfTasks}
        />
      );
    }
  });

  // Component render
  return (
    <div className="ui list task-list-container">
      {renderedTaskList}
    </div>
  );
}

export default TaskList;