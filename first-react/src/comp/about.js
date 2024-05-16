import React, { useContext, useReducer } from 'react'
import { Route, BrowserRouter, Routes, Link, useParams } from 'react-router-dom'
import { Help } from './help';
import { valueContaxt } from './Home';


export const About = (props) => {
    const value = useContext(valueContaxt)
    function initFun(ty, action) {
        switch (action.type) {
            case 'dec':
                return ty - 1
        }
    }
    const [state, dispatch] = useReducer(initFun, value)
    let { id } = useParams();
    return (
        <div>
            <h2 style={{ color: 'pink' }}>About  Component {state}</h2>
            <button onClick={() => { dispatch({ type: "dec" }) }}>Decrement</button>

            <hr />
            <Help />
        </div>
    )
}
