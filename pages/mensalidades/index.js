import React from 'react'
import auth0 from '../../lib/auth0'
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Mensalidades = (props) => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      inicialDate: '',
      finalDate: '',
    },
    validationSchema: Yup.object({
      inicialDate: Yup.date().required(''),
      finalDate: Yup.date().required(''),
    }),
    onSubmit: (values) => {
      buscarMensalidade(values, props.user.email, props.bearer)
      alert(
        `inicialDate: ${values.inicialDate},finalDate: ${values.finalDate}`,
      )
    },
  })
  if (!props.errors) {
    return (
      <div>
        <h2>Mensalidades</h2>
        <a href="/mensalidades/addMensalidade">Nova Mensalidade</a>
        <h4>Período</h4>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'inline-block' }}>
            <label htmlFor="inicialDate">Data Inicial</label><br />
            <input
              value={values.inicialDate}
              onChange={handleChange}
              type="date"
              id="inicialDate"
              name="inicialDate"
              required
            />
            {touched.inicialDate && errors.inicialDate ?
              <text>{errors.inicialDate}</text>
              : null}
          </div>
          <div style={{ display: 'inline-block' }}>
            <label htmlFor="finalDate">Data Final</label><br />
            <input
              value={values.finalDate}
              onChange={handleChange}
              type="date"
              id="finalDate"
              name="finalDate"
              required
            />
            {touched.finalDate && errors.finalDate ?
              <text>{errors.finalDate}</text>
              : null}
          </div>
          <input type="submit" value="Buscar"></input>
        </form>

        <div className="colum3">
          {props.data.map((mensalidade) => {
            return (
              <div key={mensalidade.id}>
                <div className="cardAluno">
                  <h3>{mensalidade.nomeAluno}</h3>
                  Mês pago: {mensalidade.monthPaid}
                  <br />
                  Data do Pagamento: {dayjs(mensalidade.paymentDate).format('DD/MM/YYYY')}
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
      {props.errors.map(erro => {
        return <p>{JSON.stringify(erro.message, null, 2)}</p>
      })}
    </div>
  )
}

export default Mensalidades

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
          findAllMensalidades(user:"${session.user.email}"){
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
    for (const mensalidade of mensalidadesDB.data.findAllMensalidades) {
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
            findAluno(user:"${session.user.email}", id:"${mensalidade.idAluno}"){
              aluno
            }
          }`,
        }),
      })
      const alunoDB = await data.json()
      const aluno = alunoDB.data.findAluno.aluno
      mensalidade.nomeAluno = aluno
    }
    console.log(mensalidadesDB.data.findAllMensalidades)
    let errors = null
    if (mensalidadesDB.errors) {
      errors = mensalidadesDB.errors
    }
    return {
      props: {
        errors,
        user: session.user,
        data: mensalidadesDB.data.findAllMensalidades
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

async function buscarMensalidade(values, user, bearer) {

}
