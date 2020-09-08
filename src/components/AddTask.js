import React from 'react';

class AddTask extends React.Component {
  state = {
    id: 3,
    taskName: "",
    dateDue: "",
    priority: "",
    tag: "",
    complete: false,
    deleted: false,
  }

  onAddTaskClick = (e) => {
    // e.preventDefault();
    this.setState({ id: this.state.id + 1 });
    this.props.onAddTaskClick(this.state);
  }
 
  render () {
    return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">Enter task details</div>
          <div className="description">
            
            <form>
              <label>Task name: 
                <div className="ui input">
                  <input type="text" onChange={ (e) => this.setState({ taskName: e.target.value}) }/>
                </div>
              </label>

              <br />

              <label>Date due: 
                <div className="ui input">
                  <input type="date" onChange={ (e) => this.setState({ dateDue: e.target.value}) } />
                </div>
              </label>

              <br />

              <label>Priority: 
                <select className="ui dropdown" onChange={ (e) => this.setState({ priority: e.target.value}) }>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </label>

              <br />

              <label>Tag: 
                <div className="ui input">
                  <input type="text" onChange={ (e) => this.setState({ tag: e.target.value}) }/>
                </div>
              </label>

              <br />
            </form>

          </div>
        </div>
        <div className="ui bottom attached button" onClick={this.onAddTaskClick}>
          <i className="add icon"></i>
          Add task
        </div>
      </div>
    </div>
  );
  }
}

export default AddTask;