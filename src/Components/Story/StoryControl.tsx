import React, { useState } from 'react'
import { Button, FormControl, Grid, TextField } from '@material-ui/core'

type StoryControlProps = {
    handleTurn: (input: string) => void
}

const StoryControl = (props: StoryControlProps) => {

    const [input, setInput] = useState("")

    const handleButton = (e: any) => {
        e.preventDefault()
        props.handleTurn(input)
        setInput("")
    }
    return <>
        <Grid container justify="center" style={{ position: 'fixed', zIndex: 10000, bottom: 50, left: 0, right: 0 }}>
            <form style={{ justifyContent: 'center', width: "100%" }} onSubmit={handleButton}>
                <FormControl fullWidth>
                    <TextField
                        onChange={e => setInput(e.target.value)} value={input}
                        id="standard-textarea"
                        label="Input"
                        required
                        placeholder="Placeholder"
                        style={{ margin: 10 }}
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ width: 500, margin: 'auto'}}>Submit</Button>
                </FormControl>
            </form>

        </Grid>
    </>
}

export default StoryControl