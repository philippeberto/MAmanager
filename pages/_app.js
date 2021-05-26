import React from 'react'
import { UserProvider } from '@auth0/nextjs-auth0'
import '../styles/styles.css'
import Footer from '../Components/Footer'
import Layout from '../Components/Layout'

const MyApp = ({ Component, pageProps }) => {
  const { user } = pageProps
  return (
    <UserProvider user={user} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </UserProvider>
  )
}

export default MyApp