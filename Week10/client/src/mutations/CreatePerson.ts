import {gql} from '@apollo/client';

const CreatePerson = gql`
  mutation AddPerson($input: PersonInput!){
    addPerson(input: $input) {
        id
        name
        age
        city
        addresses {
            id
            street
            number
        }
  }
}
`;
export default CreatePerson