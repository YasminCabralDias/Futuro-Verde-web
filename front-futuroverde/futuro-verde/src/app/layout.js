import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FuturoVerde',
  description: 'Um app para incentivar a redução do consumo de carne',
}


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <AuthProvider>
          {children}
          <Toaster position="bottom-right" />
        </AuthProvider>
      </body>
    </html>
  )
}
