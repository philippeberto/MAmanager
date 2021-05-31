import React from 'react'
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useQuery } from '../../lib/graphql'
import Button from '../../Components/Button'
import Layout from '../../Components/Layout'
import Input from '../../Components/Input'
import Title from '../../Components/Title'
import Table from '../../Components/Table'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { MdEuroSymbol } from 'react-icons/md'

export default withPageAuthRequired(Mensalidades => {
  const { user, error, isLoading } = useUser()
  const { data: mensalidades, mutate } = useQuery(`{
      findAllMensalidades(user:"${user.email}"){
        id
        idAluno
        paymentDate
        price
      }
    }`)

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      inicialDate: '',
      finalDate: '',
    },
    validationSchema: Yup.object({
      inicialDate: Yup.date().required(''),
      finalDate: Yup.date().required(''),
    }),
    onSubmit: (values) => {
      buscarMensalidade(values, user.email)
    },
  })
  return (
    <Layout>
      <div className=''>
        <div className='inline-block'>
          <Title>Mensalidades</Title>
          <div className='block my-4'>
            <Button.Link href='#'>Nova Mensalidade</Button.Link>
          </div>
        </div>
        <div className="inline-block float-right lg:pr-16 lg:-mr-2 ">
          {/* <div className="bg-white px-4 shadow overflow-hidden sm:rounded-lg border-b border-gray-200 text-sm">
            <form onSubmit={handleSubmit}>
              <div className='inline-flex'>
                <Input
                  value={values.inicialDate}
                  onChange={handleChange}
                  type="date"
                  id="inicialDate"
                  name="inicialDate"
                  placeholder='Data Inicial'
                  errors={errors.inicialDate}
                />
                <div className='ml-2'>
                  <Input
                    value={values.finalDate}
                    onChange={handleChange}
                    type="date"
                    id="finalDate"
                    name="finalDate"
                    placeholder='Data Final'
                    errors={errors.finalDate}
                  />
                </div>
                <div className='mt-8 ml-4'>
                  <Button type="submit"><FaSearch /></Button>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </div>
      {mensalidades && !mensalidades.findAllMensalidades &&
        <p className="bg-red-200 border-l-4 border-red-500 text-red-700 p-2 mb-4 w-auto mt-8">
          Ocorreu um erro na conexão com o banco de dados.
          Por favor contacte o administrador do sistema.
          </p>
      }
      {mensalidades && mensalidades.findAllMensalidades &&
        <div className="inline-block flex flex-col mt-8">
          <div className="py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:pr-20">
            <div
              className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <Table>
                <Table.Head>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Data</Table.Th>
                  <Table.Th>Valor</Table.Th>
                </Table.Head>
                <Table.Body>
                  {mensalidades.findAllMensalidades.map(mensalidade => {
                    return (
                      <Table.Tr key={mensalidade.id}>
                        <Table.Td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex mensalidades-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900">Aluno.nome
                              </div>
                              <div className="text-sm leading-5 text-gray-500">{mensalidade.id}</div>
                            </div>
                          </div>
                        </Table.Td>
                        <Table.Td
                          className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                          <Link href={`/products/${mensalidade.id}/edit`}>
                            <div className="">{dayjs(mensalidade.paymentDate).format('DD/MM/YYYY')}</div>
                          </Link>
                        </Table.Td>
                        <Table.Td
                          className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                          <div className="inline-flex ">{mensalidade.price}<MdEuroSymbol className='mt-1 ml-2' /></div>
                        </Table.Td>
                      </Table.Tr>)
                  })}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      }
    </Layout>
  )
})
