import React from 'react'
import auth0 from '../../lib/auth0'
import dayjs from 'dayjs'
import Link from 'next/link'

const Seguros = (props) => {
  if (!props.errors) {
    if (props.user && props.user !== 'Usuário não logado') {
      return (
        <div className="table-center">
          <h2>Seguros</h2>
          <Link href="/seguros/addSeguro">
            <a>Registar Seguro</a>
          </Link>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <td className="table-head">ID Aluno</td>
                  <td className="table-head">Validade</td>
                  <td className="table-head">Status</td>
                </tr>
              </thead>
              <tbody>
                {props.data.findAllSeguros.map((seguro) => {
                  return (
                    <tr key={seguro.id} className="table-hover">
                      <td className="table-row">{seguro.idAluno}</td>
                      <td className="table-row">{dayjs(seguro.fdate).format('DD/MM/YYYY')}</td>
                      <td className="table-row">{dayjs().isBefore(dayjs(seguro.fdate)) ? <pre>Válido</pre> : <pre>Vencido</pre>}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <pre>{props.data.findAllSeguros.status}</pre>
        </div>

      )
    }
    return (
      <div>
        <p>{props.user}</p>
        <p>{props.data}</p>
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

export default Seguros

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
          findAllSeguros(user:"${session.user.email}"){
            id
            idAluno
            idate
            fdate
            price
          }
        }`,
      }),
    })
    const segurosDB = await data.json()
    const seguros = segurosDB.data
    let errors = null
    if (segurosDB.errors) {
      errors = segurosDB.errors
    }
    if (seguros) {
      return {
        props: {
          errors,
          user: session.user,
          data: seguros,
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
