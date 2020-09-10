(this["webpackJsonptask-list"]=this["webpackJsonptask-list"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),i=a.n(o),l=a(1),c=a(2),s=a(4),u=a(3),m=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onSearchBarChange=function(t){console.log(t.target.value),e.props.onSearchBarChange(t.target.value)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search task",onChange:this.onSearchBarChange}),r.a.createElement("i",{className:"search icon"}))}}]),a}(r.a.Component),d=(a(12),function(e){return r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort tasks by"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},r.a.createElement("div",{className:"dropdown-item sort-item",onClick:function(){console.log("sort by date!"),e.onSortByDateClick()}},"Due date"),r.a.createElement("div",{className:"dropdown-item sort-item",onClick:function(){console.log("sort by priority!"),e.onSortByPriorityClick()}},"Priority"),r.a.createElement("div",{className:"dropdown-item sort-item",onClick:function(){console.log("sort by tag!"),e.onSortByTagClick()}},"Tag")))}),k=(a(13),function(e){return r.a.createElement("div",{className:"row text-center options-menu"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("button",{className:"btn btn-primary options-menu-button",onClick:function(){e.onShowAddTaskClick()}},"+ Add task")),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(m,{onSearchBarChange:e.onSearchBarChange})),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(d,{onSortByDateClick:e.onSortByDateClick,onSortByPriorityClick:e.onSortByPriorityClick,onSortByTagClick:e.onSortByTagClick})))}),p=(a(14),function(e){var t=e.taskName,a=e.dateDue,n=e.priority,o=e.tag,i=e.complete,l=(e.deleted,e.onCompleteTaskButtonClick),c=e.id,s=e.onDeleteTaskButtonClick,u="High"===n?"danger":"Medium"===n?"warning":"success",m=i?{backgroundColor:"#52525241"}:{},d=i?{textDecoration:"line-through"}:{};return r.a.createElement("div",{className:"row task-item align-middle",style:m},r.a.createElement("div",{className:"col text-center",style:d},r.a.createElement("span",{className:"badge badge-pill badge-warning id",style:d},"#",c),r.a.createElement("span",{className:"task-name"},t)),r.a.createElement("div",{className:"col text-center middle-buttons"},r.a.createElement("button",{className:"btn btn-info"},a),r.a.createElement("button",{className:"btn btn-".concat(u)},n),r.a.createElement("button",{className:"btn btn-dark"},o)),r.a.createElement("div",{className:"col text-center"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("button",{type:"button",className:"btn btn-secondary complete-delete",onClick:function(){l(c)}},"\u2713"),r.a.createElement("button",{type:"button",className:"btn btn-secondary complete-delete",onClick:function(){s(c)}},"\u2717"))))}),y=(a(15),function(e){var t=(""===e.inputValue?e.tasks:e.filteredTasks).map((function(t){if(!1===t.deleted)return r.a.createElement(p,{taskName:t.taskName,dateDue:t.dateDue,priority:t.priority,tag:t.tag,complete:t.complete,deleted:t.deleted,key:t.id,id:t.id,onCompleteTaskButtonClick:e.onCompleteTaskButtonClick,onDeleteTaskButtonClick:e.onDeleteTaskButtonClick})}));return r.a.createElement("div",{className:"ui list task-list-container"},t)}),b=(a(16),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={id:3,taskName:"",dateDue:"",priority:"Low",tag:"",complete:!1,deleted:!1},e.onFormSubmit=function(e){e.preventDefault()},e.onAddTaskClick=function(t){e.setState({id:e.state.id+1}),e.props.onAddTaskClick(e.state)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row add-task"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",{className:""},"Enter task details"),r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("label",null,"Task name:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",required:!0,minlength:"1",maxlength:"25",className:"form-control",onChange:function(t){return e.setState({taskName:t.target.value})}})),r.a.createElement("br",null),r.a.createElement("label",null,"Date due:",r.a.createElement("br",null),r.a.createElement("input",{type:"date",required:!0,className:"form-control",onChange:function(t){return e.setState({dateDue:t.target.value})}})),r.a.createElement("br",null),r.a.createElement("label",null,"Priority:",r.a.createElement("br",null),r.a.createElement("select",{className:"form-control",required:!0,onChange:function(t){return e.setState({priority:t.target.value})}},r.a.createElement("option",null,"Low"),r.a.createElement("option",null,"Medium"),r.a.createElement("option",null,"High"))),r.a.createElement("br",null),r.a.createElement("label",null,"Tag:",r.a.createElement("br",null),r.a.createElement("div",{className:""},r.a.createElement("input",{type:"text",required:!0,minlength:"1",maxlength:"15",className:"form-control",onChange:function(t){return e.setState({tag:t.target.value})}}))),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",onClick:this.onAddTaskClick},"Add task"))))}}]),a}(r.a.Component)),g=(a(17),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={tasks:[{id:1,taskName:"Make report",dateDue:"2020-10-01",priority:"High",tag:"marketing",complete:!1,deleted:!1},{id:2,taskName:"Build deck",dateDue:"2020-11-29",priority:"Low",tag:"logistics",complete:!1,deleted:!1}],addTaskVisible:!1,inputValue:""},e.countNumberOfCurrentTasks=function(){return e.state.tasks.filter((function(e){return!e.complete&&!e.deleted})).length},e.onShowAddTaskClick=function(){e.state.addTaskVisible?e.setState({addTaskVisible:!1}):e.setState({addTaskVisible:!0})},e.onAddTaskClick=function(t){e.setState((function(e){return{tasks:e.tasks.concat(t)}}))},e.onSearchBarChange=function(t){return e.setState({inputValue:t})},e.onSortByDateClick=function(){e.setState((function(e){return e.tasks.sort((function(e,t){return new Date(e.dateDue)-new Date(t.dateDue)}))}))},e.onSortByPriorityClick=function(){e.setState((function(e){return e.tasks.sort((function(e,t){return"High"===e.priority&&"Medium"===t.priority||"High"===e.priority&&"Low"===t.priority||"Medium"===e.priority&&"Low"===t.priority?-1:"Medium"===e.priority&&"Medium"===t.priority||"High"===e.priority&&"High"===t.priority||"Low"===e.priority&&"Low"===t.priority?0:"Medium"===e.priority&&"High"===t.priority||"Low"===e.priority&&"Medium"===t.priority||"Low"===e.priority&&"High"===t.priority?1:void 0}))}))},e.onSortByTagClick=function(){e.setState((function(e){return e.tasks.sort((function(e,t){var a=e.tag.toUpperCase(),n=t.tag.toUpperCase();return a<n?-1:a>n?1:0}))}))},e.onCompleteTaskButtonClick=function(t){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object.assign({},e,{complete:!0}):e}))}}))},e.onDeleteTaskButtonClick=function(t){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object.assign({},e,{deleted:!0}):e}))}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.tasks.filter((function(t){return t.taskName.toLowerCase().includes(e.state.inputValue.toLowerCase())}));return r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,r.a.createElement("i",{class:"fas fa-tasks task-icon"}),"Task List",r.a.createElement("sup",null,r.a.createElement("span",{className:"badge badge-pill badge-warning no-of-tasks"},this.countNumberOfCurrentTasks()))))),r.a.createElement(k,{onShowAddTaskClick:this.onShowAddTaskClick,onShowCompletedClick:this.onShowCompletedClick,onSearchBarChange:this.onSearchBarChange,onSortByDateClick:this.onSortByDateClick,onSortByPriorityClick:this.onSortByPriorityClick,onSortByTagClick:this.onSortByTagClick}),this.state.addTaskVisible?r.a.createElement(b,{onAddTaskClick:this.onAddTaskClick}):null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(y,{tasks:this.state.tasks,filteredTasks:t,inputValue:this.state.inputValue,onCompleteTaskButtonClick:this.onCompleteTaskButtonClick,onDeleteTaskButtonClick:this.onDeleteTaskButtonClick}))))}}]),a}(r.a.Component));i.a.render(r.a.createElement(g,null),document.querySelector("#root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.201799d1.chunk.js.map