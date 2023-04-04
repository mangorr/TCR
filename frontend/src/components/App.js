import React from 'react'
import HomePage from './homepage'
import About from "./homepage/About";
import MedicalPage from '../components/medical/public/index';
import DoctorPage from './medical/doctor/index';
//导入路由的核心组件
import {HashRouter, BrowserRouter as Router, Link} from "react-router-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom';


function App() {
  return (
    <div className="App">
        <HomePage/>
    </div>,


    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/medical" element={<MedicalPage />} />
            <Route path="/medical/doctor" element={<DoctorPage />} />
        </Routes>
    </Router>

  );
}



// ReactDOM.render((
//     <Router>
//         <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/medical" element={<MedicalPage />} />
//         </Routes>
//     </Router>
// ), document.body)


export default App;
