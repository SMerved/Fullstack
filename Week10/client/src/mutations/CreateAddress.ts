import {gql} from '@apollo/client';

const CreateAddress = gql`
  mutation AddAddress($input: AddressInput!){
    addAddress(input: $input) {
        id
        street
        number
        people {
            id
            name
            age
            city
        }
  }
}
`;
export default CreateAddress