"use client"

import React from 'react';
import Link from 'next/link'
import {
    useTheme,
    Box,
    AppBar,
    Toolbar,
    Button,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Divider,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import ColorModeContext from "@/contex/color-mode";


const pages = [
    {
        link: "/",
        icon: <HomeIcon/>,
        title: "Home",
    },
    {
        link: "/groups",
        icon: <PeopleIcon/>,
        title: "Groups",
    },
    {
        link: "/users",
        icon: <PersonIcon/>,
        title: "Users",
    },
];

export default function Header() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    return (
        <>
            <AppBar component="nav" position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
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
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {pages.map((page) => (
                            <Button key={page.link} color="inherit" component={Link} href={page.link}>
                                {page.title}
                            </Button>
                        ))}
                    </Box>

                    <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 240},
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
                        <Typography variant="h6" sx={{my: 2}}>
                            Management
                        </Typography>
                        <Divider/>
                        <List>
                            {pages.map((page) => (
                                <ListItem key={page.link} disablePadding>
                                    <ListItemButton component={Link} href={page.link}>
                                        <ListItemIcon>
                                            {page.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={page.title}/>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </nav>
        </>
    )
}