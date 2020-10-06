(this["webpackJsonptask-list"]=this["webpackJsonptask-list"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),i=a.n(r),s=a(1),l=a(2),c=a(4),u=a(3),d=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onSearchBarChange=function(t){e.props.onSearchBarChange(t.target.value)},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("form",null,o.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search task",onChange:this.onSearchBarChange}),o.a.createElement("i",{className:"search icon"}))}}]),a}(o.a.Component),m=(a(12),function(e){return o.a.createElement("div",{className:"dropdown"},o.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort tasks by"),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement("div",{className:"dropdown-item sort-item",onClick:function(){console.log("sort by date!"),e.onSortByDateClick()}},"Due date"),o.a.createElement("div",{className:"dropdown-item sort-item",onClick:function(){console.log("sort by priority!"),e.onSortByPriorityClick()}},"Priority"),o.a.createElement("div",{className:"dropdown-item sort-item",onClick:function(){console.log("sort by tag!"),e.onSortByTagClick()}},"Tag")))}),p=(a(13),function(e){return o.a.createElement("div",{className:"row text-center options-menu"},o.a.createElement("div",{className:"col-sm"},o.a.createElement(d,{onSearchBarChange:e.onSearchBarChange})),o.a.createElement("div",{className:"col add-task-column"},o.a.createElement("button",{className:"btn btn-primary add-task-button",onClick:function(){e.onShowAddTaskClick()}},"+ Add task")),o.a.createElement("div",{className:"col text-right"},o.a.createElement(m,{onSortByDateClick:e.onSortByDateClick,onSortByPriorityClick:e.onSortByPriorityClick,onSortByTagClick:e.onSortByTagClick})))}),k=(a(14),function(e){var t=e.taskName,a=e.index,n=e.dateDue,r=e.priority,i=e.tag,s=e.complete,l=(e.deleted,e.onCompleteTaskButtonClick),c=e.id,u=e.onDeleteTaskButtonClick,d=e.onTaskNameUpdateChange,m=e.onDateUpdateChange,p=e.onPriorityUpdateChange,k=e.onTagUpdateChange,g=e.animateNoOfTasks,h="High"===r?"danger":"Medium"===r?"warning":"success",f=s?{backgroundColor:"#52525241"}:{},C=s?{textDecoration:"line-through"}:{},y=s?{textDecoration:"line-through",backgroundColor:"#D3D3D3"}:{};return o.a.createElement("div",{className:"row task-item align-middle no-gutters",style:f},o.a.createElement("div",{className:"col-md-1 id-column padding",style:C},o.a.createElement("span",{className:"badge badge-pill badge-warning id",style:C},"#",a)),o.a.createElement("div",{className:"col-md-3 task-name-column text-center padding"},o.a.createElement("input",{type:"text",value:t,maxLength:"25",className:"task-name",style:y,onChange:function(e){d(c,e.target.value)}})),o.a.createElement("div",{className:"col-md-7 middle-column padding"},o.a.createElement("input",{type:"date",value:n,onChange:function(e){m(c,e.target.value)},className:"btn btn-info btn-sm middle-button date-button"}),o.a.createElement("select",{value:r,onChange:function(e){p(c,e.target.value)},className:"btn btn-".concat(h," btn-sm middle-button")},o.a.createElement("option",null,"Low"),o.a.createElement("option",null,"Medium"),o.a.createElement("option",null,"High")),o.a.createElement("input",{type:"text",value:i,maxLength:"15",className:"btn btn-dark btn-sm middle-button",onChange:function(e){k(c,e.target.value)}})),o.a.createElement("div",{className:"col-md-1 text-center padding"},o.a.createElement("div",{className:"btn-group",role:"group"},o.a.createElement("button",{type:"button",className:"btn btn-secondary complete-delete btn-sm",onClick:function(){l(c),g()}},"\u2713"),o.a.createElement("button",{type:"button",className:"btn btn-secondary complete-delete btn-sm",onClick:function(){u(c)}},"\u2717"))))}),g=(a(15),function(e){var t=(""===e.inputValue?e.tasks:e.filteredTasks).filter((function(e){return!e.deleted})).map((function(t,a){return t.deleted?null:o.a.createElement(k,{taskName:t.taskName,dateDue:t.dateDue,priority:t.priority,tag:t.tag,complete:t.complete,deleted:t.deleted,key:t.id,id:t.id,index:a+1,onTaskNameUpdateChange:e.onTaskNameUpdateChange,onDateUpdateChange:e.onDateUpdateChange,onPriorityUpdateChange:e.onPriorityUpdateChange,onTagUpdateChange:e.onTagUpdateChange,onCompleteTaskButtonClick:e.onCompleteTaskButtonClick,onDeleteTaskButtonClick:e.onDeleteTaskButtonClick,animateNoOfTasks:e.animateNoOfTasks})}));return o.a.createElement("div",{className:"row task-list-container"},t)}),h=(a(16),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={id:4,taskName:"",dateDue:"",priority:"Low",tag:"",complete:!1,deleted:!1},e.onFormSubmit=function(e){e.preventDefault()},e.onAddTaskClick=function(t){e.state.taskName&&e.state.dateDue&&e.state.tag&&(e.setState({id:e.state.id+1}),e.props.onAddTaskClick(e.state),e.props.animateNoOfTasks())},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row add-task"},o.a.createElement("div",{className:"col"},o.a.createElement("h4",{className:""},"Enter task details"),o.a.createElement("form",{onSubmit:this.onFormSubmit},o.a.createElement("label",null,"Task name:",o.a.createElement("br",null),o.a.createElement("input",{type:"text",required:!0,minLength:"1",maxLength:"25",className:"form-control",onChange:function(t){return e.setState({taskName:t.target.value})}})),o.a.createElement("br",null),o.a.createElement("label",null,"Date due:",o.a.createElement("br",null),o.a.createElement("input",{type:"date",required:!0,className:"form-control",onChange:function(t){return e.setState({dateDue:t.target.value})}})),o.a.createElement("br",null),o.a.createElement("label",null,"Priority:",o.a.createElement("br",null),o.a.createElement("select",{className:"form-control",required:!0,onChange:function(t){return e.setState({priority:t.target.value})}},o.a.createElement("option",null,"Low"),o.a.createElement("option",null,"Medium"),o.a.createElement("option",null,"High"))),o.a.createElement("br",null),o.a.createElement("label",null,"Tag:",o.a.createElement("br",null),o.a.createElement("div",{className:""},o.a.createElement("input",{type:"text",required:!0,minLength:"1",maxLength:"15",className:"form-control",onChange:function(t){return e.setState({tag:t.target.value})}}))),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.onAddTaskClick},"Add task"))))}}]),a}(o.a.Component)),f=(a(17),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={tasks:[{id:1,taskName:"Marketing report",dateDue:"2020-10-01",priority:"High",tag:"marketing",complete:!1,deleted:!1},{id:2,taskName:"Organise meeting with vendors",dateDue:"2020-11-29",priority:"Low",tag:"logistics",complete:!1,deleted:!1},{id:3,taskName:"Meet James for coffee",dateDue:"2020-12-01",priority:"Medium",tag:"networking",complete:!1,deleted:!1}],addTaskVisible:!1,inputValue:""},e.countNumberOfCurrentTasks=function(){return e.state.tasks.filter((function(e){return!e.complete&&!e.deleted})).length},e.componentDidMount=function(){var e=document.querySelector("h1"),t=document.querySelector(".no-of-tasks");e.addEventListener("mousedown",(function(e){return e.preventDefault()})),t.addEventListener("mousedown",(function(e){return e.preventDefault()}))},e.animateNoOfTasks=function(){var e=document.querySelector(".no-of-tasks");e.classList.add("animate-no-of-tasks"),setTimeout((function(){e.classList.remove("animate-no-of-tasks")}),500)},e.onShowAddTaskClick=function(){e.state.addTaskVisible?e.setState({addTaskVisible:!1}):e.setState({addTaskVisible:!0})},e.onAddTaskClick=function(t){e.setState((function(e){return{tasks:e.tasks.concat(t)}}))},e.onSearchBarChange=function(t){return e.setState({inputValue:t})},e.onSortByDateClick=function(){e.setState((function(e){return e.tasks.sort((function(e,t){return new Date(e.dateDue)-new Date(t.dateDue)}))}))},e.onSortByPriorityClick=function(){e.setState((function(e){return e.tasks.sort((function(e,t){return"High"===e.priority&&"Medium"===t.priority||"High"===e.priority&&"Low"===t.priority||"Medium"===e.priority&&"Low"===t.priority?-1:"Medium"===e.priority&&"Medium"===t.priority||"High"===e.priority&&"High"===t.priority||"Low"===e.priority&&"Low"===t.priority?0:"Medium"===e.priority&&"High"===t.priority||"Low"===e.priority&&"Medium"===t.priority||"Low"===e.priority&&"High"===t.priority?1:0}))}))},e.onSortByTagClick=function(){e.setState((function(e){return e.tasks.sort((function(e,t){var a=e.tag.toUpperCase(),n=t.tag.toUpperCase();return a<n?-1:a>n?1:0}))}))},e.onTaskNameUpdateChange=function(t,a){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object.assign({},e,{taskName:a}):e}))}}))},e.onDateUpdateChange=function(t,a){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object.assign({},e,{dateDue:a}):e}))}}))},e.onPriorityUpdateChange=function(t,a){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object.assign({},e,{priority:a}):e}))}}))},e.onTagUpdateChange=function(t,a){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object.assign({},e,{tag:a}):e}))}}))},e.onCompleteTaskButtonClick=function(t){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object.assign({},e,{complete:!0}):e}))}}))},e.onDeleteTaskButtonClick=function(t){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object.assign({},e,{deleted:!0}):e}))}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.tasks.filter((function(t){return t.taskName.toLowerCase().includes(e.state.inputValue.toLowerCase())}));return o.a.createElement("div",{className:"container-fluid container-padding"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("h1",null,o.a.createElement("i",{className:"fas fa-tasks task-icon"}),"Task List",o.a.createElement("sup",null,o.a.createElement("span",{className:"badge badge-pill badge-warning no-of-tasks"},this.countNumberOfCurrentTasks()))))),o.a.createElement(p,{onShowAddTaskClick:this.onShowAddTaskClick,onShowCompletedClick:this.onShowCompletedClick,onSearchBarChange:this.onSearchBarChange,onSortByDateClick:this.onSortByDateClick,onSortByPriorityClick:this.onSortByPriorityClick,onSortByTagClick:this.onSortByTagClick}),this.state.addTaskVisible?o.a.createElement(h,{onAddTaskClick:this.onAddTaskClick,animateNoOfTasks:this.animateNoOfTasks}):null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col task-list-container"},o.a.createElement(g,{tasks:this.state.tasks,filteredTasks:t,inputValue:this.state.inputValue,onTaskNameUpdateChange:this.onTaskNameUpdateChange,onDateUpdateChange:this.onDateUpdateChange,onPriorityUpdateChange:this.onPriorityUpdateChange,onTagUpdateChange:this.onTagUpdateChange,onCompleteTaskButtonClick:this.onCompleteTaskButtonClick,onDeleteTaskButtonClick:this.onDeleteTaskButtonClick,animateNoOfTasks:this.animateNoOfTasks}))))}}]),a}(o.a.Component));i.a.render(o.a.createElement(f,null),document.querySelector("#root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.0de5c297.chunk.js.map