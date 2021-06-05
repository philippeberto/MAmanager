import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'
import { useMutation } from '../../lib/graphql'

const CREATE_MENSALIDADE = `
mutation createAluno($user: String!,
  idAluno: String!,
  price: Float!,
  paymentDate: String!,
  start: String!,
  end: String) {
    createAluno (user: $user, input: {
      idAluno: $idAluno
      price: $price
      paymentDate: $paymentDate
      period: {
        start: $start
        end: $end
      }
    }) 
  }
`

export default withPageAuthRequired(CriarMensalidade = () => {
  const router = useRouter()
  const { user, error, isLoading } = useUser()
  const [data, createMensalidade] = useMutation(CREATE_MENSALIDADE)

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      idAluno: '',
      price: '',
      paymentDate: '',
      period: '',
    },
    validationSchema: Yup.object({
      idAluno: Yup.string()
        .min(20, 'O ID deve ter 20 caracteres')
        .max(20, 'O ID deve ter 20 caracteres')
        .required('Obrigatório'),
      price: Yup.number().required('Obrigatório'),
      paymentDate: Yup.date(),
      period: Yup.number(),
    }),
    onSubmit: (values) => {
      salvarMensalidade(values, props.user.email, props.bearer)
      alert(
        `idAluno: ${values.idAluno},price: ${values.price},paymentDate: ${values.paymentDate},period: ${values.period}`,
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
          <label htmlFor="paymentDate">Data do Pagamento: </label>
          <input
            value={values.paymentDate}
            onChange={handleChange}
            type="date"
            id="paymentDate"
            name="paymentDate"
          />
          {touched.paymentDate && errors.paymentDate ? (
            <text>{errors.paymentDate}</text>
          ) : null}
        </div>
        <div>
          <label htmlFor="period">Mês Pago: </label>
          <input
            value={values.period}
            onChange={handleChange}
            type="text"
            id="period"
            name="period"
          />
          {touched.period && errors.period ? (
            <text>{errors.period}</text>
          ) : null}
        </div>
        <input type="submit" value="Cadastrar"></input>
      </form>
    </div>
  )
})

const salvarMensalidade = async (mensalidade, user, bearer) => {
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
        createMensalidade(user:"${user}", input: {
          idAluno: "${mensalidade.idAluno}",
          price: ${parseFloat(mensalidade.price)},
          paymentDate: "${mensalidade.paymentDate}",
          period: ${mensalidade.period}
        })
      }`,
    }),
  })
  console.log(data)
}
