import { UserProvider } from '@auth0/nextjs-auth0'
import React from 'react'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }) => {

  return (
    <UserProvider >
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp