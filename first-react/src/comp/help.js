import React, { useMemo, useState, useContext, useEffect } from 'react'
import { Route, BrowserRouter, Routes, Link, useParams } from 'react-router-dom'
import { Exercise } from './exce';
import { valueContaxt } from './Home';

export const Help = () => {
  let { id } = useParams();
  return (
    <div>
      <h2 style={{ color: 'blue' }}>Help Component{id}</h2>
      <hr />
      <HelpOne />
    </div>
  )
}

export const HelpOne = () => {
  let { id } = useParams();

  return (
    <div>

      <h2 style={{ color: "InactiveCaptionText" }}>Help Component One{id}</h2>
      <hr />
      <HelpTwo />
    </div>

  )
}

export const TodoList = () => {

  const value = useContext(valueContaxt)

  const [listData, setListData] = useState([])


  let apiCall = 'https://jsonplaceholder.typicode.com/users';
  console.log(apiCall);

  useEffect(() => {
    fetch(apiCall)
    .then(data => data.json())
    .then(a => setListData(a))
  }, [])
  console.log(listData);
  // const [todoArray, setTodoArray] = useState([])

  // const addTodo = () => {
  //   setTodoArray([...todoArray, inputValue])
  //   setInputValue('')
  // };
  // const value=

  // function OneFun(a){
  //   return setInputValue(a+1)
  // }
  return (
    <div>
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: "tomato" }}>User Information</h2>
        <h3>{value}</h3>
        <table style={{ width: '100%',gap:'10px', textAlign: 'left',lineHeight: "30px"}}>
          <thead >
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Street</th>
              <th>City</th>

            </tr>
          </thead>
          <tbody >
            {listData.map((d, i) => (
              <tr key={i}>
                <td >{d.id}</td>
                <td>{d.name}</td>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.website}</td>
                <td>{d.phone}</td>
              </tr>
            ))

            }

          </tbody>
        </table>
        {/* <h2>Todo list example</h2>
        <input type='text' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
        <button onClick={() => { addTodo() }}>Submit</button>
        <ul style={{listStyleType:'none'}}>
          {todoArray.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul> */}

      </div>
      <hr />

      {/* <Exercise/>

      <hr/> */}
    </div>
  )
}

export const HelpTwo = () => {
  let { id } = useParams();
  const [count, setCount] = useState(0)
  return (<>
    <h2 style={{ color: "orange" }}>Help Component Two{id}</h2>
    <hr />
    <TodoList />
    {/* <h4>{console.log(Math.random())}</h4>
    <h4>{count}</h4>
    <button onClick={()=>{setCount(d=>d+1)}}>click</button> */}
  </>
  )
}
