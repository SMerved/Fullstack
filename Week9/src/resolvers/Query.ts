import { Person, Context, Address, Args } from '../types'
import { PeopleModel, AddressModel } from '../models/peopleModel';
export default {
    /*people: (_parent: never, _args: Args, { people }: Context) => people,
    person: (_parent: never, { id }: Args, { people }: Context) => { const p = people.find((person) => person.id === id); console.log(p); return p; },
    addresses: (_parent: never, _args: Args, { addresses }: Context) => addresses*/
    people: async ()=> await PeopleModel.find({}),
    person: async (_parent:never, { id }:Args) => await PeopleModel.findById(id),
    addresses: async ()=> await AddressModel.find({}),
}