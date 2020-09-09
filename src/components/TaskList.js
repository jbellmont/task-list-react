import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = (props) => {

  console.log(props);

    const taskListToUse = (props.inputValue === "") ? props.tasks : props.filteredTasks;

    // props.tasks
    const renderedTaskList = taskListToUse.map((task) => {
      if (task.complete === false && task.deleted === false) {
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
            onCompleteTaskButtonClick={props.onCompleteTaskButtonClick}
            onDeleteTaskButtonClick={props.onDeleteTaskButtonClick}
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