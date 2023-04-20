import { useState } from "react"
import { person } from "./App"

const SortByAge = ({people, setPeople} : {setPeople:React.Dispatch<React.SetStateAction<person[]>>, people: person[]}) => {
    const handleSort = () =>{
        const sortedByAge = [...people].sort((a,b)=> a.age - b.age)
        setPeople(sortedByAge)
    }
    return (
        <div>
            <button onClick={handleSort}>Sort by age</button>
        </div>
    )
}
export default SortByAge