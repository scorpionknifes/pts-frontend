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

export { TurnsSubscription }