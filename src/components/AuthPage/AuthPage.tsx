import { ReactElement } from 'react'

interface Props {
  children?: ReactElement
}

export function AuthPage({ children }: Props) {
  return (
    <main className='h-full w-full bg-white bg-auth-background bg-cover bg-center'>{children}</main>
  )
}
