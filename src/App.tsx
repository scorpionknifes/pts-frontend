import React from 'react'
import './App.css'

import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//apollo
import { client } from './GraphQL'

// pages
import { HomePage, StoryPage, AddStoryPage } from './Pages'
import { ApolloProvider } from '@apollo/client'
import { UserProvider } from './Contexts/UserContext'


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
    palette: {
        primary: {
            main: '#c30000',
        },
        secondary: {
            main: '#c30000',
        },
    },
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <UserProvider>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/story/:id" component={StoryPage} />
                            <Route exact path="/new" component={AddStoryPage} />
                        </Switch>
                    </Router>
                </ThemeProvider>
            </UserProvider>
        </ApolloProvider>
    )
}

export default App