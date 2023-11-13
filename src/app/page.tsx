"use client"

import React, {useEffect} from "react";
import {Post} from "@/types";
import {Box, Button, Chip, TextField, Typography} from "@mui/material";

async function getPosts() {
    const res = await fetch(`${process.env.baseUrl}/posts/`)
    return res.json();
}

async function newPost(title: string, body: string) {
    const res = await fetch(`${process.env.baseUrl}/posts/`, {
        method: 'POST',
    });

    return res.json();
}

async function deletePosts(id: number) {
    const res = await fetch(`${process.env.baseUrl}/posts/${id}`, {
        method: 'DELETE',
    });

    return res.ok;
}


export default function HomePage() {
    const [posts, setPosts] = React.useState<Post[]>([]);
    const [title, setTitle] = React.useState<string>('');
    const [body, setBody] = React.useState<string>('');

    useEffect(() => {
        getPosts().then((res) => {
            setPosts(res);
        });
    }, []);


    const handleNewPost = () => {

        newPost(title, body).then((res) => {
            if (res) {
                setPosts(
                    [...posts, {title, body, id: res.id}]
                );

                setTitle('');
                setBody('');
            }
        });
    };

    const handleDelete = (id: number) => {
        deletePosts(id).then((res) => {
            if (res) {
                setPosts(
                    posts?.filter((post) => post.id !== id)
                );
            }
        });
    };


    return (
        <>
            <Typography variant="h5">New Post</Typography>
            <Box component="form"
                 sx={{
                     '& > :not(style)': {mb: 1},
                     mb: 3
                 }}
                 noValidate
                 autoComplete="off"
            >
                <TextField label="Title"
                           variant="outlined"
                           fullWidth
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                />
                <TextField label="Body"
                           variant="outlined"
                           fullWidth
                           multiline
                           rows={4}
                           value={body}
                           onChange={(e) => setBody(e.target.value)}
                />
                <Button variant="contained"
                        fullWidth
                        onClick={handleNewPost}
                        disabled={title === '' || body === ''}
                >Add new post</Button>
            </Box>

            <Typography variant="h5">Posts</Typography>
            {posts.map((item) => (
                <Chip variant="outlined"
                      color="primary"
                      size="small"
                      sx={{m: 1}}
                      key={item.id}
                      label={item.title}
                      onDelete={() => handleDelete(item.id)}
                />
            ))}

        </>
    );
}