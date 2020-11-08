import React from 'react'
import auth0 from '../../lib/auth0'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const CriarAluno = (props) => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      nome: '',
      telemovel: '',
      ndata: '',
      endereco: '',
      localidade: '',
      vdata: '',
      sexo: '',
      responsavel: '',
      tresponsavel: '',
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .max(50, 'O nome deve ter no máximo 50 caracteres')
        .required('Obrigatório'),
      telemovel: Yup.string()
        .max(13, 'O telemóvel deve ter no máximo 13 caracteres')
        .required('Obrigatório'),
      ndata: Yup.date().required('Obrigatório'),
      endereco: Yup.string().max(
        100,
        'Endereço deve ter no máximo 100 caracteres',
      ),
      localidade: Yup.string()
        .max(30, 'Localidade deve ter no máximo 30 caracteres')
        .required('Obrigatório'),
      vdata: Yup.number()
        .max(31, 'Insira um valor entre 01 e 31')
        .required('Obrigatório'),
      sexo: Yup.string().required('Obrigatório'),
      responsavel: Yup.string().max(
        50,
        'O nome deve ter no máximo 50 caracteres',
      ),
      tresponsavel: Yup.string().max(13, 'O telemóvel deve ter no máximo'),
    }),
    onSubmit: (values) => {
      salvarAluno(values, props.user.email)
      alert(
        `nome: ${values.nome},telemovel: ${values.telemovel},ndata: ${values.ndata},endereco: ${values.endereco},localidade: ${values.localidade},vdata: ${values.vdata},sexo: ${values.sexo},responsavel: ${values.responsavel},tresponsavel: ${values.tresponsavel},`,
      )
    },
  })

  return (
    <div className="conteudo">
      <h2>Novo Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input
            value={values.nome}
            onChange={handleChange}
            type="text"
            id="nome"
            name="nome"
          />
          {touched.nome && errors.nome ? <text>{errors.nome}</text> : null}
        </div>
        <div>
          <label htmlFor="telemovel">Telemóvel: </label>
          <input
            value={values.telemovel}
            onChange={handleChange}
            type="text"
            id="telemovel"
            name="telemovel"
          />
          {touched.telemovel && errors.telemovel ? (
            <text>{errors.telemovel}</text>
          ) : null}
        </div>
        <div>
          <label htmlFor="ndata">Data de Nascimento: </label>
          <input
            value={values.ndata}
            onChange={handleChange}
            type="date"
            id="ndata"
            name="ndata"
          />
          {touched.ndata && errors.ndata ? <text>{errors.ndata}</text> : null}
        </div>
        <div>
          <label htmlFor="endereco">Endereço: </label>
          <input
            value={values.endereco}
            onChange={handleChange}
            type="text"
            id="endereco"
            name="endereco"
          ></input>
          <label htmlFor="localidade">Localidade: </label>
          <input
            value={values.localidade}
            onChange={handleChange}
            type="text"
            id="localidade"
            name="localidade"
          />
          {touched.localidade && errors.localidade ? (
            <text>{errors.localidade}</text>
          ) : null}
        </div>
        <div>
          <label htmlFor="vdata">Dia de Vencimento: </label>
          <input
            value={values.vdata}
            onChange={handleChange}
            type="text"
            id="vdata"
            name="vdata"
          />
          {touched.vdata && errors.vdata ? <text>{errors.vdata}</text> : null}
        </div>
        <div>
          <label htmlFor="sexo">Sexo: </label>
          <input
            value={values.sexo}
            onChange={handleChange}
            type="radio"
            id="masculino"
            name="sexo"
            value="Masculino"
          />
          <label htmlFor="masculino">Masculino </label>
          <input
            value={values.sexo}
            onChange={handleChange}
            type="radio"
            id="feminino"
            name="sexo"
            value="Feminino"
          />
          <label htmlFor="feminino">Feminino </label>
          {touched.sexo && errors.sexo ? <text>{errors.sexo}</text> : null}
        </div>
        <div>
          <label htmlFor="responsavel">Responsável: </label>
          <input
            value={values.responsavel}
            onChange={handleChange}
            type="text"
            id="responsavel"
            name="responsavel"
          ></input>
          <br />
          <label htmlFor="tresponsavel">
            Telemóvel do
            <br />
            Responsável:{' '}
          </label>
          <input
            value={values.tresponsavel}
            onChange={handleChange}
            type="text"
            id="tresponsavel"
            name="tresponsavel"
          ></input>
          <br />
        </div>
        <input type="submit" value="Cadastrar"></input>
      </form>
    </div>
  )
}

export default CriarAluno

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req)
  if (session) {
    return {
      props: {
        user: session.user,
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

const salvarAluno = async (aluno, user) => {
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
        createAluno(user:"${user}", input: {
          aluno: "${aluno.nome}"
          phone: "${aluno.telemovel}", 
          birthDate: "${aluno.ndata}", 
          parent: "${aluno.responsavel}", 
          parentPhone: "${aluno.tresponsavel}", 
          address: "${aluno.endereco}", 
          location: "${aluno.localidade}", 
          dueDate: ${parseInt(aluno.vdata)}, 
          gender: "${aluno.sexo}"
        }){
          id
          aluno
        }
      }`,
    }),
  })
  const alunoDB = await data.json()
  const novoAluno = alunoDB.data
  console.log(novoAluno)
}