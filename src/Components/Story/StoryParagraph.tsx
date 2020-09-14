import { Typography } from '@material-ui/core'
import React from 'react'
import { Players, StoryType } from '../../Commons/StoryTypes'

type StoryProps = {
    data: StoryType[],
    players: Players,
    select: string,
    setSelect: (select: string) => void
}

const StoryParagraph = (props: StoryProps) => {
    return <Typography paragraph>
        {props.data.map(item => Turn(item, props.players, props.select, props.setSelect))}
    </Typography>
}

const Turn = (data: StoryType, players: Players, select: string, setSelect: (select: string) => void) => {
    let color = players[data.name]
    return <span
        onMouseEnter={() => setSelect(data.name)}
        onMouseLeave={() => setSelect("")}
        style={{
            color: color,
            cursor: "pointer",
            fontWeight: select === data.name ? 'bold' : 'normal'
        }}>
        {data.value + " "}
    </span>
}

export default StoryParagraph