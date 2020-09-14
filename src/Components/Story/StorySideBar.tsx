import React from 'react'
import { Container, createStyles, Divider, Drawer, makeStyles, Theme, Typography } from '@material-ui/core'
import { Players } from '../../Commons/StoryTypes';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
    }),
);

type StorySideBarProps = {
    players: Players,
    online: string[],
    select: string,
    setSelect: (select: string)=> void
}

const StorySideBar = (props: StorySideBarProps) => {
    const classes = useStyles();
    const { online, offline } = FindOnline(props.players, props.online)

    const Player = (player: string) => {
        return <Typography
            onMouseEnter={() => props.setSelect(player)}
            onMouseLeave={() => props.setSelect("")}
            key={player}
            style={{
                color: props.players[player],
                fontWeight: props.select === player ? 'bold' : 'normal'
            }}>
            {player}
        </Typography>
    }

    return <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
            paper: classes.drawerPaper,
        }}
        anchor="right"
    >
        <div className={classes.toolbar} />
        <Container>
            <Typography variant="h6">Online</Typography>
            {[...Object.keys(online)].map(Player)}
        </Container>
        <Divider />
        <Container>
            <Typography variant="h6">Offline</Typography>
            {[...Object.keys(offline)].map(Player)}
        </Container>
        <Divider />
    </Drawer>
}

const FindOnline = (players: Players, online: string[]) => {
    let onlinePlayers: Players = {}
    let offlinePlayers: Players = {}
    for (let player in players) {
        if (online.indexOf(player) > -1) {
            onlinePlayers[player] = players[player];
        } else {
            offlinePlayers[player] = players[player];
        }
    }
    return { online: onlinePlayers, offline: offlinePlayers }
}

export default StorySideBar