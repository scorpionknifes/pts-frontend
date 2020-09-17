import React, { useEffect } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Spinner, StoryCard } from '../../Components';
import { Grid } from '@material-ui/core';
import AddButton from '../../Components/Button/AddButton';
import { StoriesQuery } from '../../GraphQL';
import { useQuery } from '@apollo/client';
import { Story } from '../../GraphQL/Types/StoryType';
import { StoriesSubscription } from '../../GraphQL/Queries/StoryQuery';

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
    const classes = useStyles()

    const { subscribeToMore, loading, data } = useQuery<{ stories: Story[] }>(
        StoriesQuery
    );

    useEffect(() => {
        subscribeToMore({
            document: StoriesSubscription,
            updateQuery(prev, { subscriptionData }) {
                return { stories: [...prev.stories, ...subscriptionData.data.stories] }
            }
        })
    }, [subscribeToMore])

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