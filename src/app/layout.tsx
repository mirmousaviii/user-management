import type {Metadata} from 'next'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Header from "@/app/header";
import Footer from "@/app/footer";
import {Box} from "@mui/material";

export const metadata: Metadata = {
    title: 'User Management',
    description: 'A simple users management',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ThemeRegistry options={{key: 'mui'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}>
                <Header/>

                <Box sx={{p: 3}}>
                    {children}
                </Box>

                <Footer/>
            </Box>
        </ThemeRegistry>
        </body>
        </html>
    )
}
