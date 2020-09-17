import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Spinner, StoryCard } from '../../Components';
import { Grid } from '@material-ui/core';
import AddButton from '../../Components/Button/AddButton';
import { StoriesQuery } from '../../GraphQL';
import { useQuery } from '@apollo/client';

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

type Stories = {
    stories: Story[]
}

type Story = {
    id: number,
    name: string,
    count: number,
    people: number,
    tags: string,
    createdAt: string,
    updatedAt: string,
}

const HomePage = () => {
    const classes = useStyles()

    const { loading, data } = useQuery<Stories>(
        StoriesQuery
    );

    if (loading) {
        return <Spinner />
    }

    return <div className={classes.root}>
        <AppBar />
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <AddButton add="/new" />
            <br />
            <Grid container spacing={3}>
                {data?.stories.map(story => <StoryCard name={story.name} count={story.count} people={story.people} tags={story.tags.split(',')} id={story.id} />)}
            </Grid>
        </main>

    </div>
}

export default HomePage