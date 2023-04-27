import { useMutation} from '@apollo/client';
import { Person } from '../types';
import CreatePerson from '../mutations/CreatePerson';
import GetPeople from '../queries/GetPeople';
import { useState } from 'react';

function AddPerson() {
    const [person, setPerson] = useState({name:'', age:0, city:''})
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
  }
  return (
    <>
    <form onSubmit={handleOnSubmit}>
        <input type='text' value={person?.name} onChange={(evt)=>{ setPerson({...person, name: evt.target.value})}}></input>
        <input type='text' value={person?.city} onChange={(evt)=>{ setPerson({...person, city: evt.target.value})}}></input>
        <input type='submit' value={"Create Person"}/>
    </form>
    </>
  )
}

export default AddPerson