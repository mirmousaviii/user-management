import type { Metadata } from 'next'
import './globals.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

import {Box,
} from "@mui/material";

import Header from "@/app/header";
import Footer from "@/app/footer";

export const metadata: Metadata = {
  title: 'User Management',
  description: 'A simple users management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
    <html lang="en">
        <body>
        <ThemeRegistry>
            <Header />

            <Box sx={{p: 3}}>
              {children}
            </Box>

            <Footer />
        </ThemeRegistry>
        </body>
    </html>
  )
}
