import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div >
      <aside className='sidebar conteudo'>

        <Link href="/usuario">
          <p className='sidebar'>
            Usuário
          </p>
        </Link>

        <Link href="/home" >
          <p className='sidebar'>
            Dashboard
          </p>
        </Link>

        <Link href="/alunos" >
          <p className='sidebar'>
            Alunos
          </p>
        </Link>

        <Link href="/mensalidades" >
          <p className='sidebar'>
            Mensalidades
          </p>
        </Link>

        <Link href="/vendas" >
          <p className='sidebar'>
            Vendas
          </p>
        </Link>

        <Link href="/compras" >
          <p className='sidebar'>
            Compras
          </p>
        </Link>

        <Link href="/despesas" >
          <p className='sidebar'>
            Despesas
          </p>
        </Link>

        <Link href="/seguros" >
          <p className='sidebar'>
            Seguros
          </p>
        </Link>
      </aside>
    </div>
  )
}

export default Sidebar