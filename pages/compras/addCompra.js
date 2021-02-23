import React from 'react'
import auth0 from '../../lib/auth0'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const addCompra = (props) => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      description: '',
      price: '',
      date: ''
    },
    validationSchema: Yup.object({
      description: Yup.string().required('Obrigatório'),
      price: Yup.number().required('Obrigatório'),
      date: Yup.date().required('Obrigatório')
    }),
    onSubmit: (values) => {
      salvarCompra(values, props.user.email, props.bearer)
      alert(`Compra ${values.description} salva com sucesso!`)
    },
  })

  return (
    <div className="conteudo">
      <h2>Registar Compra</h2>
      <form onSubmit={handleSubmit}>
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
        <div>
          <label htmlFor="date">Data: </label>
          <input
            value={values.date}
            onChange={handleChange}
            type="date"
            id="date"
            name="date"
          />
          {touched.date && errors.date ? (<text>{errors.date}</text>) : null}
        </div>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  )
}

export default addCompra

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req)
  const bearer = process.env.BEARER
  if (session) {
    return {
      props: {
        user: session.user,
        bearer
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

const salvarCompra = async (despesa, email, bearer) => {
  const data = await fetch('https://mamanagerapi.herokuapp.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        `${bearer}`,
    },
    body: JSON.stringify({
      query: `mutation{
        createCompra(user:"${email}", input: {
          description: "${despesa.description}"
          price: ${parseFloat(despesa.price)}, 
          date: "${despesa.date}", 
        }){
          id
          description
        }
      }`,
    }),
  })
  console.log(data)
}
