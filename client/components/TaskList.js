import React from 'react'
import {connect} from "react-redux";
import {fetchTasks} from "../actions/taskAction"

@connect((store) => {
  return {
    tasks:store.tasks.tasks
  }
})

export default class TaskList extends React.Component {

   constructor(props) {
    super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }
//
    handleChange(event) {
        console.log(event.target.value);
        this.setState({value: event.target.value});
    }
    handleSubmit (event) {
           event.preventDefault();
        let newTask = {
            title:this.state.value,
            isdone:false,
            isdeleted:false
            
        }
        console.log('this is data: ' + JSON.stringify(newTask));
        this.props.dispatch(fetchTasks('add',null,newTask));
    }

    handleClick (task) {
        console.log('this is:', task._id);
        this.props.dispatch(fetchTasks('delete',task._id,null));
    }
    componentWillMount(){
        this.props.dispatch(fetchTasks('get',null,null));
    }

    
 
render(){
  
  
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
                    <input className="form-control" name="title" placeholder="Add Task..." 
                    type="text"  onChange={this.handleChange}/>     
                    <input className="btn btn-active" type="button" value="Add" onClick={this.handleSubmit}/>
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
                                                    {task.title}
                                            </div> 

                                            <div className="col-md-4">
                                                <input className="btn btn-danger" type="button" 
                                                value="Delete" onClick={this.handleClick.bind(this,task)}/>    
                                            </div>
                                    </div>

                            else return <div key={task._id}  style={stylesNM} >
                                    <div className="col-md-1">
                                        <input type="checkbox" checked={task.isdone}/>
                                    </div>
                                    <div className="col-md-7">
                                            {task.title}
                                    </div> 
                                    <div className="col-md-4">
                                        <input className="btn btn-danger" type="button" value="Delete"
                                        onClick={this.handleClick.bind(this,task)}/>    
                                    </div>
                                </div>

                            
                       }
                        ) 
                    }
                </div></tasks>);
            
            
    }
}

