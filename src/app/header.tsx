"use client"

import {
    useMediaQuery,
    Box,
    AppBar,
    Toolbar,
    Link,
    Button,
    Typography,
    IconButton,
} from "@mui/material";

import PeopleIcon from '@mui/icons-material/People';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Header() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const changeTheme = () => {
        alert("Coming soon...")
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <PeopleIcon sx={{ mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        User Management
                    </Typography>
                    <Button color="inherit" component={Link} href="/">Home</Button>
                    <Button color="inherit" component={Link} href="/groups">Groups</Button>
                    <Button color="inherit" component={Link} href="/users">Users</Button>
                    <IconButton sx={{ ml: 1 }} color="inherit" onClick={changeTheme}>
                        {prefersDarkMode ? (<Brightness7Icon />) : (<Brightness4Icon />)}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}