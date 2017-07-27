
export default function reducer(
state ={
    tasks:[],
    fetching:false,
    fetched:false,
    error:null
},action){
    switch(action.type){
        case "FETCH_TASK":{
            return {...state, fetching:true}
            
        }
        case "FETCH_TASK_FULFILLED":{
            return {...state, fetching:false , fetched:true,tasks:action.payload}
        }
        case "FETCH_TASK_REJECTED":{
            return {...state, fetching:false, error:action.payload}
        }
    }
    return state;
}