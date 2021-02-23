import dayjs from 'dayjs'
import React from 'react'
import auth0 from '../lib/auth0'

const Index = (props) => {
  const saldo = parseFloat(props.mensalidades) + parseFloat(props.vendas) - parseFloat(props.compras) - parseFloat(props.despesas)
  console.log(saldo)
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
        <p className='valor'>{saldo.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Index

export async function getServerSideProps({ req, res }) {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
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
          idate: "${dayjs(firstDay).format('YYYY-MM-DD')}"
          fdate: "${dayjs(lastDay).format('YYYY-MM-DD')}"
        })
        somaDespesasByPeriod(user:"${session.user.email}",input:{
          idate: "${dayjs(firstDay).format('YYYY-MM-DD')}"
          fdate: "${dayjs(lastDay).format('YYYY-MM-DD')}"
        })
        somaVendasByPeriod(user:"${session.user.email}",input:{
          idate: "${dayjs(firstDay).format('YYYY-MM-DD')}"
          fdate: "${dayjs(lastDay).format('YYYY-MM-DD')}"
        })
        somaComprasByPeriod(user:"${session.user.email}",input:{
          idate: "${dayjs(firstDay).format('YYYY-MM-DD')}"
          fdate: "${dayjs(lastDay).format('YYYY-MM-DD')}"
        })
      }`,
      }),
    })
    const mensalidadesDB = await data.json()

    const mensalidades = mensalidadesDB.data.somaMensalidadesByPeriod.toFixed(2)
    const despesas = mensalidadesDB.data.somaDespesasByPeriod.toFixed(2)
    const vendas = mensalidadesDB.data.somaVendasByPeriod.toFixed(2)
    const compras = mensalidadesDB.data.somaComprasByPeriod.toFixed(2)
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

