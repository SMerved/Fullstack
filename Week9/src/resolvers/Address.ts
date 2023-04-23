import { Person, Context, Address, Args } from '../types'
export default {
    /*people: (parent: Address, _args: never, { people }: Context) => {
        let peopleForAdress = []
        people.map((person) => person.addresses.map((address) => {
            if (address.id === parent.id) {
                peopleForAdress.push(person)
            }
        }))
        return peopleForAdress
    }*/
    people: async (parent:Address)=> {
        return parent.people
     },
}