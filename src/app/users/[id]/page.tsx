import Link from "next/link";
import {
    Breadcrumbs,
    Card,
    CardContent,
    CardHeader,
    Link as MUILink,
    Typography
} from "@mui/material";
import Users from "@/sample-data/users.json";
import Image from "next/image";
import * as React from "react";


export default function UserDetails({params}: { params: { id: string } }) {
    const user = Users.find(({id}) => (id.toString() === params.id));

    if (!user) {
        return (
            <>
                <Typography variant="h4">User not found!</Typography>
                <Typography>Please select another user from <Link href="/users">User list</Link></Typography>
            </>
        );
    }

    return (
        <>
            <Breadcrumbs sx={{mb: 3}}>
                <MUILink
                    underline="hover"
                    color="inherit"
                    href="/"
                    component={Link}
                >
                    User Management
                </MUILink>
                <MUILink
                    underline="hover"
                    color="inherit"
                    href="/users"
                    component={Link}
                >
                    Users
                </MUILink>
                <Typography color="text.primary">
                    {user.firstName}
                </Typography>
            </Breadcrumbs>
            <Card>
                <CardHeader
                    avatar={
                        <Image src={user.avatarUrl || "/default-avatar.jpg"}
                               alt={user.firstName}
                               width={100}
                               height={100}
                               quality={80}
                               placeholder="blur"
                               blurDataURL="/blur-avatar.jpg"
                               priority
                        />
                    }
                    title={`${user.firstName} ${user.lastName}`}
                    subheader={`${user.age} years old`}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Email: {user.email}
                        <br/>
                        Address: {user.address}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}