import { gql } from '@apollo/client'

const StoryFragment = gql`
    fragment StoryFragment on Device {
        id
        name
        count
        people
        tags
        turns
        createdAt
        updatedAt
    }
`
export default StoryFragment