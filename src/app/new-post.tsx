import React from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import {addPost} from "@/api/posts";
import {Post} from "@/types";

interface Props {
    onPostAdd: (post: Post) => void;
}

export default function NewPost({onPostAdd}: Props) {
    const [title, setTitle] = React.useState<string>('');
    const [body, setBody] = React.useState<string>('');

    const handleNewPost = () => {

        addPost(title, body).then((res) => {
            if (res) {
                onPostAdd({id: res.id, title, body});
                setTitle('');
                setBody('');
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
        </>
    );
}