import { gql } from '@apollo/client';
const GET_People = gql`
    query GetPeople {
      people {
        id
        name
        age
        city
        addresses {
            id
            number
            street
            people {
                id
                name
                age
                city
            }
          }
      }
    }
  `
export default GET_People