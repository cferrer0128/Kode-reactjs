import React from 'react'

import {connect} from "react-redux";
import {fetchTasks} from "../actions/taskAction"

@connect((store) => {
  return {
    tasks:store.tasks.tasks
  }
})

export default class TaskList extends React.Component {

componentWillMount(){
      this.props.dispatch(fetchTasks());
    }

    
render(){
  
  
    function getHtmlValues(value){
        return <h1>Hello {value}</h1>
    }
    const styles = {
        marginTop: "3px",
        background: "#f1b6b6",
        height:"42px"
        
    };

    const stylesNM = {
        
        marginTop: "3px",
        height:"42px"
        
    };


        return (<tasks>
            <form className="well">
                <div className="form-group">
                    <input className="form-control" name="title" placeholder="Add Task..." type="text"  />     
                </div>  
            </form>
            <div className="task-list">
                   {
                       this.props.tasks.map(task => {
                            if(task.isdone)
                                return <div key={task._id}  style={styles} >
                                            <div className="col-md-1">
                                                <input type="checkbox" checked={task.isdone}/>
                                            </div>
                                            <div className="col-md-7">
                                                    {task.Title}
                                            </div> 
                                            <div className="col-md-4">
                                                <input className="btn btn-danger" type="button" value="Delete"/>    
                                            </div>
                                    </div>

                            else return <div key={task._id}  style={stylesNM} >
                                    <div className="col-md-1">
                                        <input type="checkbox" checked={task.isdone}/>
                                    </div>
                                    <div className="col-md-7">
                                            {task.Title}
                                    </div> 
                                    <div className="col-md-4">
                                        <input className="btn btn-danger" type="button" value="Delete"/>    
                                    </div>
                                </div>

                            
                       }
                        ) 
                    }
                </div></tasks>);
            
            
    }
}

