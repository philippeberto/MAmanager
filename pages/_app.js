import React from 'react'
import '../styles/styles.css'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="principal">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
