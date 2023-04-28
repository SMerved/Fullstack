import { gql } from '@apollo/client';
const GetAddresses = gql`
query GetAddresses {
    addresses {
      id
      street
      number
      people {
        age
        city
        id
        name
        addresses {
          id
          number
          street
        }
      }
    }
  }
  `
export default GetAddresses