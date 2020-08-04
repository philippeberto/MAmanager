import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='header'>
      <Link href="api/login">
        <a className="login" >Entrar</a>
      </Link>
      |
      <Link href="api/logout">
        <a className="login" >Sair</a>
      </Link>
    </div >
  )
}
export default Header