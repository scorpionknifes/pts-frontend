import React, { useEffect, useState } from 'react';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import { AppBar, StoryParagraph, StoryControl, StorySideBar, Spinner } from '../../Components'
import { Players, StoryType } from '../../Commons/StoryTypes';
import { Divider, Typography } from '@material-ui/core';
import Tag from '../../Components/Tag/Tag';
import { Story, StoryTurns } from '../../GraphQL/Types/StoryType';
import { StoryQuery } from '../../GraphQL';
import { useParams } from 'react-router-dom';
import { useQuery, useSubscription } from '@apollo/client';
import { ParamType } from '../../Commons/ContextTypes';
import { Turn } from '../../GraphQL/Types/TurnType';
import { TurnsSubscription } from '../../GraphQL/Queries/TurnQuery';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginRight: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

const StoryPage = () => {
    const classes = useStyles()
    const [select, setSelect] = useState<string>("")
    const [active, setActive] = useState<string[]>([])
    const [players, setPlayers] = useState<Players>({})
    let { id } = useParams<ParamType>()

    const { loading, data } = useQuery<{ story: StoryTurns }>(StoryQuery, {
        variables: { id: parseInt(id) }
    });

    useEffect(() => {
        if (data !== undefined) {
            setPlayers(GenerateAllColor(data?.story.turns))
        }

    }, [data])


    useEffect(() => {
        //setPlayers(GenerateColor(data))
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <div className={classes.root}>
            <AppBar />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography variant="h4">{data?.story.name}</Typography>

                <Typography>Theme: {data?.story.tags?.split(',').map((tag, i) => <Tag key={i} name={tag}></Tag>)}</Typography>
                <Divider style={{ margin: 10 }} />
                <StoryParagraph data={data?.story} players={players} select={select} setSelect={setSelect} />
                <StoryControl />
            </main>
            <StorySideBar active={active} players={players} select={select} setSelect={setSelect} />
        </div>
    );
}

const GenerateAllColor = (data: Turn[]): Players => {
    let players: Players = {}
    data.map(turn => players[turn.user.name] = RandomColor())
    return players
}

const GenerateColor = (turn: Turn, players: Players): Players => {
    if (players[turn.user.name] === null) {
        players[turn.user.name] = RandomColor()
    }
    return players
}

const RandomColor = (): string => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);;
}


export default StoryPage