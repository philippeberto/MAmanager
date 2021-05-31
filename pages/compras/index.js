import React from 'react'
import dayjs from 'dayjs'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useQuery } from '../../lib/graphql'
import Table from '../../Components/Table'
import Layout from '../../Components/Layout'
import Button from '../../Components/Button'
import Title from '../../Components/Title'

export default withPageAuthRequired(Compras => {

  const { user, error, isLoading } = useUser()
  const { data: compras, mutate } = useQuery(`{
    findAllCompras(user:"${user.email}"){
      id
      description
      price
      date
    }
  }`)
  let total = 0
  return (
    <Layout>
      <Title>Compras</Title>
      <div className='block my-4'>
        <Button.Link href='#'>Registrar Compra</Button.Link>
      </div>
      <div>
        {compras && !compras.findAllCompras &&
          <p className="bg-red-200 border-l-4 border-red-500 text-red-700 p-2 mb-4 w-auto mt-8">
            Ocorreu um erro na conexão com o banco de dados.
            Por favor contacte o administrador do sistema.
          </p>
        }
        {compras && compras.findAllCompras &&
          <div className="inline-block flex flex-col mt-8">
            <div className="py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:pr-20">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <Table>
                  <Table.Head>
                    <Table.Th>Descrição</Table.Th>
                    <Table.Th>Data</Table.Th>
                    <Table.Th>Valor</Table.Th>
                  </Table.Head>
                  <Table.Body>
                    {compras.findAllCompras.map((compra) => {
                      total = total + compra.price
                      return (
                        <Table.Tr key={compra.id} >
                          <Table.Td>
                            <div className="flex mensalidades-center">
                              <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">{compra.description}</div>
                                <div className="text-sm leading-5 text-gray-500">{compra.id}</div>
                              </div>
                            </div>
                          </Table.Td>
                          <Table.Td>{dayjs(compra.date).format('DD/MM/YYYY')}</Table.Td>
                          <Table.Td>{compra.price} €</Table.Td>
                        </Table.Tr>
                      )
                    })}
                    <Table.Tr >
                      <Table.Td></Table.Td>
                      <Table.Td>Total</Table.Td>
                      <Table.Td>{total} €</Table.Td>
                    </Table.Tr>
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