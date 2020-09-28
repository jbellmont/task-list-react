import React from 'react';
import './AddTask.css';

class AddTask extends React.Component {
  state = {
    id: 4,
    taskName: "",
    dateDue: "",
    priority: "Low",
    tag: "",
    complete: false,
    deleted: false,
  }

  onFormSubmit = (e) => { e.preventDefault() };

  onAddTaskClick = (e) => {
    if (!this.state.taskName || !this.state.dateDue || !this.state.tag) {
      return;
    }
    this.setState({ id: this.state.id + 1 });
    this.props.onAddTaskClick(this.state);
    this.props.animateNoOfTasks();
  }
 
  render () {
    return (
      <div className="row add-task">
        <div className="col">

        <h4 className="">Enter task details</h4>
              
          <form onSubmit={this.onFormSubmit}>
            <label>Task name: 
                <br />
                <input 
                  type="text" 
                  required 
                  minLength="1"
                  maxLength="25"
                  className="form-control" 
                  onChange={ (e) => this.setState({ taskName: e.target.value}) }/>
            </label>

            <br />

            <label>Date due: 
                <br />
                <input type="date" required className="form-control" onChange={ (e) => this.setState({ dateDue: e.target.value}) } />
            </label>

            <br />

            <label>Priority: 
              <br />
              <select className="form-control" required onChange={ (e) => this.setState({ priority: e.target.value}) }>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </label>

            <br />

            <label>Tag: 
              <br />
              <div className="">
                <input 
                  type="text" 
                  required 
                  minLength="1"
                  maxLength="15"
                  className="form-control" 
                  onChange={ (e) => this.setState({ tag: e.target.value}) }/>
              </div>
            </label>

            <br />

            <button type="submit" className="btn btn-primary" onClick={this.onAddTaskClick}>
              Add task
            </button>

          </form>
        </div>
      </div>
    );
  }
}

export default AddTask;