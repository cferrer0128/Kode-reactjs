import axios from 'axios';

export function fetchTasksApi(){

    return function(dispatch){
        return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>{
            dispatch({type:"FETCH_TASK_FULFILLED",payload:response.data});
        })
        .catch((err)=>{
            dispatch({type:"FETCH_TASK_REJECTED",payload:err})
        })

    }
}