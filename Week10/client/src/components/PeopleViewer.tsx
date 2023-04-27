import { useQuery} from '@apollo/client';
import GetPeople from '../queries/GetPeople';
import { Person } from '../types';

function PeopleViewer() {
  const { loading, error, data } = useQuery(GetPeople);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const people : Person[]= data.people
  return (
    <>
    <div style={{display:'flex'}}>
    {people.map((person)=>
    <div style={{margin:30}}>
      <h3>{person.name}</h3>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
      {person.addresses?.map((address)=>
      <p>Street Address: {address.street} {address.number}</p>
      )}
      </div>
    )}
    </div>
    </>
  )
}

export default PeopleViewer