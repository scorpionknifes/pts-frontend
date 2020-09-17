import { gql } from '@apollo/client'

const StoryFragment = gql`
    fragment StoryFragment on Story {
        id
        name
        count
        people
        tags
        createdAt
        updatedAt
    }
`
export default StoryFragment