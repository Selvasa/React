import React,{useReducer} from 'react'

function firstFun(state,action){
switch(action.type){
    case'inc':
    return state+1
    case'dec':
    return state-1
    }
}
// export const Exercise= () => {
//     const[states,setStates]=useReducer(firstFun,0)
//   return (
//     <div>
//         <h2>{states}</h2>
//         <h2>This is reducer function</h2>
//         <button onClick={()=>{setStates({type:'inc'})}}>Increment</button>
//         <button onClick={()=>{setStates({type:'dec'})}}>Decrement</button>
//         <hr/>
//     </div>
//   )
// }
