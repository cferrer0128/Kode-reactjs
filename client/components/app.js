import React from "react"
import ReactDom from "react-dom"
import {connect} from "react-redux";
import {fetchTasks} from "../actions/taskAction"
import Navigationbar from './Navigationbar'



export default class App extends React.Component {

   
   
    render(){

      return (<div >
          <Navigationbar  />
          {this.props.children}
        </div>)
          
    }
}



