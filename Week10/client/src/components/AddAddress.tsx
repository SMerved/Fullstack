import { useMutation} from '@apollo/client';
import CreateAddress from '../mutations/CreateAddress';
import { useState } from 'react';

function AddAddress() {
    const initialState = {street:'', number:0}
    const [address, setAddress] = useState(initialState)
    const [mutateFunction, {loading, error, data }] = useMutation(CreateAddress)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const handleOnSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    mutateFunction({
      variables:{
        input: address
      }
    })
    setAddress(initialState)
  }
  return (
    <>
    <form onSubmit={handleOnSubmit} style={{margin:30}}>
        <input type='text' style={{margin:5}} placeholder='Name' value={address?.street} onChange={(evt)=>{ setAddress({...address, street: evt.target.value})}}></input>
        <input type='number' style={{margin:5}} placeholder='City' value={address?.number} onChange={(evt)=>{ setAddress({...address, number: evt.target.valueAsNumber})}}></input>
        <input type='submit' style={{margin:5}} value={"Create Address"}/>
    </form>
    </>
  )
}

export default AddAddress