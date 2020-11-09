import React from 'react'
import auth0 from '../../lib/auth0'
import dayjs from 'dayjs'
import Link from 'next/link'

const Vendas = (props) => {
  let total = 0
  if (!props.errors) {
    return (
      <div className="table-center">
        <h2>Vendas</h2>
        <Link href="/vendas/addVenda">
          <a>Registar Venda</a>
        </Link>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td className="table-head">ID Aluno</td>
                <td className="table-head">Descrição</td>
                <td className="table-head">Valor</td>
                <td className="table-head">Data</td>
              </tr>
            </thead>
            <tbody>
              {props.data.findAllVendas.map((venda) => {
                total = total + venda.price
                return (
                  <tr key={venda.id} className="table-hover">
                    <td className="table-row">{venda.idAluno}</td>
                    <td className="table-row">{venda.description}</td>
                    <td className="table-row">{venda.price} €</td>
                    <td className="table-row">{dayjs(venda.date).format('DD/MM/YYYY')}</td>
                  </tr>
                )
              })}
              <td className="table-row"></td>
              <td className="table-row">Total</td>
              <td className="table-row">{total} €</td>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  return (
    <div>
      {props.errors.map(erro => {
        return <p>{JSON.stringify(erro.message, null, 2)}</p>
      })}
    )
    </div>
  )
}

export default Vendas

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
          findAllVendas(user:"${session.user.email}"){
            id
            description
            idAluno
            price
            date
          }
        }`,
      }),
    })
    const vendasDB = await data.json()
    const vendas = vendasDB.data
    let errors = null
    if (vendasDB.errors) {
      errors = vendasDB.errors
    }
    if (vendas) {
      return {
        props: {
          errors,
          user: session.user,
          data: vendas,
        },
      }
    } else {
      return {
        props: {
          errors,
          user: session.user,
          data: [],
        },
      }
    }
  }

  return {
    props: {
      user: 'Usuário não logado',
      data: 'Dados inacessíveis',
    },
  }
}
