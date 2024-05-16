import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Home } from "./comp/Home";
import { Help,HelpOne,HelpTwo } from "./comp/help";
import { Contact } from "./comp/contact";
import { About } from "./comp/about";
import {Route,BrowserRouter,Routes,Link} from'react-router-dom'
// import { HireOrderFun } from './comp/hoc'
// import { Reducer } from "./comp/Reducer";
import { TodoList } from "./comp/help";

// const AboutComp = HireOrderFun(About);
// const HomeComp = HireOrderFun(Home);

function App() {
  const [count, setCount] = React.useState({ name: "tamil", age: 0 });
    // var increse=()=>{
  //   setCount((d)=>({
  //     ...d,
  //     age:d.age+1
  //   }))
  // }
  return (
    <div className="App">

      

      {/* <h1>this is react counter {count.age}</h1>
      <button
        onClick={() => {
          setCount((d) => ({ ...d, age: d.age + 1, }));
        }}
      >
        Increment
      </button> */}
{/* <BrowserRouter><br/>
      <Link to={`/${JSON.stringify(count)}`} >Home</Link>&emsp;
      <Link to='/contact/101'>Contact</Link>&emsp;
      <Link to='/about/102'>About</Link>&emsp;
      <Link to='/help/103'>Help</Link>&emsp;
      <Link to='/help/one/104'>Help One</Link>&emsp;
      <Link to='/help/two/105'>Help Two</Link>&emsp;
      <Link to='/reducer'>Reducer</Link>&emsp;
<Routes>
    <Route path={"/:asd"} element={  <HomeComp/>}/>
    <Route path="/contact/:id" element={  <Contact/>}/>
    <Route path="/about/:id" element={  <AboutComp/>}/>
    <Route path="/help/:id" element={  <Help/>}/>
    <Route path="/help">
    <Route path="one/:id" element={  <HelpOne/> }/>
    <Route path="two/:id" element={  <HelpTwo/> }/>
    </Route>
    <Route path="/reducer" element={  <Reducer/>}/>
</Routes>
    
      
      
      

</BrowserRouter> */}

<Home/>





{/* <Reducer/> */}
    </div>
  );
}

export default App;
