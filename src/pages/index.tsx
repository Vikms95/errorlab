'use client'
import { AuthPage } from '@/components/AuthPage/AuthPage'
import { AuthPageWithForm } from '@/components'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-between bg-white '>
      {/* <Navbar /> */}
      <AuthPageWithForm />
    </main>
  )
}
