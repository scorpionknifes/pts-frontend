import {gql} from '@apollo/client'

const UserFragment = gql`
    fragment UserFragment on Device {
        id
        name
        createdAt
        updatedAt
    }
`
export default UserFragment