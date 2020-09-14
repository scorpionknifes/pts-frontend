import React from 'react'
import { Button, Grid, TextField } from '@material-ui/core'


const StoryControl = () => {
    return <>
        <Grid container justify="center">
            <TextField
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
            />
            <Button variant="contained" color="primary">Primary</Button>
        </Grid>
    </>
}

export default StoryControl