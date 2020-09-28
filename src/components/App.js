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
        taskName: "Marketing report",
        dateDue: "2020-10-01",
        priority: "High",
        tag: "marketing",
        complete: false,
        deleted: false,
      },
      {
        id: 2,
        taskName: "Organise meeting with vendors",
        dateDue: "2020-11-29",
        priority: "Low",
        tag: "logistics",  
        complete: false,
        deleted: false,      
      },
      {
        id: 3,
        taskName: "Meet James for coffee",
        dateDue: "2020-12-01",
        priority: "Medium",
        tag: "networking",  
        complete: false,
        deleted: false,      
      },
    ],
    addTaskVisible: false,
    inputValue: "",
  };

  countNumberOfCurrentTasks = () => {
    // counts the number of active tasks and uses it to display number by H1 heading
    const completedOrDeletedTasks = this.state.tasks.filter(task => {
      if (task.complete || task.deleted) {
        return false;
      } else {
        return true;
      }
    });

    return completedOrDeletedTasks.length;
  }


    //********************* //
   // Title methods        //
  // ******************** //

  componentDidMount = () => {
    // Stops default text highlighting
    const appTitleDOM = document.querySelector('h1');
    const noOfTasksIconDOM = document.querySelector('.no-of-tasks');
    appTitleDOM.addEventListener('mousedown', (e) => e.preventDefault());
    noOfTasksIconDOM.addEventListener('mousedown', (e) => e.preventDefault());
  }

  animateNoOfTasks = () => {
    // Adds/removes a class for the popping animation
    const noOfTasksIcon = document.querySelector('.no-of-tasks');
    noOfTasksIcon.classList.add('animate-no-of-tasks');
    setTimeout(() => noOfTasksIcon.classList.remove('animate-no-of-tasks'), 500);
  }




    //********************* //
   // Options Menu methods //
  // ******************** //

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

  onSortByDateClick = () => {
    // Sorts task list by date, with most urgent first
    this.setState(state => {
      const sortedTaskList = state.tasks.sort((a,b) => {
        return new Date(a.dateDue) - new Date(b.dateDue);
      });
      return sortedTaskList;
    });
  }

  onSortByPriorityClick = () => {
    // Sorts task list by priority, by High->Medium->Low descending order 
    this.setState(state => {
      const sortedTaskList = state.tasks.sort((a,b) => {

        if (a.priority === "High" && b.priority === "Medium") {
          return -1;
        } else if (a.priority === "High" && b.priority === "Low") {
          return -1;
        } else if (a.priority === "Medium" && b.priority === "Low") {
          return -1;
        } else if (a.priority === "Medium" && b.priority === "Medium") {
          return 0;
        } else if (a.priority === "High" && b.priority === "High") {
          return 0;
        } else if (a.priority === "Low" && b.priority === "Low") {
          return 0;
        } else if (a.priority === "Medium" && b.priority === "High") {
          return 1;
        } else if (a.priority === "Low" && b.priority === "Medium") {
          return 1;
        } else if (a.priority === "Low" && b.priority === "High") {
          return 1;
        }

      });
      return sortedTaskList;
    });
  }

  onSortByTagClick = () => {
    // Sorts task list by date, with most urgent first
    this.setState(state => {
      const sortedTaskList = state.tasks.sort((a,b) => {
        let tagA = a.tag.toUpperCase(); // ignore upper and lowercase
        let tagB = b.tag.toUpperCase(); // ignore upper and lowercase

        if (tagA < tagB) {
          return -1;
        } else if (tagA > tagB) {
          return 1;
        } else {
          return 0;
        }

      });
      
      return sortedTaskList;
    });
  }

  
    //******************//
   // TaskItem methods //
  // **************** //

  // Editing task detail methods 

  onTaskNameUpdateChange = (id, newTask) => {
    this.setState(state => {
      const updatedTaskList = state.tasks.map((task) => {
        if (task.id === id) {
          return Object.assign({}, task, {taskName: newTask});
        } else {
          return task;
        }
      });
      return { tasks: updatedTaskList };
    });
  }

  onDateUpdateChange = (id, newDate) => {
    this.setState(state => {
      const updatedTaskList = state.tasks.map((task) => {
        if (task.id === id) {
          return Object.assign({}, task, {dateDue: newDate});
        } else {
          return task;
        }
      });
      return { tasks: updatedTaskList };
    });
  }

  onPriorityUpdateChange = (id, newPriority) => {
    this.setState(state => {
      const updatedTaskList = state.tasks.map((task) => {
        if (task.id === id) {
          return Object.assign({}, task, {priority: newPriority});
        } else {
          return task;
        }
      });
      return { tasks: updatedTaskList };
    });
  }

  onTagUpdateChange = (id, newTag) => {
    this.setState(state => {
      const updatedTaskList = state.tasks.map((task) => {
        if (task.id === id) {
          return Object.assign({}, task, {tag: newTag});
        } else {
          return task;
        }
      });
      return { tasks: updatedTaskList };
    });
  }


  // Completing and Deleting task methods 

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


    //******************//
   //  Render method   //
  // **************** //

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
            <h1><i className="fas fa-tasks task-icon"></i>Task List<sup><span className="badge badge-pill badge-warning no-of-tasks">{this.countNumberOfCurrentTasks()}</span></sup></h1>
          </div>
        </div>

          <OptionsMenu 
            onShowAddTaskClick={this.onShowAddTaskClick}
            onShowCompletedClick={this.onShowCompletedClick} 
            onSearchBarChange={this.onSearchBarChange}
            onSortByDateClick={this.onSortByDateClick}
            onSortByPriorityClick={this.onSortByPriorityClick}
            onSortByTagClick={this.onSortByTagClick}
          />

        { this.state.addTaskVisible ? <AddTask onAddTaskClick={this.onAddTaskClick} animateNoOfTasks={this.animateNoOfTasks} /> : null }
        
        <div className="row">
          <div className="col task-list-container">
            <TaskList 
              tasks={this.state.tasks} 
              filteredTasks={filteredTasks}
              inputValue={this.state.inputValue}
              onTaskNameUpdateChange={this.onTaskNameUpdateChange}
              onDateUpdateChange={this.onDateUpdateChange}
              onPriorityUpdateChange={this.onPriorityUpdateChange}
              onTagUpdateChange={this.onTagUpdateChange}
              onCompleteTaskButtonClick={this.onCompleteTaskButtonClick}
              onDeleteTaskButtonClick={this.onDeleteTaskButtonClick}
              animateNoOfTasks={this.animateNoOfTasks}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;