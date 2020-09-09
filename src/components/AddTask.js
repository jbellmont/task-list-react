import React from 'react';
import './AddTask.css';

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
      <div className="row add-task">
        <div className="col">

        <h4 className="">Enter task details</h4>
              
          <form>
            <label>Task name: 
                <br />
                <input type="text" className="form-control" onChange={ (e) => this.setState({ taskName: e.target.value}) }/>
            </label>

            <br />

            <label>Date due: 
                <br />
                <input type="date" className="form-control" onChange={ (e) => this.setState({ dateDue: e.target.value}) } />
            </label>

            <br />

            <label>Priority: 
              <br />
              <select className="form-control" onChange={ (e) => this.setState({ priority: e.target.value}) }>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </label>

            <br />

            <label>Tag: 
              <br />
              <div className="">
                <input type="text" className="form-control" onChange={ (e) => this.setState({ tag: e.target.value}) }/>
              </div>
            </label>

            <br />

            <button className="btn btn-success" onClick={this.onAddTaskClick}>
              Add task
            </button>

          </form>
        </div>
      </div>
    );
  }
}

export default AddTask;