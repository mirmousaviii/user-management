import {Post} from "@/types";

export async function getPosts(): Promise<Post[]> {
    const res = await fetch(`${process.env.baseUrl}/posts/`)
    return res.json();
}

export async function deletePost(id: number) {
    const res = await fetch(`${process.env.baseUrl}/posts/${id}`, {
        method: 'DELETE',
    });

    return res.ok;
}

export async function addPost(title: string, body: string) {
    const res = await fetch(`${process.env.baseUrl}/posts/`, {
        method: 'POST',
    });

    return res.json();
}
