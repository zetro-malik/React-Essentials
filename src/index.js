import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './examples/classComponent';
import Car2 from './examples/functionalComponents';

const name = "zeeshan azhar"

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car2 dataX = {name}/>);