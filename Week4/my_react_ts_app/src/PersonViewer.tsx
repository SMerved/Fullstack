import { useEffect, useState } from "react"
import { person } from "./App"
import AddPerson from "./AddPerson"
import DeletePerson from "./DeletePerson"

const PersonViewer = () => {
    const [people, setPeople] = useState<person[]>([])
    const [update, setUpdate] = useState<boolean>(false)
    
    useEffect(()=>{
      fetch("http://localhost:3001/person")
      .then((res)=> res.json())
      .then((persons) => setPeople(persons))
    }, [update])
    return (
      <div>
        <AddPerson/>
        <table>
          <tbody>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
    {people.map((p:person)=>
    <tr>
      <td>{p.name}</td>
      <td>{p.age}</td>
      <td>{p.city}</td>
      <td><DeletePerson p={p}/></td>
    </tr>
    )}
    </tbody>
  </table>
      </div>
    )
  }
  export default PersonViewer