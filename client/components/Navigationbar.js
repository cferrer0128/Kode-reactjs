
import React from 'react'
//import { Link , Match } from 'react-router'
import TaskList from "./TaskList"
import Home from "./Home"
import { Router , Route , IndexRoute , 
    browserHistory , Link } from 'react-router'

export default class Navigationbar extends React.Component {

    render(){
    
        return  (
        
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
                <a className="navbar-brand" href="">reactJs Project</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><Link to="home">Home</Link></li>
                    
                    <li><Link to="tasks">Tasks</Link></li>
                
                     <li><Link to="flights">Flights</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a>Profile</a></li>
                
                </ul>
                </div>
               
            </div>
        </nav>)
        
        
    }
}

