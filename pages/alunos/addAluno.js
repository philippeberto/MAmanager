import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import Layout from '../../Components/Layout'
import Title from '../../Components/Title'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Select from '../../Components/Select'
import { useUser } from '@auth0/nextjs-auth0'
import { useMutation } from '../../lib/graphql'

const CREATE_ALUNO = `
mutation createAluno($user: String!,
  $nome: String!,
  $telemovel: String!
  $ndata: Date!,
  $responsavel: String,
  $tresponsavel: String,
  $endereco: String,
  $localidade: String!,
  $vdata: Int!,
  $sexo: String!,
  $degree: Int!,
  $belt: Int!) {
    createAluno (user: $user, input: {
    aluno: $nome
    phone: $telemovel
    birthDate: $ndata
    parent: $responsavel
    parentPhone: $tresponsavel
    address: $endereco
    location: $localidade
    dueDate: $vdata
    gender: $sexo
    degree: $degree
    belt: $belt
    
  }) 
  {
    id
  }
}
`

const CriarAluno = (props) => {
  const router = useRouter()
  const { user, error, isLoading } = useUser()
  const [data, createAluno] = useMutation(CREATE_ALUNO)


  const { handleSubmit, handleChange, setFieldValue, values, touched, errors } = useFormik({
    initialValues: {
      user: '',
      nome: '',
      telemovel: '',
      ndata: '',
      endereco: '',
      localidade: '',
      vdata: '',
      sexo: '',
      responsavel: '',
      tresponsavel: '',
      degree: '',
      belt: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(2, 'Deve ter no mínimo 2 caracteres')
        .max(50, 'Deve ter no máximo 50 caracteres')
        .required('Obrigatório'),
      telemovel: Yup.string()
        .min(9, 'Deve ter no mínimo 9 caracteres')
        .max(13, 'Deve ter no máximo 13 caracteres')
        .required('Obrigatório'),
      ndata: Yup.date().required('Obrigatório'),
      endereco: Yup.string()
        .max(100, 'Endereço deve ter no máximo 100 caracteres'),
      localidade: Yup.string()
        .min(3, 'Deve ter no máximo 30 caracteres')
        .max(30, 'Deve ter no máximo 30 caracteres')
        .required('Obrigatório'),
      vdata: Yup.number()
        .typeError('Insira um número.')
        .min(1, 'Insira um valor entre 01 e 31')
        .max(31, 'Insira um valor entre 01 e 31')
        .required('Obrigatório'),
      sexo: Yup.string().required('Obrigatório'),
      responsavel: Yup.string().max(
        50,
        'O nome deve ter no máximo 50 caracteres',
      ),
      tresponsavel: Yup.string()
        .max(13, 'O telemóvel deve ter no máximo'),
      belt: Yup.string()
        .required('Obrigatório'),
      degree: Yup.number()
        .min(0, 'Error')
        .max(4, 'Error')
        .required('Obrigatório')
    }),
    onSubmit: async (values) => {
      const vencimento = parseInt(values.vdata)
      const grau = parseInt(values.degree)
      const faixa = parseInt(values.belt)
      values.vdata = vencimento
      values.degree = grau
      values.belt = faixa
      const data = await createAluno(values)
      if (data && !data.errors)
        router.push('/alunos')
    }
  })
  useEffect(() => {
    if (user && user.email) {
      setFieldValue('user', user.email)
    }
  }, [user])
  if (user) {
    return (
      <Layout>
        <Title>Novo Aluno</Title>
        <div className='my-4'>
          <Button.LinkOut href='/alunos'>Voltar</Button.LinkOut>
        </div>
        <div className="flex mt-8 ">
          <div className="align-middle inline-block bg-white shadow overflow-hidden sm:rounded-lg border-b border-gray-200 p-12 w-3/4">
            <form onSubmit={handleSubmit}>
              <Input name='nome'
                placeholder='Nome'
                onChange={handleChange}
                value={values.nome}
                type='text'
                errors={errors.nome}
              />
              <div className='w-1/5 inline-block'>
                <Select
                  value={values.belt}
                  onChange={handleChange}
                  id="masculino"
                  name="belt"
                  initial={{ id: 100, value: 'Selecione uma Graduação...' }}
                  options={[
                    { id: 0, value: "Branca" },
                    { id: 1, value: "Azul" },
                    { id: 2, value: "Roxa" },
                    { id: 3, value: "Marrom" },
                    { id: 4, value: "Preta" },
                  ]}
                  placeholder='Faixa'
                  errors={errors.belt}
                />
              </div>
              <div className='w-14 inline-block mx-2'>
                <Select
                  value={values.degree}
                  onChange={handleChange}
                  id="masculino"
                  name="degree"
                  initial={{ id: '', value: 'Grau...' }}
                  options={[
                    { id: 0, value: 0 },
                    { id: 1, value: 1 },
                    { id: 2, value: 2 },
                    { id: 3, value: 3 },
                    { id: 4, value: 4 }
                  ]}
                  placeholder='Grau'
                  errors={errors.degree}
                />
              </div>
              <div className='w-1/3 inline-block'>
                <Input
                  value={values.telemovel}
                  onChange={handleChange}
                  type="text"
                  id="telemovel"
                  name="telemovel"
                  placeholder='Telemóvel'
                  errors={errors.telemovel}
                />
              </div>
              <div className='w-1/3 inline-block ml-2'>
                <Input
                  value={values.ndata}
                  onChange={handleChange}
                  type="date"
                  id="ndata"
                  name="ndata"
                  placeholder='Data de Nascimento'
                  errors={errors.ndata}
                />
              </div>
              <Input
                value={values.endereco}
                onChange={handleChange}
                type="text"
                id="endereco"
                name="endereco"
                placeholder='Endereço'
                errors={errors.endereco}
              ></Input>
              <div>
                <div className='w-1/3 inline-block'>
                  <Input
                    value={values.localidade}
                    onChange={handleChange}
                    type="text"
                    id="localidade"
                    name="localidade"
                    placeholder='Localidade'
                    errors={errors.localidade}
                  />
                </div>
                <div className='w-1/3 px-2 inline-block'>
                  <Input
                    value={values.vdata}
                    onChange={handleChange}
                    type="text"
                    id="vdata"
                    name="vdata"
                    placeholder='Dia de vencimento'
                    errors={errors.vdata}
                  />
                </div>
                <div className='w-1/3 inline-block'>
                  <Select
                    value={values.sexo}
                    onChange={handleChange}
                    id="masculino"
                    name="sexo"
                    initial={{ id: '', value: 'Selecione o Sexo...' }}
                    options={[{ id: 'F', value: "Feminino" }, { id: 'M', value: "Masculino" }]}
                    placeholder='Sexo'
                    errors={errors.sexo}
                  />
                </div>
              </div>
              <div>
                <div className='w-2/3 inline-block'>
                  <Input
                    value={values.responsavel}
                    onChange={handleChange}
                    type="text"
                    id="responsavel"
                    name="responsavel"
                    placeholder='Responsável'
                    errors={errors.responsavel}
                  ></Input>
                </div>
                <div className='w-1/3 pl-2 inline-block'>
                  <Input
                    value={values.tresponsavel}
                    onChange={handleChange}
                    type="text"
                    id="tresponsavel"
                    name="tresponsavel"
                    placeholder='Tlm do Responsável'
                    errors={errors.tresponsavel}
                  ></Input>
                </div>
              </div>
              <Button.Cancel href='/alunos'>Cancelar</Button.Cancel>
              <div className='inline-block float-right -mt-2'><Button type="submit">Cadastrar</Button></div>
            </form>
            {
              data && !!data.errors && <p className="bg-red-200 border-l-4 border-red-500 text-red-700 p-2 mb-4 w-auto mt-8">Ocorreu um erro ao salvar o dados. Contacte o administrador do sistema.</p>
            }
          </div>
        </div>
      </Layout>
    )
  } else {
    return (
      <Layout>Não há sessão ativa.</Layout>
    )
  }
}

export default CriarAluno
