import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const NovaVenda = () => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      description: '',
      idAluno: '',
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
      salvarMensalidade(values)
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

export default NovaVenda

const salvarMensalidade = async (venda) => {
  const data = await fetch('http://localhost:3001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY',
    },
    body: JSON.stringify({
      query: `mutation{
        createMensalidade(input: {
          idAluno: "${venda.idAluno}",
          price: ${venda.price},
          paymentDate: "${venda.paymentDate}",
          monthPaid: "${venda.monthPaid}"
        })
      }`,
    }),
  })
  console.log(data)
}
