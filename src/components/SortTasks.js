import React from 'react';
import './SortTasks.css';

const SortTasks = (props) => {

  const onSortByDateClick = () => {
    console.log('sort by date!');
    props.onSortByDateClick();
  }

  const onSortByPriorityClick = () => {
    console.log('sort by priority!');
    props.onSortByPriorityClick();
  }

  const onSortByTagClick = () => {
    console.log('sort by tag!');
    props.onSortByTagClick();
  }

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sort tasks by
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div className="dropdown-item sort-item" onClick={onSortByDateClick}>Due date</div>
        <div className="dropdown-item sort-item" onClick={onSortByPriorityClick}>Priority</div>
        <div className="dropdown-item sort-item" onClick={onSortByTagClick}>Tag</div>
      </div>
    </div>
  );
}

export default SortTasks;