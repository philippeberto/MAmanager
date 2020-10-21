import React from 'react'
import auth0 from '../../lib/auth0'
import Link from 'next/link'

const Vendas = (props) => {
  if (!props.errors) {
    if (props.user && props.user !== 'Usuário não logado') {
      return (
        <div className="table-center">
          <h2>Vendas</h2>
          <Link href="/despesas/criarVenda">
            <a>Registar Venda</a>
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
                {props.data.findAllVendas.map((venda) => {
                  total = total + despesa.price
                  return (
                    <tr key={despesa.id} className="table-hover">
                      <td className="table-row">{despesa.description}</td>
                      <td className="table-row">{despesa.date}</td>
                      <td className="table-row">{despesa.price} €</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  }
  return <div>vazio</div>
}

export default Vendas

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req)
  if (session) {
    const data = await fetch('http://localhost:3001/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY',
      },
      body: JSON.stringify({
        query: `{
          findAllVendas{
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
    console.log(vendas)
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
