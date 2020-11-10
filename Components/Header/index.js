import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <a>
          <Image src='/img/GBlogo.png' width='210' height='45' className="logo" />
        </a>
      </Link>
      <Link href="/api/login">
        <a className="login">Entrar</a>
      </Link>|
      <Link href="/api/logout">
        <a className="logout"> Sair</a>
      </Link>
    </div>
  )
}
export default Header

