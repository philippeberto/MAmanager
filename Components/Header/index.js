import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import auth0 from '../../lib/auth0'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="header">
      <Link href="app">
        <a>
          <Image src='/img/GBlogo.png' width='210' height='45' className="logo" />
        </a>
      </Link>
      <Link href="api/login">
        <a className="login">Entrar</a>
      </Link>|
      <Link href="api/logout">
        <a className="logout"> Sair</a>
      </Link>
    </div>
  )
}
export default Header

