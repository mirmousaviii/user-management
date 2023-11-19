"use client"

import React, {useEffect} from "react";
import dynamic from 'next/dynamic';
import {Post} from "@/types";
import {deletePost, getPosts} from "@/api/posts";
import NewPost from "@/app/new-post";

const DynamicPostFeed = dynamic(() => import("@/app/post-feed"), {
    // TODO: Use a global loading with animation
    loading: () => <span>Loading post feed</span>,
    ssr: false
})

export default function HomePage() {
    const [posts, setPosts] = React.useState<Post[]>([]);

    useEffect(() => {
        getPosts().then((res) => {
            setPosts(res);
        });
    }, []);

    const handleDelete = (id: number) => {
        deletePost(id).then((res) => {
            if (res) {
                setPosts(
                    posts?.filter((post) => post.id !== id)
                );
            }
        });
    };


    return (
        <>
            <NewPost onPostAdd={(newPost) => setPosts([...posts, newPost])}/>
            <DynamicPostFeed posts={posts} onDelete={handleDelete}/>
        </>
    );
}