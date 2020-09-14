import React from 'react'
import './App.css'

import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#c30000',
        },
        secondary: {
            main: '#c30000',
        },
    },
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
                    <Route exact path="/login" />
                    <Route exact path="/login" />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App