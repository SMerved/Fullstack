import { useMutation} from '@apollo/client';
import AddPersonToAddress from '../mutations/AddPersonToAddress';
import { useQuery } from '@apollo/client';
import GetAddresses from '../queries/GetAddresses';
import { Address } from '../types';

function AddPToAddress({setShowAddresses, personId}:{setShowAddresses:React.Dispatch<React.SetStateAction<boolean>>, personId:string}) {
  const { loading, error, data } = useQuery(GetAddresses);
  const [mutateFunction] = useMutation(AddPersonToAddress, {
    refetchQueries:[GetAddresses]
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const addresses : Address[]= data.addresses

  const handleAddAddress = (addressId:string) =>{
    mutateFunction({
      variables:{
        addPersonToAddressId: addressId,
        input: personId
      }
    })
  }
  return (
    <>
     {addresses.map((address)=>
      <div style={{padding:30, margin:5, border:'solid', textAlign:'center'}}>
        <p>Street Address: {address.street} {address.number}</p>
        {address.people?.map((person)=>
        <>
        <h4>Person:</h4>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        </>
        )}
        <button onClick={()=>handleAddAddress(address.id)}>Add this address</button>
        </div>
      )}
      </>
  )
}

export default AddPToAddress