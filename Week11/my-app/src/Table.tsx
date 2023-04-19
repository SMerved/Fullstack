import React from 'react';
import './App.css';
import { JsxElement } from 'typescript';
type Props = {
  headers : JsxElement
  rows : JsxElement
}
function Table({children}:HTMLElement) {
  return (
    <div>
      <table>
        
        {children}
      </table>
    </div>
  );
}

export default Table;
