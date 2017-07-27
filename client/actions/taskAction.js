import axios from 'axios';

export function fetchTasks(){

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
}