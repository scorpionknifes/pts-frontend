import { useMutation } from '@apollo/client';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { AppBar, SimpleTextField } from '../../Components';
import CreateButton from '../../Components/Button/CreateButton';
import { UserContext } from '../../Contexts/UserContext';
import { StoryCreate } from '../../GraphQL/Queries/StoryQuery';

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
    const history = useHistory()
    const { username } = useContext(UserContext)
    const [create, { data }] = useMutation(StoryCreate)

    const [name, setName] = useState("")
    const [tag1, setTag1] = useState("")
    const [tag2, setTag2] = useState("")
    const [tag3, setTag3] = useState("")

    useEffect(() => {
        setName(`${username}'s Story`)
    }, [username])

    useEffect(() => {
        if (data !== undefined){
            history.push('/story/'+data.createStory.id)
        }
    }, [data])

    const handleCreate = (e: any) => {
        e.preventDefault()
        create({
            variables: {
                input: {
                    name: name,
                    tags: `${tag1}, ${tag2}, ${tag3}`
                }
            }
        })
    }

    return <div className={classes.root}>
        <AppBar  />
        <main className={classes.content}>
            <form onSubmit={handleCreate}>
                <div className={classes.toolbar} />
                <div className={classes.addstory}>
                    <SimpleTextField name="Name" helper="Name your story" required onChange={e => setName(e.target.value)} value={name} />
                    <SimpleTextField name="Theme 1" helper="first theme" required onChange={e => setTag1(e.target.value)} value={tag1} />
                    <SimpleTextField name="Theme 2" helper="first theme" required onChange={e => setTag2(e.target.value)} value={tag2} />
                    <SimpleTextField name="Theme 3" helper="first theme" required onChange={e => setTag3(e.target.value)} value={tag3} />
                </div>
                <CreateButton/>
            </form>
        </main>

    </div>
}

export default AddStoryPage