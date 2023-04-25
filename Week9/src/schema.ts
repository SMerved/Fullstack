export const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

type Person {
  id: ID
  name: String
  age: Int
  city: String
  addresses: [Address!]!
}

type Address {
    id: ID
    street: String
    number: Int
    people: [Person]
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each.
type Query {
  people: [Person!]!
  person(id:ID): Person!
  addresses: [Address!]!
}
type Mutation {
  addPerson(input:PersonInput): Person
  deletePerson(id:ID): Boolean
  updatePerson(input:PersonInput): Person
  addAddress(input:AddressInput): Address
  addPersonToAddress(id:ID, input:ID): Address
  removePersonFromAddress(id:ID, input:ID): Address
}
input PersonInput{
  id: ID
  name: String
  age: Int
  city: String
}
input AddressInput{
    id: ID
    street: String
    number: Int
}
`;