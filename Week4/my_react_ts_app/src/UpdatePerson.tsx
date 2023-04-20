import { useState } from "react"
import { person } from "./App"

const UpdatePerson = ({setUpdate, update} : {setUpdate:React.Dispatch<React.SetStateAction<boolean>>, update: boolean}) => {
    const [p, setP] = useState<person>({id:0, name:'', age:0, city:'city'});
    const onChangePerson = (evt:React.ChangeEvent<HTMLInputElement>) => {
        const id:string = evt.target.id
        setP({...p, [id]: evt.target.value})
    }
    const handleUpdate = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        fetch(`http://localhost:3001/person/${p.id}`, {
  method: 'PUT',
  headers: {
      'Content-Type':'application/json'
  },
  body: JSON.stringify(p)
  })
  .then(res => res.json())
  .then(json => {setUpdate(!update)})
        
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input placeholder="id" value={p.id} onChange={onChangePerson} id="id"></input>
                <input placeholder="Name" value={p.name} onChange={onChangePerson} id="name"></input>
                <input placeholder="Age" value={p.age} onChange={onChangePerson} id="age" type="number"></input>
                <input placeholder="City" value={p.city} onChange={onChangePerson} id="city"></input>
                <input type="submit" value={"Update Person"}/>
            </form >
        </div>
    )
}
export default UpdatePerson