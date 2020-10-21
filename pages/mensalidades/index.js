import React from 'react'
import auth0 from '../../lib/auth0'

const Mensalidades = (props) => {
  if (!props.errors) {
    if (props.user && props.user !== 'Usuário não logado') {
      return (
        <div>
          <h2>Mensalidades</h2>
          <a href="/mensalidades/novaMensalidade">Nova Mensalidade</a>
          <input type="text"></input>
          <button type="submit">ok</button>
          <div className="colum3">
            {props.data.findAllMensalidades.map((mensalidade) => {
              return (
                <div key={mensalidade.id}>
                  <div className="cardMensalidade">
                    <h3>{mensalidade.idAluno}</h3>
                    Mês pago: {mensalidade.monthPaid}
                    <br />
                    Data do Pagamento: {mensalidade.paymentDate}
                    <br />
                    Valor: {mensalidade.price}
                    <br />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
    return (
      <div>
        <h3>{props.user}</h3>
        <h3>{props.data}</h3>
      </div>
    )
  }
  return (
    <div>
      <h3>{JSON.stringify(props.errors[0].message, null, 2)}</h3>
    </div>
  )
}

export default Mensalidades

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
          findAllMensalidades{
            id
            idAluno
            monthPaid
            paymentDate
            price
          }
        }`,
      }),
    })
    const mensalidadesDB = await data.json()
    const mensalidades = mensalidadesDB.data
    let errors = null
    if (mensalidadesDB.errors) {
      errors = mensalidadesDB.errors
    }
    return {
      props: {
        errors,
        user: session.user,
        data: mensalidades,
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