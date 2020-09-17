import React from 'react'
import { Button, Grid } from '@material-ui/core'


const CreateButton = () => {
    return (
        <Grid container spacing={1}>
            <Grid item>
                <Button type="submit" variant="contained" size="large" color="primary">Create</Button>
            </Grid>
        </Grid>
    )
}

export default CreateButton