import React, { useEffect, useState } from 'react';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import { AppBar, StoryParagraph, StoryControl, StorySideBar } from '../../Components'
import { Players, StoryType } from '../../Common/StoryTypes';

const data: StoryType[] = [
    {
        name: "anonymous2000",
        value: "Once"
    },
    {
        name: "anonymous1020",
        value: "upon"
    },
    {
        name: "anonymous4020",
        value: "a"
    },
    {
        name: "anonymous2000",
        value: "time"
    }
]

const online: string[] = [
    "anonymous1020", "anonymous2000"
]

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
    const [players, setPlayers] = useState<Players>({})

    useEffect(()=>{
        setPlayers(GenerateColor(data))
    },[])
    return (
        <div className={classes.root}>
            <AppBar />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <StoryParagraph data={data} players={players} setSelect={setSelect}/>
                <StoryControl />
            </main>
            <StorySideBar online={online} players={players} select={select}/>
        </div>
    );
}

const GenerateColor = (data: StoryType[]): Players => {
    let players: Players = {}
    data.map(storyType => players[storyType.name] = RandomColor())
    return players
}

const RandomColor = (): string => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);;
}


export default StoryPage