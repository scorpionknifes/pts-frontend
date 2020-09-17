import {gql} from '@apollo/client'

const UserFragment = gql`
    fragment UserFragment on User {
        id
        name
        createdAt
        updatedAt
    }
`
export default UserFragment