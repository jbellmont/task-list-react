import React from 'react';

class SearchBar extends React.Component {

  onSearchBarChange = (e) => {
    this.props.onSearchBarChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input 
          className="form-control" 
          type="text" 
          placeholder="Search task" 
          onChange={this.onSearchBarChange} 
        />
        <i className="search icon"></i>
    </form>
    );
  }
}

export default SearchBar;