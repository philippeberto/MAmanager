import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { useQuery } from '../lib/graphql'
import dayjs from 'dayjs'
import CardStat from '../Components/CardStat'
import Layout from '../Components/Layout/index'
import { FaBalanceScale, FaBoxOpen, FaCashRegister, FaDollarSign, FaQuestion, FaRegCalendar, FaSearch, FaWallet } from 'react-icons/fa'
import Button from '../Components/Button'
import Link from 'next/link'

const Index = () => {
  const { user, error, isLoading } = useUser()
  const date = new Date()
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    const { data: somaMensalidades } = useQuery(`
    {
      somaMensalidadesByPeriod(user:"${user}",input:{
        idate: "${dayjs(firstDay).format('YYYY-MM-DD')}"
        fdate: "${dayjs(lastDay).format('YYYY-MM-DD')}"
      })
    }
    `)
    const { data: somaDespesas } = useQuery(`
    {
      somaDespesasByPeriod(user:"${user}",input:{
        idate: "${dayjs(firstDay).format('YYYY-MM-DD')}"
        fdate: "${dayjs(lastDay).format('YYYY-MM-DD')}"
      })
    }
    `)
    const { data: somaVendas } = useQuery(`
    {
      somaVendasByPeriod(user:"${user}",input:{
        idate: "${dayjs(firstDay).format('YYYY-MM-DD')}"
        fdate: "${dayjs(lastDay).format('YYYY-MM-DD')}"
      })
    }
    `)
    const { data: somaCompras } = useQuery(`
    {
      somaComprasByPeriod(user:"${user}",input:{
        idate: "${dayjs(firstDay).format('YYYY-MM-DD')}"
        fdate: "${dayjs(lastDay).format('YYYY-MM-DD')}"
      })
    }
    `)
    let saldo = 0
    if (somaDespesas && somaMensalidades && somaVendas && somaCompras)
      saldo = parseFloat(somaMensalidades.somaMensalidadesByPeriod) + parseFloat(somaVendas.somaVendasByPeriod) - parseFloat(somaCompras.somaComprasByPeriod) - parseFloat(somaDespesas.somaDespesasByPeriod)

    return (
      <Layout>
        {somaDespesas && somaMensalidades && somaVendas && somaCompras && (
          <>
            <CardStat>
              <CardStat.Icon>
                <FaRegCalendar className="h-8 w-8 text-white" />
                <FaDollarSign className='fixed ml-2 -mt-5 text-white text-md' />
              </CardStat.Icon>
              <CardStat.Data>
                <CardStat.Title>{somaMensalidades.somaMensalidadesByPeriod}</CardStat.Title>
                <CardStat.Description>mensalidades</CardStat.Description>
              </CardStat.Data>
            </CardStat>
            <CardStat>
              <CardStat.Icon>
                <FaCashRegister className="h-8 w-8 text-white" />
              </CardStat.Icon>
              <CardStat.Data>
                <CardStat.Title>{somaVendas.somaVendasByPeriod}</CardStat.Title>
                <CardStat.Description>vendas</CardStat.Description>
              </CardStat.Data>
            </CardStat>
            <CardStat>
              <CardStat.Icon>
                <FaBoxOpen className="h-8 w-8 text-white" />
              </CardStat.Icon>
              <CardStat.Data>
                <CardStat.Title>{somaCompras.somaComprasByPeriod}</CardStat.Title>
                <CardStat.Description>compras</CardStat.Description>
              </CardStat.Data>
            </CardStat>
            <CardStat>
              <CardStat.Icon>
                <FaWallet className="h-8 w-8 text-white" />
              </CardStat.Icon>
              <CardStat.Data>
                <CardStat.Title>{somaDespesas.somaDespesasByPeriod}</CardStat.Title>
                <CardStat.Description>despesas</CardStat.Description>
              </CardStat.Data>
            </CardStat>
            <CardStat>
              <CardStat.Icon>
                <FaBalanceScale className="h-8 w-8 text-white" />
              </CardStat.Icon>
              <CardStat.Data>
                <CardStat.Title>{saldo}</CardStat.Title>
                <CardStat.Description>saldo</CardStat.Description>
              </CardStat.Data>
            </CardStat>
          </>
        )}
      </Layout>
    )
  }
  return (
    <div className='h-screen bg-gradient-to-b from-blueTheme-dark to-blueTheme-light pt-8 lg:pt-48'>

      <div className='w-full p-4 md:w-1/2 md:h-1/2 md:rounded-lg md:m-auto'>
        <Link href="/sobre" >
          <a className='float-right text-white text-sm'>
            <FaQuestion />
          </a>
        </Link>
        <div className='bg-white mt-6 p-4 md:rounded-lg md:shadow-lg'>
          <div className='bg-red-200 border-l-4 border-red-500 text-red-700 text-center mt-2 p-4'>Necessitas de Autenticação</div>
          <div className='w-16 mt-12 m-auto'>
            <Button.Link href="/api/auth/login">
              <a>Entrar</a>
            </Button.Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index