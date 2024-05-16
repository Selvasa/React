import React from 'react'
// import{log} from 'console';
import { Route, BrowserRouter, Routes, Link, useParams } from 'react-router-dom'
import { About } from './about'


export const Contact = () => {

  return (
    <div>
      <h2 style={{color:'green'}}>Contact Component</h2>
      <hr />
      <About/>
    </div>

  )
}
