import React from 'react'
import auth0 from '../lib/auth0'

const Index = (props) => {
  const saldo = props.mensalidades + props.vendas - props.compras - props.despesas
  return (
    <div className='index'>
      <div className='res-card dark-green'>
        <div className='res-tittle'>Mensalidades</div>
        <div className='euro'>€</div>
        <p className='valor'>{props.mensalidades}</p>
      </div>
      <div className='res-card green'>
        <div className='res-tittle'>Vendas</div>
        <div className='euro'>€</div>
        <p className='valor'>{props.vendas}</p>
      </div>
      <div className='res-card yellow'>
        <div className='res-tittle'>Compras</div>
        <div className='euro'>€</div>
        <p className='valor'>{props.compras}</p>
      </div>
      <div className='res-card red'>
        <div className='res-tittle'>Despesas</div>
        <div className='euro'>€</div>
        <p className='valor'>{props.despesas}</p>
      </div>
      <div className='res-card blue'>
        <div className='res-tittle'>Saldo</div>
        <div className='euro'>€</div>
        <p className='valor'>{saldo}</p>
      </div>
    </div>
  )
}

export default Index

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req)
  if (session) {
    const data = await fetch('https://mamanagerapi.herokuapp.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          `${process.env.BEARER}`,
      },
      body: JSON.stringify({
        query: `{
        somaMensalidadesByPeriod(user:"${session.user.email}",input:{
          idate: "2020-11-01"
          fdate: "2020-11-30"
        })
        somaDespesasByPeriod(user:"${session.user.email}",input:{
          idate: "2020-11-01"
          fdate: "2020-11-30"
        })
        somaVendasByPeriod(user:"${session.user.email}",input:{
          idate: "2020-11-01"
          fdate: "2020-11-30"
        })
        somaComprasByPeriod(user:"${session.user.email}",input:{
          idate: "2020-11-01"
          fdate: "2020-11-30"
        })
      }`,
      }),
    })
    const mensalidadesDB = await data.json()

    const mensalidades = mensalidadesDB.data.somaMensalidadesByPeriod
    const despesas = mensalidadesDB.data.somaDespesasByPeriod
    const vendas = mensalidadesDB.data.somaVendasByPeriod
    const compras = mensalidadesDB.data.somaComprasByPeriod
    return {
      props: {
        user: session.user,
        mensalidades,
        despesas,
        vendas,
        compras
      }
    }
  }
  return {
    props: {
      user: 'Usuário não logado',
      data: 'Dados Inacessíveis'
    }
  }
}

