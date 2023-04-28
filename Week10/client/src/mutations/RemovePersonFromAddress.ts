import { gql } from '@apollo/client';

const RemovePersonFromAddress = gql`
mutation RemovePersonFromAddress($removePersonFromAddressId: ID, $input: ID) {
    removePersonFromAddress(id: $removePersonFromAddressId, input: $input) {
      id
      number
      street
      people {
        age
        city
        id
        name
      }
    }
  }
  `
export default RemovePersonFromAddress