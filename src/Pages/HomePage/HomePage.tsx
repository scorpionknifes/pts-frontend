import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, StoryCard } from '../../Components';
import { Grid } from '@material-ui/core';
import AddButton from '../../Components/Button/AddButton';

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

type Story = {
    id: string,
    name: string,
    online: number, 
    people: number,
    tags: string[],
}

const stories: Story[] = [
    {
        id: "test",
        name: "Anonymous2032's Story",
        online: 2,
        people: 3,
        tags: ["test", "hello", "lol"]
    },
    {
        id: "test2",
        name: "Anonymous2043's Story",
        online: 2,
        people: 3,
        tags: ["test2", "hello", "lols"]
    }
]

const HomePage = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <AppBar />
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <AddButton add="/new" />
            <br/>
            <Grid container spacing={3}>
                {stories.map(story=><StoryCard name={story.name} online={story.online} people={story.people} tags={story.tags} id={story.id}/>)}
            </Grid>
        </main>

    </div>
}

export default HomePage