import React, { createContext, useState } from 'react'
import { Route, BrowserRouter, Routes, Link, useParams } from 'react-router-dom'
import { Contact } from './contact'


export const valueContaxt=createContext();

export const Home = (props) => {
  
    const [state,setState]=useState(1)

    return (
        <valueContaxt.Provider value={state}>
            <h2 style={{color:'red'}}>Home Component my age is {props.count}</h2>
            <button onClick={()=>setState(e=>e+1)}>Increment</button>
            <hr/>
            <Contact/>
            {/* <Newcomp name={'tamil'} /> */}
        </valueContaxt.Provider>
    )
}

