import React from 'react'
import './App.css'

import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AppBar } from './Components'

// pages
import { HomePage, StoryPage } from './Pages'


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

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/story" component={StoryPage} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App