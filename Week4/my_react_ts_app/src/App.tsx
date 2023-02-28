import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ReactElement } from 'react'
import PersonViewer from './PersonViewer'
import AddPerson from './AddPerson'

type person = {id:number, name:string, age:number, city:string}
function App() {

  return (
    <div className="App">
      <AddPerson/>
      <PersonViewer/>
    </div>
  )
}

export default App
export type {person}
