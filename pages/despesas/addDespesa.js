import React from 'react'
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const CriarDespesa = (props) => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      description: '',
      price: '',
      dueDate: '',
      referenceMonth: '',
      paymentDate: '',
      paid: false,
    },
    validationSchema: Yup.object({
      description: Yup.string().required('Obrigatório'),
      price: Yup.number().required('Obrigatório'),
      dueDate: Yup.date().required('Obrigatório'),
      referenceMonth: Yup.number().max(12, 'Insira um número de 1 à 12').required('Obrigatório'),
      paymentDate: Yup.date().required('Obrigatório'),
      paid: Yup.boolean(),
    }),
    onSubmit: (values) => {
      salvarDespesa(values, props.user.email, props.bearer)
      alert(`Despesa ${values.description} salva com sucesso!`)
    },
  })

  return (
    <div className="conteudo">
      <h2>Nova Despesa</h2>
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
          <label htmlFor="dueDate">Data de Vencimento: </label>
          <input
            value={values.dueDate}
            onChange={handleChange}
            type="date"
            id="dueDate"
            name="dueDate"
          />
          {touched.dueDate && errors.dueDate ? (
            <text>{errors.dueDate}</text>
          ) : null}
        </div>
        <div>
          <label htmlFor="referenceMonth">Mês a ser pago: </label>
          <input
            value={values.referenceMonth}
            onChange={handleChange}
            type="number"
            maxLength="2"
            id="referenceMonth"
            name="referenceMonth"
          />
          {touched.referenceMonth && errors.referenceMonth ? (
            <text>{errors.referenceMonth}</text>
          ) : null}
          <div>
            <label htmlFor="paymentDate">Dia do Pagamento: </label>
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
          <br />
        </div>
        <input type="submit" value="Cadastrar"></input>
      </form>
    </div>
  )
}

export default CriarDespesa

const salvarDespesa = async (despesa, email, bearer) => {
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
        createDespesa(user:"${email}", input: {
          description: "${despesa.description}"
          price: ${parseFloat(despesa.price)}, 
          dueDate: "${despesa.dueDate}", 
          referenceMonth: ${parseInt(despesa.referenceMonth)}, 
          paymentDate: "${despesa.paymentDate}",
          createdAt: "${dayjs().format('YYYY-MM-DD')}"
        }){
          id
          description
        }
      }`,
    }),
  })
  console.log(data)
}
