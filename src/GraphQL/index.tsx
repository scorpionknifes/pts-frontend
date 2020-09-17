import { split, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

import { StoriesQuery, StoryQuery } from './Queries/StoryQuery'
import { UsersQuery, UserQuery } from './Queries/UserQuery'

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL
})

const wsLink = new WebSocketLink({
    uri: `${process.env.REACT_APP_GRAPHQL_WS}`,
    options: {
        reconnect: true
    }
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: splitLink,
})

export { client, StoriesQuery, StoryQuery, UsersQuery, UserQuery }