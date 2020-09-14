import { Typography } from '@material-ui/core'
import React from 'react'
import { Players, StoryType } from '../../Common/StoryTypes'

type StoryProps = {
    data: StoryType[],
    players: Players,
    setSelect: (select: string) => void
}

const StoryParagraph = (props: StoryProps) => {
    return <Typography paragraph>
        {props.data.map(item => Turn(item, props.players, props.setSelect))}
    </Typography>
}

const Turn = (data: StoryType, players: Players, setSelect: (select: string) => void) => {
    let color = players[data.name]
    return <span
        onMouseEnter={() => setSelect(data.name)}
        onMouseLeave={() => setSelect("")}
        style={{ color: color, cursor: "pointer" }}>
        {data.value + " "}
    </span>
}

export default StoryParagraph