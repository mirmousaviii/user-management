import Link from "next/link";

export default function UserList() {
    return (
        <div>
            User List:
            <Link href="/users/1">User A</Link> |
            <Link href="/users/2">User B</Link>
        </div>
    )
}