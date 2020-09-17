import { gql } from '@apollo/client'
import TurnFragment from '../Fragments/TurnFragment'
import UserFragment from '../Fragments/UserFragment'

const TurnsSubscription = gql`
    subscription TurnsSubscription($story: Int!) {
        turns(story: $story){
            user{
                ...UserFragment
            }
            ...TurnFragment
        }
    }
    ${TurnFragment}
    ${UserFragment}
`

const TurnCreate = gql`
    mutation CreateTurn($input: TurnInput!) {
        createTurn(input: $input) {
            ...TurnFragment
        }
    }
    ${TurnFragment}
`
export { TurnsSubscription, TurnCreate }