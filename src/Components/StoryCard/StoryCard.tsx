import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import React from 'react'

type StoryCardProps = {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
        },
    }),
);

const StoryCard = (props: StoryCardProps) => {
    const classes = useStyles();
    return <Grid item xs={12}>
        <Paper className={classes.paper} >
            <Grid container direction="row">
                <Typography style={{ flexGrow: 1 }}>Anonymous2123's Story</Typography>
                <Typography style={{ color: '#32CD32', fontWeight: 'bold' }}>6</Typography>
                <Typography>/</Typography>
                <Typography style={{ fontWeight: 'bold' }}>10</Typography>
            </Grid>
        </Paper>

    </Grid>
}

export default StoryCard