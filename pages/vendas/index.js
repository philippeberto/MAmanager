import React from 'react'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useQuery } from '../../lib/graphql'
import Layout from '../../Components/Layout'
import Title from '../../Components/Title'
import Table from '../../Components/Table'
import Button from '../../Components/Button'

export default withPageAuthRequired(Vendas => {
  const { user, error, isLoading } = useUser()
  const { data: vendas, mutate } = useQuery(`{
    findAllVendas(user:"${user.email}"){
      id
      description
      idAluno
      price
      date
      }
    }`)
  let total = 0
  if (error) return (<div>Ocorreu um erro.<p>{JSON.stringify(error)}</p></div>)
  if (isLoading) return (<div>Carregando...</div>)
  if (user) return (
    <Layout>
      <Title>Vendas</Title>
      <div className='block my-4'>
        <Button.Link href='#'>Registrar Venda</Button.Link>
      </div>
      { vendas && !vendas.findAllVendas &&
        <p className="bg-red-200 border-l-4 border-red-500 text-red-700 p-2 mb-4 w-auto mt-8">
          Ocorreu um erro na conexão com o banco de dados.
          Por favor contacte o administrador do sistema.
          </p>
      }
      <div>
        {vendas && vendas.findAllVendas &&
          <div className="inline-block flex flex-col mt-8">
            <div className="py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:pr-20">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <Table>
                  <Table.Head>
                    <Table.Th>ID Aluno</Table.Th>
                    <Table.Th>Descrição</Table.Th>
                    <Table.Th>Valor</Table.Th>
                    <Table.Th>Data</Table.Th>
                  </Table.Head>
                  <Table.Body>
                    {vendas.findAllVendas.map((venda) => {
                      total += venda.price
                      return (
                        <Table.Tr key={venda.id}>
                          <Table.Td>{venda.idAluno}</Table.Td>
                          <Table.Td>{venda.description}</Table.Td>
                          <Table.Td>{venda.price} €</Table.Td>
                          <Table.Td>{dayjs(venda.date).format('DD/MM/YYYY')}</Table.Td>
                        </Table.Tr>
                      )
                    })}
                    <Table.Td></Table.Td>
                    <Table.Td>Total</Table.Td>
                    <Table.Td>{total} €</Table.Td>
                    <Table.Td></Table.Td>
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