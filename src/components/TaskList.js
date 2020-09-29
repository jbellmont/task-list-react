import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = (props) => {

  // 
  const taskListToUse = (props.inputValue === "") ? props.tasks : props.filteredTasks;

  const notDeletedTasks = taskListToUse.filter(item => !item.deleted);

  const renderedTaskList = notDeletedTasks.map((task, index) => {
    if (!task.deleted) {
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
          index={index + 1}
          onTaskNameUpdateChange={props.onTaskNameUpdateChange}
          onDateUpdateChange={props.onDateUpdateChange}
          onPriorityUpdateChange={props.onPriorityUpdateChange}
          onTagUpdateChange={props.onTagUpdateChange}
          onCompleteTaskButtonClick={props.onCompleteTaskButtonClick}
          onDeleteTaskButtonClick={props.onDeleteTaskButtonClick}
          animateNoOfTasks={props.animateNoOfTasks}
        />
      );
    } else {
      return null;
    }
  });

  // Component render
  return (
    <div className="row task-list-container">
      {renderedTaskList}
    </div>
  );
}

export default TaskList;