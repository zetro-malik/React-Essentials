import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './examples/classComponent';
import Car2 from './examples/functionalComponents';
import Goal from './examples/conditional';
import Garage from './examples/listRender';
import MyForm from './examples/form';


const name = "zeeshan azhar"

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
//root.render(<Car2 dataX = {name}/>);
//root.render(<Goal isGoal = {true}/>);
root.render(<MyForm/>);