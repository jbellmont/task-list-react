import React from 'react';
import OptionsMenu from './OptionsMenu';
import TaskList from './TaskList';
import AddTask from './AddTask';

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

    console.log(this.state);
  }

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
    return (
      <div className="ui container">

        <h1 className="ui header">
          <i className="share icon"></i>
          <div className="content">
          Task List
          </div>
        </h1>

        <OptionsMenu onShowAddTaskClick={this.onShowAddTaskClick} />
        { this.state.addTaskVisible ? <AddTask onAddTaskClick={this.onAddTaskClick} /> : null }
        <TaskList 
          tasks={this.state.tasks} 
          onCompleteTaskButtonClick={this.onCompleteTaskButtonClick}
          onDeleteTaskButtonClick={this.onDeleteTaskButtonClick}
        />

      </div>
    );
  }
}

export default App;