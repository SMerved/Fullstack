import { person } from "./App"

const DeletePerson = ({p} : {p:person}) => {
    const handleDelete = () => {
        
        
        fetch(`http://localhost:3001/person/${p.id}`, {
  method: 'DELETE',
  headers: {
      'Content-Type':'application/json'
  },
  body: JSON.stringify(p)
  })
  .then(res => res.json())
  .then(json => console.log(json))
        
    }
    return (
        <>
            <button 
            style={{backgroundColor:"maroon", color:"white"}}
            onClick={handleDelete}>
                Delete Person</button>
        </>
    )
}
export default DeletePerson