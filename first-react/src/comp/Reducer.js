import { Action } from '@remix-run/router';
import React from 'react'
function initFun(state,Action){
   console.log(state,Action);
   switch (Action.type) {
      case 'in':
         return state+1
         break;
      case 'de':
         return state-1
         break;
      default:
         break;
   }
};
let val={age:5};
function initval(){
   return val.age+5
}
// export const Reducer = () => {
//    const[todo,setTodo]=React.useReducer(initFun,val,initval)
//    console.log(todo);
//   return (
//     <div>
//       <hr/>
//     </div>
//   )
// }
