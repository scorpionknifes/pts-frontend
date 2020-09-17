import { Typography } from '@material-ui/core'
import React from 'react'
import { Players, StoryType } from '../../Commons/StoryTypes'
import { StoryTurns } from '../../GraphQL/Types/StoryType'
import { Turn } from '../../GraphQL/Types/TurnType'

type StoryProps = {
    data: Turn[] | undefined,
    players: Players,
    select: string,
    setSelect: (select: string) => void
}

const StoryParagraph = (props: StoryProps) => {
    return <Typography paragraph>
        {props.data?.map(item => DisplayTurn(item, props.players, props.select, props.setSelect))}
    </Typography>
}

const DisplayTurn = (data: Turn, players: Players, select: string, setSelect: (select: string) => void) => {
    let color = players[data?.user?.name]
    return <span key={Math.random()}
        onMouseEnter={() => setSelect(data.user.name)}
        onMouseLeave={() => setSelect("")}
        style={{
            color: color,
            cursor: "pointer",
            fontWeight: select === data.user.name ? 'bold' : 'normal'
        }}>
        {data.value + " "}
    </span>
}

export default StoryParagraph