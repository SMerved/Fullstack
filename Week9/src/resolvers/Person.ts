import { Person, Context, Address, Args } from '../types'
import { PeopleModel, AddressModel } from '../models/peopleModel'
export default {
    //addresses: (parent:Person, _args:never, {addresses}:Context) => addresses.filter((address) => address.people.filter((person)=>person.id === parent.id)),
    /*addresses: (parent: Person, _args: never, { addresses }: Context) => {
        let addressesForPerson = []
        addresses.map((address) => address.people.map((person) => {
            if (person.id === parent.id) {
                addressesForPerson.push(address)
            }
        }))
        return addressesForPerson
    }*/
    addresses: async (parent:Person)=> {
       return parent.addresses
    },
}