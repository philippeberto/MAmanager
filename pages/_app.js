import React from 'react'
import auth0 from '../lib/auth0'
import '../styles/styles.css'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'

const MyApp = ({ Component, pageProps }) => {
  if (pageProps.user === 'Usuário não logado') {
    return (
      <div>
        <Header />
        <p>Necessitas de Autenticação</p>
        <Footer />
      </div>
    )
  }
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