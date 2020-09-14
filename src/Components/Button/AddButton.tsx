import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

type AddButtonProps = {
    add: string,
}

const AddButton = (props: AddButtonProps) => {
    return (
        <Grid container spacing={1}>
            <Grid item>
                <Button component={Link} to={props.add} variant="contained" size="large" color="primary">Add Your Story</Button>
            </Grid>
        </Grid>
    )
}

export default AddButton