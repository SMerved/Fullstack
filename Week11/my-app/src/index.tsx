import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Table from './Table';
import reportWebVitals from './reportWebVitals';

const people = [
  {id:1, name: "Helle", age: 20 },
  {id:2, name: "Ib", age: 30 },
  {id:3, name: "Bodil", age: 40 },
  {id:4, name: "Yasmin", age: 32 },
];
const columns = ["id", "name", "age"]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Table>
      <div>
      </div>
      <div>
          
        </div>
      </Table>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
