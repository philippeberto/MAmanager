import React from 'react'
import '../styles/styles.css'
import '../styles/loginstyles.css'
import '../styles/alunos.css'
import '../styles/index.css'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import Link from 'next/link'
import Image from 'next/image'


const MyApp = ({ Component, pageProps }) => {
  if (pageProps.user === 'Usuário não logado') {
    return (
      <div >
        <div className='background'>
          <Image src='/img/GBCampolide_logo.png' width={400} height={400} />
        </div>
        <div className='loginpage'>
          <div className='msg-login'>Necessitas de Autenticação</div>
          <Link href="/api/login">
            <a className="button-login">Entrar</a>
          </Link>
        </div>
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