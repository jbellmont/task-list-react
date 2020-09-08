import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {

  // props.tasks
  const renderedTaskList = props.tasks.map((task) => {
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
    <div className="ui middle aligned divided list">
      {renderedTaskList}
    </div>
  );
}

export default TaskList;