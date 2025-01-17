import React, { useContext } from 'react'
import { fade, Theme, AppBar as Bar, Typography, InputBase, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

const useStyles = makeStyles((theme: Theme) => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        cursor: 'pointer'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },

    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));


const AppBar = () => {
    const {username} = useContext(UserContext)
    const classes = useStyles()
    const history = useHistory()
    return (
        <Bar position="fixed" className={classes.appBar}>
            <Toolbar>
                <img style={{maxHeight: 60}} src="/logo-white.png"></img>
                <Typography variant="h6" className={classes.title} onClick={()=>history.push('/')}> Pass the Story</Typography>
                {/*<div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    </div>*/}
                <div className={classes.grow} />
                <Button color="inherit">{username}</Button>
            </Toolbar>
        </Bar>
    )
}

export default AppBar