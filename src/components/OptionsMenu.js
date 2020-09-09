import React from 'react';
import SearchBar from './SearchBar';
import './OptionsMenu.css'

const OptionsMenu = (props) => {

  const onShowAddTaskClick = () => {
    props.onShowAddTaskClick();
  };


  return (
    <div className="row text-center options-menu">

      <div className='col-sm-4'>
        <button className="btn btn-primary" onClick={onShowAddTaskClick}>
          Add task
        </button>
      </div>

      <div className='col-sm-4'>
        <SearchBar onSearchBarChange={props.onSearchBarChange}/>
      </div>

      <div className='col-sm-4'>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort tasks by
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Due date</a>
            <a className="dropdown-item" href="#">Priority</a>
            <a className="dropdown-item" href="#">Tag</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default OptionsMenu;