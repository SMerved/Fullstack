import { useMutation} from '@apollo/client';
import CreatePerson from '../mutations/CreatePerson';
import GetPeople from '../queries/GetPeople';
import { useState } from 'react';

function AddPerson() {
    const initialState = {name:'', age:0, city:''}
    const [person, setPerson] = useState(initialState)
    const [mutateFunction, {loading, error, data }] = useMutation(CreatePerson, {
    refetchQueries:[GetPeople]
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const handleOnSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    mutateFunction({
      variables:{
        input: person
      }
    })
    setPerson(initialState)
  }
  return (
    <>
    <form onSubmit={handleOnSubmit} style={{margin:30}}>
        <input type='text' style={{margin:5}} placeholder='Name' value={person?.name} onChange={(evt)=>{ setPerson({...person, name: evt.target.value})}}></input>
        <input type='text' style={{margin:5}} placeholder='City' value={person?.city} onChange={(evt)=>{ setPerson({...person, city: evt.target.value})}}></input>
        <input type='submit' style={{margin:5}} value={"Create Person"}/>
    </form>
    </>
  )
}

export default AddPerson