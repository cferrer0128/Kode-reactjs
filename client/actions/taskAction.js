import axios from 'axios';
import $ from 'jquery'

export function fetchTasks(option , id , task){

    
    //console.log('before option ' + option +' Task ' + JSON.stringify(task))
    if(option == "get")
        return function(dispatch){
            return axios.get('/api/tasks')
            .then((response)=>{
                console.log(response);
                dispatch({type:"FETCH_TASK_FULFILLED",payload:response.data});
            })
            .catch((err)=>{
                dispatch({type:"FETCH_TASK_REJECTED",payload:err})
            })

        }
    else if (option =="delete")
        return function(dispatch){
            return axios.delete('/api/task/'+ id)
            .then((response)=>{
                console.log('Response from delete: ' + JSON.stringify(response));
                //dispatch({type:"FETCH_TASK_FULFILLED",payload:response.data});
            })
            .catch((err)=>{
                dispatch({type:"FETCH_TASK_REJECTED",payload:err})
            })

        }
    else if (option =="add"){
        
        return function(dispatch){
            //task.isdeleted = false;
            console.log('Before Response from post: ' + JSON.stringify(task));
            return axios.post('/api/tasks',task)
               .catch((err)=>{
                console.log('Error Response from post: ' + err);
                dispatch({type:"FETCH_TASK_REJECTED",payload:err});
            })

        }

    }
        
}