import { UserProvider } from '@auth0/nextjs-auth0'
import React from 'react'
import '../styles/styles.css'

const MyApp = ({ Component, pageProps }) => {

  return (
    <UserProvider >
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp