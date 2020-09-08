import React from 'react';

const OptionsMenu = (props) => {

  const onShowAddTaskClick = () => {
    props.onShowAddTaskClick();
  };


  return (
    <div className="ui three column centered grid">

      <div className='column'>
        <button className="ui basic button positive" onClick={onShowAddTaskClick}>
          <i className="icon sticky note"></i>
          Add task
        </button>
      </div>

      <div className='column'>
        <form className="ui search">
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="Search task" />
            <i className="search icon"></i>
          </div>
        </form>
      </div>

      <div className='column'>
        Sort by:
        <select className="ui dropdown">
          <option value="">Date</option>
          <option value="1">Priority</option>
          <option value="2">Tag</option>
        </select>
      </div>

    </div>
  );
}

export default OptionsMenu;