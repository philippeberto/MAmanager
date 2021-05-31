import React, { useState } from 'react'
import Menu from './menu'
import { MdDashboard, MdHome, MdLabel } from 'react-icons/md'
import { FaBoxOpen, FaCalendarAlt, FaCashRegister, FaDollarSign, FaQuestionCircle, FaRegBuilding, FaRegCalendar, FaUserAlt, FaUserInjured, FaUsers, FaWallet } from 'react-icons/fa'
import Link from 'next/link'

const Sidebar = (props) => {
  const [sidebarOpen, setSideBarOpen] = useState(false)
  const open = () => {
    setSideBarOpen(true)
  }
  return (
    <div className="fixed z-30 inset-y-0 left-0 w-50 transition duration-300 transform bg-gradient-to-b from-blueTheme-dark to-blueTheme-light overflow-y-auto translate-x-0 ease-out mt-12">
      <Menu.Brand>
        <Link href="/">
          <a>
            MA manager
        </a>
        </Link>

      </Menu.Brand>

      <Menu.Nav>
        <Menu.Item href='/' Icon={MdDashboard}>Dashboard</Menu.Item>
        <Menu.Item href='/alunos' Icon={FaUsers}>Alunos</Menu.Item>
        <Menu.Item href='/mensalidades' Icon={FaRegCalendar}>Mensalidades<FaDollarSign className='fixed -ml-8 -mt-4 text-gray-200 text-md' /></Menu.Item>
        <Menu.Item href='/vendas' Icon={FaCashRegister}>Vendas</Menu.Item>
        <Menu.Item href='/compras' Icon={FaBoxOpen}>Compras</Menu.Item>
        <Menu.Item href='/despesas' Icon={FaWallet}>Despesas</Menu.Item>
        <Menu.Item href='/seguros' Icon={FaUserInjured}>Seguros</Menu.Item>
        <Menu.Item href='/sobre' Icon={FaQuestionCircle}>Sobre</Menu.Item>
      </Menu.Nav>
    </div>

  )
}

export default Sidebar
