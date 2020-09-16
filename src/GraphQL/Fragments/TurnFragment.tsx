import { gql } from '@apollo/client'

const TurnFragment = gql`
    fragment TurnFragment on Device {
        id
        user
        story
        value
        createdAt
        updatedAt
    }
`
export default TurnFragment