import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, StoryCard } from '../../Components';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

const HomePage = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <AppBar />
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container spacing={3}>
                <StoryCard />
            </Grid>
        </main>

    </div>
}

export default HomePage