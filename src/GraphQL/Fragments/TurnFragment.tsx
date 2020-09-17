import { gql } from '@apollo/client'

const TurnFragment = gql`
    fragment TurnFragment on Turn {
        id
        value
        createdAt
        updatedAt
    }
`
export default TurnFragment