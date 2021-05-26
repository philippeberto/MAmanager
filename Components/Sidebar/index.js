import React, { useState } from 'react'
import Menu from './menu'
import { MdHome, MdLabel } from 'react-icons/md'
import { FaBoxOpen, FaRegBuilding } from 'react-icons/fa'
import Link from 'next/link'

const Sidebar = (props) => {
  const [sidebarOpen, setSideBarOpen] = useState(false)
  const open = () => {
    setSideBarOpen(true)
  }
  return (
    <div className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-red-900 overflow-y-auto translate-x-0 ease-out mt-16">
      <Menu.Brand>
        <Link href="/">
          <a>
            MA manager
        </a>
        </Link>

      </Menu.Brand>

      <Menu.Nav>
        <Menu.Item href='/usuario' Icon={MdHome}>Usuário</Menu.Item>
        <Menu.Item href='/' Icon={FaBoxOpen}>Dashboard</Menu.Item>
        <Menu.Item href='/alunos' Icon={MdLabel}>Alunos</Menu.Item>
        <Menu.Item href='/mensalidades' Icon={FaRegBuilding}>Mensalidades</Menu.Item>
        <Menu.Item href='/vendas' Icon={MdHome}>Vendas</Menu.Item>
        <Menu.Item href='/compras' Icon={FaBoxOpen}>Compras</Menu.Item>
        <Menu.Item href='/despesas' Icon={MdLabel}>Despesas</Menu.Item>
        <Menu.Item href='/seguros' Icon={FaRegBuilding}>Seguros</Menu.Item>
      </Menu.Nav>
    </div>

  )
}

export default Sidebar
