import people from "./data";
import {Person, Context, Args} from './types'
export default {
    addPerson: (parent:Person, {input}: Args, context:Context) => {
        if('age' in input){
            const person : Person = {
                id: String(people.length + 1),
                name: input.name,
                age: input.age,
                city: input.city,
            }
            people.push(person)
            return person;
        }
    },
    deletePerson: (_parent: never, {id, input}: Args, {people}: Context) => {
        const idx = people.findIndex(person => person.id === id);
        if (idx === -1) {
        return false
      }
      people.splice(idx, 1);
      return true
    },
    updatePerson: (_parent: never, { id, input }:Args, {people}:Context) => {
        const idx = people.findIndex(person => person.id === id);
        if (idx === -1) {
          return null
        }
        const person = people[idx];
        const updatedPerson = {...person, ...input};
        people[idx] = updatedPerson;
        return updatedPerson;
      }
}