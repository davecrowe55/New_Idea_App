import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { Button } from '@material-ui/core';

// function App() {
//   return (
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//   );
// }

// ReactDOM.render(<App />, document.querySelector('#app'));

function Welcome(props) {
  return <h1>G'day, {props.name}</h1>;
}

const element = <Welcome name="my G" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
 

function tick() {
  <h1>Hello, world</h1>;
  const element = (
    <div id>
      <h1>Hello, world</h1>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element,  document);
}

setInterval(tick, 5000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
