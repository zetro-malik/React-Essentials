// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Car from './examples/classComponent';
// import Car2 from './examples/functionalComponents';
// import Goal from './examples/conditional';
// import Garage from './examples/listRender';
// import MyForm from './examples/form';


// const name = "zeeshan azhar"

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// //root.render(<Car2 dataX = {name}/>);
// //root.render(<Goal isGoal = {true}/>);
// root.render(<MyForm/>);


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blogs from "./pages/blog";
import Contact from "./pages/contact";
import NoPage from "./pages/nopage";

import './app.css'

import AppWithMemo from "./examples/userMemo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWithMemo />);