import React from 'react'
import Link from 'next/link'
import auth0 from '../../lib/auth0'
import img from '../../public/img/GBlogo.png'

const Header = (props) => {
  return (
    <div className="header">
      <Link href="app">
        <a>
          <img src={img} className="logo" />
        </a>
      </Link>
      <Link href="api/login">
        <a className="login">Entrar</a>
      </Link>
      |
      <Link href="api/logout">
        <a className="logout"> Sair</a>
      </Link>
    </div>
  )
}
export default Header

export async function getServerSideProps({ req, res }) {
  console.log(req)
  const session = await auth0.getSession(req)
  return {
    props: {
      user: session.user,
    },
  }
}
