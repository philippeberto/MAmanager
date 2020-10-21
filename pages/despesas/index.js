import React from 'react'
import auth0 from '../../lib/auth0'
import Link from 'next/link'

const Despesas = (props) => {
  let total = 0
  if (!props.errors) {
    if (props.user && props.user !== 'Usuário não logado') {
      return (
        <div className="table-center">
          <h2>Despesas</h2>
          <Link href="/despesas/criarDespesa">
            <a>Registar Despesa</a>
          </Link>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <td className="table-head">Descrição</td>
                  <td className="table-head">Data de Vencimento</td>
                  <td className="table-head">Data do pagamento</td>
                  <td className="table-head">Valor</td>
                  <td className="table-head">Status</td>
                </tr>
              </thead>
              <tbody>
                {props.data.findAllDespesas.map((despesa) => {
                  total = total + despesa.price
                  return (
                    <tr key={despesa.id} className="table-hover">
                      <td className="table-row">{despesa.description}</td>
                      <td className="table-row">{despesa.dueDate}</td>
                      <td className="table-row">{despesa.paymentDate}</td>
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
  }
  return (
    <div>
      <h3>{props.user}</h3>
      <h3>{props.data}</h3>
    </div>
  )
}

export default Despesas

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req)
  if (session) {
    const data = await fetch('http://localhost:3001/graphql', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY',
      },
      body: JSON.stringify({
        query: `{
            findAllDespesas{
              id
              description
              price
              dueDate
              referenceMonth
              paymentDate
              paid
            }
          }`,
      }),
    })
    const despesasDB = await data.json()
    const despesas = despesasDB.data
    let errors = null
    if (despesasDB.errors) {
      errors = alunosDB.errors
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