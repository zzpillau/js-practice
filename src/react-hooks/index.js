
import React from 'react';
import ReactDOM from 'react-dom/client';

// import Counter from './Counter.jsx';
// import Btngroup from './Btngroup.jsx';
import App from './App.jsx';
// import Products from './product-list/Products.jsx';




const body = document.querySelector('body');

console.log('body', body)

const container = document.createElement('div');
container.setAttribute('id', 'container');
body.append(container);

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);

// root.render(<Counter/>);
// root.render(<Btngroup/>);
// root.render(<Products/>);
root.render(<App/>);


