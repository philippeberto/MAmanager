import React from 'react'
import Link from 'next/link'

const Sidebar = (props) => {
  return (
    <aside className="sidebar-image">
      <Link href="/usuario">
        <a>
          <div className="sidebar">Usuário</div>
        </a>
      </Link>

      <Link href="/">
        <a>
          <div className="sidebar">Dashboard</div>
        </a>
      </Link>

      <Link href="/alunos">
        <a>
          <div className="sidebar">Alunos</div>
        </a>
      </Link>

      <Link href="/mensalidades">
        <a>
          <div className="sidebar">Mensalidades</div>
        </a>
      </Link>

      <Link href="/vendas">
        <a>
          <div className="sidebar">Vendas</div>
        </a>
      </Link>

      <Link href="/compras">
        <a>
          <div className="sidebar">Compras</div>
        </a>
      </Link>

      <Link href="/despesas">
        <a>
          <div className="sidebar">Despesas</div>
        </a>
      </Link>

      <Link href="/seguros">
        <a>
          <div className="sidebar">Seguros</div>
        </a>
      </Link>
    </aside>
  )
}

export default Sidebar
