import { gql } from '@apollo/client'
import StoryFragment from '../Fragments/StoryFragment'

const StoriesQuery = gql`
    query Stories {
        stories{
            ...StoryFragment
        }
    }
    ${StoryFragment}
`

const StoryQuery = gql`
    query Story($id: ID!) {
        story(id: $id) {
            ...StoryFragment
        }
    }
    ${StoryFragment}
`

export { StoriesQuery, StoryQuery }