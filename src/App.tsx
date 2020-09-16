import React from 'react'
import './App.css'

import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// pages
import { HomePage, StoryPage, AddStoryPage } from './Pages'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'


const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
})

const App = () => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/story" component={StoryPage} />
                        <Route exact path="/new" component={AddStoryPage} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </ApolloProvider>
    )
}

export default App