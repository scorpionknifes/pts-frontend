import { gql } from '@apollo/client'
import TurnFragment from '../Fragments/TurnFragment'

const TurnsSubscription = gql`
    subscription TurnsSubscription {
        turns{
            ...TurnFragment
        }
    }
    ${TurnFragment}
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