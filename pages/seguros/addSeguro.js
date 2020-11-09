import React from 'react'
import auth0 from '../../lib/auth0'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const NovaVenda = (props) => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      idAluno: '',
      idate: '',
      fdate: '',
      price: ''
    },
    validationSchema: Yup.object({
      idAluno: Yup.string()
        .min(20, 'O ID deve ter 20 caracteres')
        .max(20, 'O ID deve ter 20 caracteres')
        .required('Obrigatório'),
      idate: Yup.date(),
      fdate: Yup.date(),
      price: Yup.number(),
    }),
    onSubmit: (values) => {
      salvarSeguro(values, props.user.email)
      alert(
        `idAluno: ${values.idAluno},Data Inicial: ${values.idate},Data Final: ${values.fdate},Preço: ${values.price}`,
      )
    },
  })

  return (
    <div className="conteudo">
      <h2>Novo Seguro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idAluno">ID do Aluno: </label>
          <input
            value={values.idAluno}
            onChange={handleChange}
            type="text"
            id="idAluno"
            name="idAluno"
          />
          {touched.idAluno && errors.idAluno ? (
            <text>{errors.idAluno}</text>
          ) : null}
        </div>
        <div>
          <label htmlFor="idate">Data Inicial: </label>
          <input
            value={values.idate}
            onChange={handleChange}
            type="date"
            id="idate"
            name="idate"
          />
          {touched.idate && errors.idate ? (
            <text>{errors.idate}</text>
          ) : null}
        </div>
        <div>
          <label htmlFor="fdate">Data Final: </label>
          <input
            value={values.fdate}
            onChange={handleChange}
            type="date"
            id="fdate"
            name="fdate"
          />
          {touched.fdate && errors.fdate ? (
            <text>{errors.fdate}</text>
          ) : null}
        </div>
        <div>
          <label htmlFor="price">Valor: </label>
          <input
            value={values.price}
            onChange={handleChange}
            type="text"
            id="price"
            name="price"
          />
          {touched.price && errors.price ? <text>{errors.price}</text> : null}
        </div>
        <input type="submit" value="Cadastrar"></input>
      </form>
    </div>
  )
}

export default NovaVenda

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req)
  if (session) {
    return {
      props: {
        user: session.user
      }
    }
  }
  return {
    props: {
      user: "O usuário não está logado."
    }
  }
}

const salvarSeguro = async (seguro, email) => {
  const data = await fetch('https://mamanagerapi.herokuapp.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY',
    },
    body: JSON.stringify({
      query: `mutation{
        createSeguro(user:"${email}", input: {
          idAluno: "${seguro.idAluno}",
          idate: "${seguro.idate}",
          fdate: "${seguro.fdate}",
          price: ${seguro.price},
        }){
          idAluno
        }
      }`,
    }),
  })
  console.log(data.json())
}
