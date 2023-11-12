import Link from "next/link";
import {
    Avatar,
    Breadcrumbs,
    Card,
    CardContent,
    CardHeader,
    Link as MUILink,
    Typography
} from "@mui/material";
import Users from "../users.json";


export default function UserDetails({params}: { params: { id: string } }) {
    // TODO: Handle 404
    const user = Users.find(({id}) => (id.toString() === params.id));

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
                    {user?.firstName}
                </Typography>
            </Breadcrumbs>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            {user?.firstName.substring(0, 1)}
                        </Avatar>
                    }
                    title={`${user?.firstName} ${user?.lastName}`}
                    subheader={`${user?.age} years old`}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Email: {user?.email}
                        <br/>
                        Address: {user?.address}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}