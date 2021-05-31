import React, { useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import dayjs from "dayjs"
import { useRouter } from 'next/router'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useMutation, useQuery } from '../../../lib/graphql'
import Layout from '../../../Components/Layout'
import Title from '../../../Components/Title'
import Button from '../../../Components/Button'
import Input from '../../../Components/Input'
import Select from '../../../Components/Select'

// const FIND_ALUNO_BY_ID = `
//   mutation 
//     findAluno (user: "${session.user.email}", id:"${req.url.split('/')[2]}") {
//       id
//       aluno
//       phone
//       birthDate
//       parent
//       parentPhone
//       address
//       location
//       dueDate
//       gender
//   } }`

const UPDATE_ALUNO =
  `mutation updateAluno(
  $user: String!,
  $id: String!,
  $name: String!,
  $phone: String!
  $birthDate: Date!,
  $parent: String,
  $parentPhone: String,
  $address: String,
  $location: String!,
  $dueDate: Int!,
  $gender: String!,
  $degree: Int!,
  $belt: Int!) {
    updateAluno ( user: $user, id: $id, input: {
    name: $name
    phone: $phone
    birthDate: $birthDate
    parent: $parent
    parentPhone: $parentPhone
    address: $address
    location: $location
    dueDate: $dueDate
    gender: $gender
    degree: $degree
    belt: $belt
  }) 
  {
    id
  }
}
`
export default withPageAuthRequired(function UpdateAluno() {
  const router = useRouter()
  const { user, error, isLoading } = useUser()
  const [data, updateAluno] = useMutation(UPDATE_ALUNO)
  const { data: aluno } = useQuery(`
    query{
      findAluno (user: "${user.email}" id:"${router.query.id}"){
        id
        name
        phone
        birthDate
        parent
        parentPhone
        address
        location
        dueDate
        gender
        belt
        degree
    }
  }`)

  const { handleSubmit, handleChange, setFieldValue, values, touched, errors } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      birthDate: '',
      parent: '',
      parentPhone: '',
      address: '',
      location: '',
      dueDate: '',
      gender: '',
      belt: '',
      degree: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "O nome deve ter no máximo 50 caracteres")
        .required("Obrigatório"),
      phone: Yup.string()
        .max(13, "O telemóvel deve ter no máximo 13 caracteres")
        .required("Obrigatório"),
      birthDate: Yup.date().required("Obrigatório"),
      address: Yup.string().max(
        100,
        "Endereço deve ter no máximo 100 caracteres"
      ),
      location: Yup.string()
        .max(30, "Localidade deve ter no máximo 30 caracteres")
        .required("Obrigatório"),
      dueDate: Yup.number()
        .max(31, "Insira um valor entre 01 e 31")
        .required("Obrigatório"),
      gender: Yup.string().required("Obrigatório"),
      parent: Yup.string().max(
        50,
        "O nome deve ter no máximo 50 caracteres"
      ),
      parentPhone: Yup.string().max(13, "O telemóvel deve ter no máximo"),
      belt: Yup.string()
        .required('Obrigatório'),
      degree: Yup.number()
        .min(0, 'Error')
        .max(4, 'Error')
        .required('Obrigatório')
    }),
    onSubmit: async values => {
      const vencimento = parseInt(values.dueDate)
      const grau = parseInt(values.degree)
      const faixa = parseInt(values.belt)
      values.dueDate = vencimento
      values.degree = grau
      values.belt = faixa
      const newAluno = {
        user: user.email,
        id: router.query.id,
        ...values
      }
      console.log(newAluno)
      const data = await updateAluno(newAluno)
      console.log(data)
      if (data && !data.errors)
        router.push('/alunos')
    }
  })
  useEffect(() => {
    if (aluno) {
      setFieldValue('id', aluno.findAluno.id),
        setFieldValue('name', aluno.findAluno.name),
        setFieldValue('phone', aluno.findAluno.phone),
        setFieldValue('birthDate', dayjs(aluno.findAluno.birthDate).format('YYYY-MM-DD')),
        setFieldValue('parent', aluno.findAluno.parent),
        setFieldValue('parentPhone', aluno.findAluno.parentPhone),
        setFieldValue('address', aluno.findAluno.address),
        setFieldValue('location', aluno.findAluno.location),
        setFieldValue('dueDate', aluno.findAluno.dueDate),
        setFieldValue('gender', aluno.findAluno.gender),
        setFieldValue('belt', aluno.findAluno.belt),
        setFieldValue('degree', aluno.findAluno.degree)
    }
  }, [aluno])
  if (user) {
    return (
      <Layout>
        <Title>Editar Aluno</Title>
        <div className='my-4'>
          <Button.LinkOut href='/alunos'>Voltar</Button.LinkOut>
        </div>
        <div className="flex mt-8 ">
          <div className="align-middle inline-block bg-white shadow overflow-hidden sm:rounded-lg border-b border-gray-200 p-12 w-3/4">
            <form onSubmit={handleSubmit}>
              <Input name='name'
                placeholder='Nome'
                onChange={handleChange}
                value={values.name}
                type='text'
                errors={errors.name}
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
                  value={values.phone}
                  onChange={handleChange}
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder='Telemóvel'
                  errors={errors.phone}
                />
              </div>
              <div className='w-1/3 inline-block ml-2'>
                <Input
                  value={values.birthDate}
                  onChange={handleChange}
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  placeholder='Data de Nascimento'
                  errors={errors.birthDate}
                />
              </div>
              <Input
                value={values.address}
                onChange={handleChange}
                type="text"
                id="address"
                name="address"
                placeholder='Endereço'
                errors={errors.address}
              ></Input>
              <div>
                <div className='w-1/3 inline-block'>
                  <Input
                    value={values.location}
                    onChange={handleChange}
                    type="text"
                    id="location"
                    name="location"
                    placeholder='Localidade'
                    errors={errors.location}
                  />
                </div>
                <div className='w-1/3 px-2 inline-block'>
                  <Input
                    value={values.dueDate}
                    onChange={handleChange}
                    type="text"
                    id="dueDate"
                    name="dueDate"
                    placeholder='Dia de vencimento'
                    errors={errors.dueDate}
                  />
                </div>
                <div className='w-1/3 inline-block'>
                  <Select
                    value={values.gender}
                    onChange={handleChange}
                    id="masculino"
                    name="gender"
                    initial={{ id: '', value: 'Selecione o Sexo...' }}
                    options={[{ id: 'F', value: "Feminino" }, { id: 'M', value: "Masculino" }]}
                    placeholder='Sexo'
                    errors={errors.gender}
                  />
                </div>
              </div>
              <div>
                <div className='w-2/3 inline-block'>
                  <Input
                    value={values.parent}
                    onChange={handleChange}
                    type="text"
                    id="parent"
                    name="parent"
                    placeholder='Responsável'
                    errors={errors.parent}
                  ></Input>
                </div>
                <div className='w-1/3 pl-2 inline-block'>
                  <Input
                    value={values.parentPhone}
                    onChange={handleChange}
                    type="text"
                    id="parentPhone"
                    name="parentPhone"
                    placeholder='Tlm do Responsável'
                    errors={errors.parentPhone}
                  ></Input>
                </div>
              </div>
              <Button.Cancel href='/alunos'>Cancelar</Button.Cancel>
              <div className='inline-block float-right -mt-2'><Button type="submit">Cadastrar</Button></div>
            </form>
            {
              data && !data.updateAluno && <p className="bg-red-200 border-l-4 border-red-500 text-red-700 p-2 mb-4 w-auto mt-8">Ocorreu um erro ao salvar o dados. Contacte o administrador do sistema.</p>
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
})