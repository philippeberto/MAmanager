import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from '../lib/graphql'
import dayjs from 'dayjs'
import CardStat from '../Components/CardStat'
import { MdPeople, MdEuroSymbol } from 'react-icons/md'
import Layout from '../Components/Layout/index'

const Index = () => {
  const { user, error, isLoading } = useUser()
  const date = new Date()
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  if (!user) return (
    <div >
      <div className='background'>
        <Image src='/img/GBCampolide_logo.png' width={400} height={400} />
      </div>
      <div className='loginpage'>
        <div className='msg-login'>Necessitas de Autenticação</div>
        <Link href="/api/auth/login">
          <a className="button-login">Entrar</a>
        </Link>
      </div>
    </div>
  )

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
                <MdPeople className="h-8 w-8 text-white" />
              </CardStat.Icon>
              <CardStat.Data>
                <CardStat.Title>{somaMensalidades.somaMensalidadesByPeriod}</CardStat.Title>
                <CardStat.Description>mensalidades</CardStat.Description>
              </CardStat.Data>
            </CardStat>
            <CardStat>
              <CardStat.Icon>
                <MdPeople className="h-8 w-8 text-white" />
              </CardStat.Icon>
              <CardStat.Data>
                <CardStat.Title>{somaVendas.somaVendasByPeriod}</CardStat.Title>
                <CardStat.Description>vendas</CardStat.Description>
              </CardStat.Data>
            </CardStat>
            <CardStat>
              <CardStat.Icon>
                <MdPeople className="h-8 w-8 text-white" />
              </CardStat.Icon>
              <CardStat.Data>
                <CardStat.Title>{somaCompras.somaComprasByPeriod}</CardStat.Title>
                <CardStat.Description>compras</CardStat.Description>
              </CardStat.Data>
            </CardStat>
            <CardStat>
              <CardStat.Icon>
                <MdPeople className="h-8 w-8 text-white" />
              </CardStat.Icon>
              <CardStat.Data>
                <CardStat.Title>{somaDespesas.somaDespesasByPeriod}</CardStat.Title>
                <CardStat.Description>despesas</CardStat.Description>
              </CardStat.Data>
            </CardStat>
            <CardStat>
              <CardStat.Icon>
                <MdPeople className="h-8 w-8 text-white" />
              </CardStat.Icon>
              <CardStat.Data>
                <CardStat.Title>{saldo}</CardStat.Title>
                <CardStat.Description>saldo total</CardStat.Description>
              </CardStat.Data>
            </CardStat>
          </>
        )}
      </Layout>
    )
  }
}

export default Index