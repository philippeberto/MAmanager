import React from 'react'
import auth0 from '../lib/auth0'

const Index = (props) => {
  return (
    <div>
      <h3>Mensalidades</h3>
      <p>Resumo das Mensalidades</p>
      <p>Total no Mês atual: {props.mensalidades}  </p>
      <h3>Vendas</h3>
      <p>Resumo das vendas</p>
      <p>Total no Mês atual: {props.vendas} </p>
      <h3>Compras</h3>
      <p>Resumo das compras</p>
      <p>Total no Mês atual: {props.compras} </p>
      <h3>Despesas</h3>
      <p>Resumo das despesas</p>
      <p>Total no Mês atual: {props.despesas}  </p>
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
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY',
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

