import React from 'react';
import SearchBar from './SearchBar';
import SortTasks from './SortTasks';
import './OptionsMenu.css'

const OptionsMenu = (props) => {

  const onShowAddTaskClick = () => {
    props.onShowAddTaskClick();
  };

  const onShowCompletedClick = () => {
    props.onShowCompletedClick();
  }


  return (
    <div className="row text-center options-menu">

      <div className='col-sm'>
        <SearchBar onSearchBarChange={props.onSearchBarChange} />
      </div>

      <div className='col add-task-column'>
        <button className="btn btn-primary add-task-button" onClick={onShowAddTaskClick}>
          + Add task
        </button>
        
      </div>

      <div className='col text-right'>
        <SortTasks 
          onSortByDateClick={props.onSortByDateClick} 
          onSortByPriorityClick={props.onSortByPriorityClick}
          onSortByTagClick={props.onSortByTagClick}
      />
      </div>

    </div>
  );
}

export default OptionsMenu;