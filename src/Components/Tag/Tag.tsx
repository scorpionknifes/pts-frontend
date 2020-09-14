import { Chip } from '@material-ui/core'
import React from 'react'

type TagProps = {
    name: string
}
const Tag = (props: TagProps) => {
    return <Chip style={{margin: 3}} variant="outlined" size="small" color="primary" label={props.name}/>
        
}

export default Tag