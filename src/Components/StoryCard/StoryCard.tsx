import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import React from 'react'
import { useHistory } from 'react-router-dom';
import Tag from '../Tag/Tag';

type StoryCardProps = {
    name: string,
    online: number,
    people: number,
    tags: string[],
    id: string,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
            backgroundColor: 'white',
            '&:hover': {
                backgroundColor: '#F5F5F5',
            },
            cursor: 'pointer'
        },
        tags: {
            spacing: theme.spacing(2),
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'flex',
            },
        }
    }),
);

const StoryCard = (props: StoryCardProps) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push(`/story/${props.id}`)
    }
    return <Grid item xs={12}>

        <Paper className={classes.paper} elevation={3} onClick={handleClick}>
            <Grid container direction="row">
                <Typography style={{ flexGrow: 1 }}>{props.name}</Typography>
                <Grid className={classes.tags} >
                    {props.tags.map((tag, i) => <Tag key={i} name={tag}></Tag>)}
                </Grid>
                <Typography style={{ color: '#32CD32', fontWeight: 'bold' }}>{props.online}</Typography>
                <Typography>/</Typography>
                <Typography style={{ fontWeight: 'bold' }}>{props.people}</Typography>
            </Grid>
        </Paper>
        <TouchRipple/>

    </Grid>
}

export default StoryCard