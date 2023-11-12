import {Post} from "@/types";
import {Chip, Typography} from "@mui/material";

async function getPosts() {
    const res = await fetch(process.env.baseUrl + '/posts')
    return res.json()
}

export default async function HomePage() {
    const posts: Post[] = await getPosts()

    return (
        <>
            <Typography variant="h4">Latest Posts:</Typography>

            {posts?.map((item) => (
                <Chip variant="outlined"
                      color="primary"
                      size="small"
                      sx={{ m: 1 }}
                      key={item.id}
                      label={item.title}
                />
            ))}
        </>
    );
}