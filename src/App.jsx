// import Todo from "./components/Todo";
// import Title from "./components/Title";
// import Modal from "./components/Modal";
// import React, { useState, useEffect } from "react";

// function App() {
  // const [showModal, setShowModal] = useState(false);

  // function cancel() {
  //   setShowModal(false);
  //   console.log("cancel");
  // }
  // function confirm() {
  //   setShowModal(false);
  //   console.log("confirm");
  // }
  // function todoDelete() {
  //   setShowModal(true);
  // }

  // useEffect(() => {
  //  console.log("ola")
  // }, [showModal])
  // return (
  //   <div>
  //     <Title />
  //     <div>
  //       <input type="text" />
  //       <button>add todo</button>
  //     </div>
  //     <div className="todo__wrapper">
  //       <Todo del={todoDelete} name="Finish react" />
  //       <Todo del={todoDelete} name="Finish frontend simplified" />
  //       <Todo del={todoDelete} name="Finish my Web app" />
  //     </div>
  //     {showModal && (
  //       <Modal
  //         cancel={cancel}
  //         confirm={confirm}
  //         title=" Are you sure you want to delete?"
  //       />
  //     )}
  //   </div>
  // );
// }


import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from './components/Nav'
import Users from "./pages/Users";

function App() {
 
  return (
    <div>
     <Router>
   
      <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path="/users/:id" element={<Users/>}/>
      </Routes>
      </Router> 
    </div>
  );



}
export default App;
