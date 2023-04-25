import { people, addresses } from "../data";
import { Person, Context, Args, Address } from '../types'
import {PeopleModel, AddressModel} from "../models/peopleModel";
export default {
  /*addPerson: (parent: Person, { input }: Args, context: Context) => {
    if ('age' in input) {
      const person: Person = {
        id: String(people.length + 1),
        name: input.name,
        age: input.age,
        city: input.city,
        addresses: input.addresses
      }
      people.push(person)
      return person;
    }
  },
  deletePerson: (_parent: never, { id, input }: Args, { people }: Context) => {
    const idx = people.findIndex(person => person.id === id);
    if (idx === -1) {
      return false
    }
    people.splice(idx, 1);
    return true
  },
  updatePerson: (_parent: never, { id, input }: Args, { people }: Context) => {
    const idx = people.findIndex(person => person.id === id);
    if (idx === -1) {
      return null
    }
    const person = people[idx];
    const updatedPerson = { ...person, ...input };
    people[idx] = updatedPerson;
    return updatedPerson;
  },
  addAddress: (parent: Address, { input }: Args, context: Context) => {
    if ('street' in input) {
      const address: Address = {
        id: String(addresses.length + 1),
        street: input.street,
        number: input.number,
        people: input.people
      }
      addresses.push(address)
      return address;
    }
  },*/
  addPerson: async (_parent:never, { input }:Args) => {
    if('age' in input){
      const newPerson = new PeopleModel({ name:input.name, age: input.age, city: input.city });
      await newPerson.save();
      return newPerson;
    }
  },
  deletePerson: async (_parent:never, { id }:Person) => {
    const result = await PeopleModel.findByIdAndDelete(id);
    return result ? true : false;
  },
  updatePerson: async (_parent:never, { input }:Args) => {
    if('age' in input){
      const result = await PeopleModel.findByIdAndUpdate(input.id, {name: input.name, age: input.age, city: input.city});
      return result;
    }
  },
  addAddress: async (_parent:never, { input }:Args) => {
    if('street' in input){
      const newAddress = new AddressModel({ street: input.street, number: input.number});
      await newAddress.save();
      return newAddress;
    }
  },
  addPersonToAddress: async (_parent:never, {id, input}:{id:Args, input:string}) => {
    const person: Person = await PeopleModel.findById(input)
    const address: Address = await AddressModel.findById(id)
    if(person.addresses.length>0){
      if(person.addresses.map((a)=> {
        if(a.street === address.street && a.number === address.number){
          console.log("hej")
          return true;
        }else{
          return false;
        }
      })){
          return address;
        }
    }
    person.addresses.push(address)
    address.people.push(person)
    await PeopleModel.findByIdAndUpdate(person.id, {addresses: person.addresses});
    const result = await AddressModel.findByIdAndUpdate(id, {people: address.people});
    return result;
  },
  removePersonFromAddress: async (_parent:never, {id, input}:{id:string, input:string}) => {
    const person: Person = await PeopleModel.findById(input)
    const address: Address = await AddressModel.findById(id)
    //Kan ikke få fat i id i arrays :(
    const newAddresses : Address[] = person.addresses.filter((a)=> a.street !== address.street && a.number !== address.number)
    const newPeople : Person[] = address.people.filter((p)=> p.name !== person.name && p.age !== person.age)
    await PeopleModel.findByIdAndUpdate(person.id, {addresses: newAddresses});
    const result = await AddressModel.findByIdAndUpdate(id, {people: newPeople});
    return result;
  }
}