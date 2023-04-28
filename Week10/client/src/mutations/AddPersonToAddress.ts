import {gql} from '@apollo/client';

const AddPersonToAddress = gql`
mutation AddPersonToAddress($addPersonToAddressId: ID, $input: ID) {
    addPersonToAddress(id: $addPersonToAddressId, input: $input) {
      id
      street
      number
      people {
        age
        name
        city
        id
      }
    }
  }
`;
export default AddPersonToAddress