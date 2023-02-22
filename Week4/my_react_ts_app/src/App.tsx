import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ReactElement } from 'react'

type inProps = {name:string, setName: React.Dispatch<React.SetStateAction<string>>}

function App() {
  const [name, setName] = useState<string>("")

  return (
    <div className="App">
      <PersonViewer/>
    </div>
  )
}

const PersonViewer = () => {
  const [people, setPeople] = useState<person[]>([])
  type person = {id:number, name:string, age:number, city:string}
  
  useEffect(()=>{
    fetch("http://localhost:3008/person")
    .then((res)=> res.json())
    .then((person) => setPeople(person))
  })
  return (
    <div>
      <table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  {people.map((person:person)=>
  <tr>
    <td>{person.name}</td>
    <td>{person.age}</td>
    <td>{person.city}</td>
  </tr>
  )}
</table>
    </div>
  )
}


/*const Input = ({inProps:inProps}:(inProps:inProps)) =>{
    return(
      <div>
        <input value={inProps.name} onChange={(evt) => inProps.setName(evt.target.value)}></input>
      </div>
    )
}
const Output = ({name}:(name:string)) =>{
  return(
    <div>
      <p>{name}</p>
    </div>
  )
}*/

export default App
