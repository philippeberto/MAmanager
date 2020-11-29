import React from 'react'
import auth0 from '../../lib/auth0'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const CriarMensalidade = (props) => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      idAluno: '',
      price: '',
      paymentDate: '',
      monthPaid: '',
    },
    validationSchema: Yup.object({
      idAluno: Yup.string()
        .min(20, 'O ID deve ter 20 caracteres')
        .max(20, 'O ID deve ter 20 caracteres')
        .required('Obrigatório'),
      price: Yup.number().required('Obrigatório'),
      paymentDate: Yup.date(),
      monthPaid: Yup.number(),
    }),
    onSubmit: (values) => {
      salvarMensalidade(values, props.user.email, props.bearer)
      alert(
        `idAluno: ${values.idAluno},price: ${values.price},paymentDate: ${values.paymentDate},monthPaid: ${values.monthPaid}`,
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
          <label htmlFor="monthPaid">Mês Pago: </label>
          <input
            value={values.monthPaid}
            onChange={handleChange}
            type="text"
            id="monthPaid"
            name="monthPaid"
          />
          {touched.monthPaid && errors.monthPaid ? (
            <text>{errors.monthPaid}</text>
          ) : null}
        </div>
        <input type="submit" value="Cadastrar"></input>
      </form>
    </div>
  )
}

export default CriarMensalidade

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
          price: ${mensalidade.price},
          paymentDate: "${mensalidade.paymentDate}",
          monthPaid: ${mensalidade.monthPaid}
        })
      }`,
    }),
  })
  console.log(data)
}
