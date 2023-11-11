import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

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
        <body className={inter.className}>
        <main>
          <div>
            <div>
              <a href="/">
                <Image
                    src="/vercel.svg"
                    alt="User Management"
                    className="dark:invert"
                    width={100}
                    height={24}
                    priority
                />
              </a>
            </div>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/users">User list</a></li>
            </ul>

          </div>

          {children}

          <div>
            <div>
              &copy; {new Date().getFullYear()} by <a href="https://mirmousavi.com/" target="_blank">Mostafa
              Mirmousavi</a>
            </div>
          </div>
        </main>
        </body>
    </html>
  )
}
