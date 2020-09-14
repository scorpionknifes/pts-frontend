import React from 'react'
import { Button, Grid, TextField } from '@material-ui/core'


const StoryControl = () => {
    return <>
        <Grid container justify="center" style={{position: 'fixed', bottom: 0}}>
            <TextField
                id="standard-textarea"
                label="Input"
                placeholder="Placeholder"
                multiline
                style={{margin: 10}}
            />
            <Button variant="contained" color="primary" style={{margin: 10}}>Submit</Button>
        </Grid>
    </>
}

export default StoryControl