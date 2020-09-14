import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react'
import { AppBar, SimpleTextField } from '../../Components';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        addstory: {
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '700px',
        },
        root: {
            display: 'flex',
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

const AddStoryPage = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        <AppBar />
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <div className={classes.addstory}>
                <SimpleTextField name="Name" helper="Name your story" required onChange={e => console.log(e.target.value)} value={""} />
                <SimpleTextField name="Theme 1" helper="first theme" required onChange={e => console.log(e.target.value)} value={""} />
                <SimpleTextField name="Theme 2" helper="first theme" required onChange={e => console.log(e.target.value)} value={""} />
                <SimpleTextField name="Theme 3" helper="first theme" required onChange={e => console.log(e.target.value)} value={""} />
            </div>
        </main>

    </div>
}

export default AddStoryPage