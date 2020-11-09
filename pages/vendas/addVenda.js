import React from 'react'
import auth0 from '../../lib/auth0'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const NovaVenda = (props) => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      idAluno: '',
      price: '',
      date: '',
      description: ''
    },
    validationSchema: Yup.object({
      idAluno: Yup.string()
        .min(20, 'O ID deve ter 20 caracteres')
        .max(20, 'O ID deve ter 20 caracteres')
        .required('Obrigatório'),
      price: Yup.number().required('Obrigatório'),
      date: Yup.date(),
      description: Yup.string()
        .min(5, 'A descrição deve ter 20 caracteres')
        .max(50, 'A descrição deve ter 20 caracteres')
        .required('Obrigatório'),
    }),
    onSubmit: (values) => {
      salvarVenda(values, props.user.email)
      alert(
        `idAluno: ${values.idAluno},price: ${values.price},date: ${values.date},description: ${values.description}`,
      )
    },
  })

  return (
    <div className="conteudo">
      <h2>Nova Mensalidade</h2>
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
          <label htmlFor="price">Preço: </label>
          <input
            value={values.price}
            onChange={handleChange}
            type="text"
            id="price"
            name="price"
          />
          {touched.price && errors.price ? <text>{errors.price}</text> : null}
        </div>
        <div>
          <label htmlFor="date">Data: </label>
          <input
            value={values.date}
            onChange={handleChange}
            type="date"
            id="date"
            name="date"
          />
          {touched.date && errors.date ? (
            <text>{errors.date}</text>
          ) : null}
        </div>
        <div>
          <label htmlFor="description">Descrição: </label>
          <input
            value={values.description}
            onChange={handleChange}
            type="text"
            id="description"
            name="description"
          />
          {touched.description && errors.description ? (
            <text>{errors.description}</text>
          ) : null}
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

const salvarVenda = async (venda, user) => {
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
        createVenda(user:"${user}", input: {
          idAluno: "${venda.idAluno}",
          price: ${venda.price},
          date: "${venda.date}",
          description: "${venda.description}",
        }){
          id
          description
        }
      }`,
    }),
  })
  console.log(data.json())
}
