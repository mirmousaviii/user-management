import {Chip, Typography} from "@mui/material";
import React from "react";
import {Post} from "@/types";

interface Props {
    posts: Post[];
    onDelete: (id: number) => void;
}

export default function PostFeed({posts, onDelete}: Props) {
    return (
        <>
            <Typography variant="h5">Posts</Typography>
            {posts.map((item) => (
                <Chip variant="outlined"
                      color="primary"
                      size="small"
                      sx={{m: 1}}
                      key={item.id}
                      label={item.title}
                      onDelete={() => onDelete(item.id)}
                />
            ))}
        </>
    );
}