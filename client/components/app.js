import React from "react"
import ReactDom from "react-dom"
import TaskList from "./TaskList"
import {connect} from "react-redux";
import {fetchTasks} from "../actions/taskAction"
import {Route , Link  } from 'react-router-dom'

@connect((store) => {
  return {
    tasks:store.tasks.tasks
  }
})

export default class App extends React.Component {


    componentWillMount(){
      this.props.dispatch(fetchTasks());
    }
    render(){

        function handleClick(e) {
          e.preventDefault();
          console.log('The link was clicked.');
      }

    return <div>
      <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button aria-controls="navbar" 
            aria-expanded="false" 
            className="navbar-toggle collapsed" 
            data-target="#navbar" data-toggle="collapse" type="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">reactJs Project</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to={'/'}>Home</Link></li>
            
            <li><Link to={'/tasks'}>Tasks</Link></li>
           
            <li><a>Flights</a></li>
          </ul>
           <ul class="nav navbar-nav navbar-right">
            <li><a>Profile</a></li>
          
          </ul>
        </div>
      </div>
    </nav>  
    <div className="container">
          <Route exact={true} path="/" render={() =>(
              <h1>Welcome home!</h1>
          )}/>
          <Route path="/tasks"  component={tasklist}/>
         
    </div>
    </div>
  }
}

const tasklist =({match}) =>{
  return <TaskList tasks={this.props.tasks}/>
}

