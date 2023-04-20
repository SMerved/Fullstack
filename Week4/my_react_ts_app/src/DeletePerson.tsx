import { person } from "./App"

const DeletePerson = ({p, setUpdate, update} : {p:person, setUpdate:React.Dispatch<React.SetStateAction<boolean>>, update: boolean}) => {
    const handleDelete = () => {
        fetch(`http://localhost:3001/person/${p.id}`, {
  method: 'DELETE',
  headers: {
      'Content-Type':'application/json'
  },
  body: JSON.stringify(p)
  })
  .then(res => res.json())
  .then(json => setUpdate(!update))
        
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