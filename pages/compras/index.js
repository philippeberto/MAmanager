import React from 'react'
import auth0 from '../../lib/auth0'
import dayjs from 'dayjs'
import Link from 'next/link'

const Compras = (props) => {
  let total = 0
  if (!props.errors) {
    return (
      <div className="table-center">
        <h2>Compras</h2>
        <Link href="/compras/addCompra">
          <a>Registar Compra</a>
        </Link>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td className="table-head">Descrição</td>
                <td className="table-head">Data</td>
                <td className="table-head">Valor</td>
              </tr>
            </thead>
            <tbody>
              {props.data.findAllCompras.map((despesa) => {
                total = total + despesa.price
                return (
                  <tr key={despesa.id} className="table-hover">
                    <td className="table-row">{despesa.description}</td>
                    <td className="table-row">{dayjs(despesa.date).format('DD/MM/YYYY')}</td>
                    <td className="table-row">{despesa.price} €</td>
                    <td className="table-row">
                      {despesa.paid === false && <span>A Pagar</span>}
                      {despesa.paid === true && <span>Pago</span>}
                    </td>
                  </tr>
                )
              })}
              <tr className="table-head ">
                <td className="table-row"></td>
                <td className="table-row">Total</td>
                <td className="table-row">{total} €</td>
                <td className="table-row"></td>
              </tr>
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

export default Compras

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req)
  if (session) {
    const data = await fetch('https://mamanagerapi.herokuapp.com/graphql', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization:
          `${process.env.BEARER}`,
      },
      body: JSON.stringify({
        query: `{
            findAllCompras(user:"${session.user.email}"){
              id
  description
  price
  date
            }
          }`,
      }),
    })
    const despesasDB = await data.json()
    const despesas = despesasDB.data
    let errors = null
    if (despesasDB.errors) {
      errors = despesasDB.errors
    }
    return {
      props: {
        errors,
        user: session.user,
        data: despesas,
      },
    }
  }
  return {
    props: {
      user: 'Usuário não logado',
      data: 'Dados inacessíveis',
    },
  }
}
