import React from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useQuery } from '../../lib/graphql'
import Layout from '../../Components/Layout'
import Title from '../../Components/Title'
import Table from '../../Components/Table'
import Button from '../../Components/Button'

export default withPageAuthRequired(Despesas => {

  const { user, error, isLoading } = useUser()
  const { data: despesas, mutate } = useQuery(`{
    findAllDespesas(user:"${user.email}"){
      id
      description
      price
      dueDate
      paymentDate
      referenceMonth
    }
  }`)
  let total = 0
  return (
    <Layout>
      <div>
        <Title>Despesas</Title>
        <div className='block my-4'>
          <Button.Link href='#'>Registrar Despesa</Button.Link>
        </div>
        <div>
          {despesas && despesas.findAllDespesas &&
            <div className="inline-block flex flex-col mt-8">
              <div className="py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:pr-20">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                  <Table>
                    <Table.Head>
                      <Table.Th>Descrição</Table.Th>
                      <Table.Th>Data de Vencimento</Table.Th>
                      <Table.Th>Data do pagamento</Table.Th>
                      <Table.Th>Valor</Table.Th>
                      <Table.Th>Status</Table.Th>
                    </Table.Head>
                    <Table.Body>
                      {despesas.findAllDespesas.map((despesa) => {
                        total = total + despesa.price
                        return (
                          <Table.Tr key={despesa.id} className="table-hover">
                            <Table.Td>{despesa.description}</Table.Td>
                            <Table.Td>{dayjs(despesa.dueDate).format('DD/MM/YYYY')}</Table.Td>
                            <Table.Td>{dayjs(despesa.paymentDate).format('DD/MM/YYYY')}</Table.Td>
                            <Table.Td>{despesa.price} €</Table.Td>
                            <Table.Td>
                              {despesa.paid === false && <span>A Pagar</span>}
                              {despesa.paid === true && <span>Pago</span>}
                            </Table.Td>
                          </Table.Tr>
                        )
                      })}
                      <Table.Tr>
                        <Table.Td></Table.Td>
                        <Table.Td></Table.Td>
                        <Table.Td>Total</Table.Td>
                        <Table.Td>{total.toFixed(2)} €</Table.Td>
                        <Table.Td></Table.Td>
                      </Table.Tr>
                    </Table.Body>
                  </Table>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </Layout>
  )
})