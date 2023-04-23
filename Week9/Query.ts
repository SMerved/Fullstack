import {Person, Context, Args} from './types'
export default {
    people: (_parent:never, _args:Args, {people}:Context) => people,
    person: (_parent:never, { id }:Args, {people}:Context) => { const p = people.find((person) => person.id === id); console.log(p); return p; }
}