import { gql } from '@apollo/client'

const TurnFragment = gql`
    fragment TurnFragment on Turn {
        id
        user
        story
        value
        createdAt
        updatedAt
    }
`
export default TurnFragment