import { gql } from '@apollo/client'
import StoryFragment from '../Fragments/StoryFragment'
import TurnFragment from '../Fragments/TurnFragment'

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
            turns{
                ...TurnFragment
            }
        }
    }
    ${StoryFragment}
    ${TurnFragment}
`
const StoriesSubscription = gql`
    subscription StoriesSubscription {
        stories{
            ...StoryFragment
        }
    }
`

export { StoriesQuery, StoryQuery, StoriesSubscription }