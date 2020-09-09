import React from 'react';
import OptionsMenu from './OptionsMenu';
import TaskList from './TaskList';
import AddTask from './AddTask';
import './App.css';

class App extends React.Component {
  state = { 
    tasks: [
      {
        id: 1,
        taskName: "Make report",
        dateDue: "2020-10-01",
        priority: "High",
        tag: "marketing",
        complete: false,
        deleted: false,
      },
      {
        id: 2,
        taskName: "Build deck",
        dateDue: "2020-11-29",
        priority: "Low",
        tag: "logistics",  
        complete: false,
        deleted: false,      
      },
    ],
    addTaskVisible: false,
    inputValue: "",
  };

  onShowAddTaskClick = () => {
    // Makes the Add Task component visible
    this.state.addTaskVisible ? this.setState({ addTaskVisible: false }) : this.setState({ addTaskVisible: true });
  }

  onAddTaskClick = (task) => {
    // Callback for when user adds a task in the AddTask component
    this.setState(state => {
      const updatedTaskList = state.tasks.concat(task);
      return { tasks: updatedTaskList };
    });
  }

  onSearchBarChange = (task) => this.setState( {inputValue: task} );
  // Updates search bar value in App state

  onCompleteTaskButtonClick = (id) => {
    // Callback for when a user clicks on completed task button in the TaskItem component
    this.setState(state => {
      const updatedTaskList = state.tasks.map((task) => {
        if (task.id === id) {
          return Object.assign({}, task, {complete: true});
        } else {
          return task;
        }
      });
      return { tasks: updatedTaskList };
    })
  }

  onDeleteTaskButtonClick = (id) => {
    // Callback for when a user clicks on delete task button in the TaskItem component
    this.setState(state => {
      const updatedTaskList = state.tasks.map((task) => {
        if (task.id === id) {
          return Object.assign({}, task, {deleted: true});
        } else {
          return task;
        }
      });
      return { tasks: updatedTaskList };
    })
  }

  render() {

    const filteredTasks = 
    // Creates a filtered array when Search Bar is in use
      this.state.tasks.filter(task => {
        return task.taskName.toLowerCase().includes(this.state.inputValue.toLowerCase());
      });

    return (
      <div className="container-sm">

        <div className="row">
          <div className="col">
            <h1>Task List</h1>
          </div>
        </div>

          <OptionsMenu 
            onShowAddTaskClick={this.onShowAddTaskClick} 
            onSearchBarChange={this.onSearchBarChange}
          />

        { this.state.addTaskVisible ? <AddTask onAddTaskClick={this.onAddTaskClick} /> : null }
        
        <div className="row">
          <div className="col">
            <TaskList 
              tasks={this.state.tasks} 
              filteredTasks={filteredTasks}
              inputValue={this.state.inputValue}
              onCompleteTaskButtonClick={this.onCompleteTaskButtonClick}
              onDeleteTaskButtonClick={this.onDeleteTaskButtonClick}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;