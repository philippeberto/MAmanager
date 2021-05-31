import React from 'react'
import dayjs from 'dayjs'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Layout from '../../Components/Layout'
import { useQuery } from '../../lib/graphql'
import Title from '../../Components/Title'
import Button from '../../Components/Button'
import Table from '../../Components/Table'
import { MdEuroSymbol } from 'react-icons/md'

export default withPageAuthRequired(Seguros => {
  const { user, error, isLoading } = useUser()
  const { data: seguros, mutate } = useQuery(`{
    findAllSeguros(user:"${user.email}"){
      id
      idAluno
      idate
      fdate
      price
    }
  }`)

  if (error) return (<div>Ocorreu um erro.<p>{JSON.stringify(error)}</p></div>)
  if (isLoading) return (<div>Carregando...</div>)
  if (user) return (
    <Layout>
      <Title>Seguros</Title>
      <div className='my-4'>
        <Button.Link href="#">Registar Seguro</Button.Link>
      </div>
      <div>
        {seguros && !seguros.findAllSeguros &&
          <p className="bg-red-200 border-l-4 border-red-500 text-red-700 p-2 mb-4 w-auto mt-8">
            Ocorreu um erro na conexão com o banco de dados.
            Por favor contacte o administrador do sistema.
          </p>
        }
        {seguros && seguros.findAllSeguros &&
          <div className="inline-block flex flex-col mt-8">
            <div className="py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:pr-20">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <Table>
                  <Table.Head>
                    <Table.Th>Aluno</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Valor</Table.Th>
                  </Table.Head>
                  <Table.Body>
                    {seguros.findAllSeguros.map((seguro) => {
                      return (
                        <Table.Tr key={seguro.id}>
                          <Table.Td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex mensalidades-center">
                              <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">Aluno.nome</div>
                                <div className="text-sm leading-5 text-gray-500">Seguro: {seguro.id}</div>
                              </div>
                            </div>
                          </Table.Td>
                          <Table.Td
                            className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                            <div>{dayjs(seguro.fdate).format('DD/MM/YYYY')}</div>
                          </Table.Td>
                          <Table.Td
                            className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                            <div className="inline-flex ">{seguro.price}<MdEuroSymbol className='mt-1 ml-2' /></div>
                          </Table.Td>
                        </Table.Tr>)
                    })}
                  </Table.Body>
                </Table>
              </div>
            </div>
          </div>
        }
      </div>
    </Layout>
  )
})