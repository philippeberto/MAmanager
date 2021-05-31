import React from 'react'
import { useMutation, useQuery } from '../../lib/graphql'
import { useUser } from '@auth0/nextjs-auth0'
import CardAluno from '../../Components/CardAluno'
import Title from '../../Components/Title/index'
import Button from '../../Components/Button/index'
import Layout from '../../Components/Layout'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const REMOVE_ALUNO = `
mutation removeAluno ($user: String!, $id: String!) {
  removeAluno (
    user: $user
    id: $id
    ) 
}
`

export default withPageAuthRequired(function Alunos() {
  const { user, error, isLoading } = useUser()
  const [deleteData, deleteProduct] = useMutation(REMOVE_ALUNO)

  const { data: alunos, mutate } = useQuery(`{
    findAllAlunos(user: "${user.email}") {
      id
      name
      birthDate
      belt
      degree
      imageUrl
    } 
  }`
  )

  if (user) {


    const remove = (user, id) => async () => {
      await deleteProduct({ user, id })
      mutate()
    }

    return (
      <Layout>
        <div>
          <Title>Alunos Matriculados</Title>
          <div className='my-4'>
            <Button.Link href='./alunos/addAluno'>Novo Aluno</Button.Link>
          </div>

        </div>

        {alunos && alunos.findAllAlunos && alunos.findAllAlunos.length > 0 && alunos.findAllAlunos.map((aluno) => {
          return (
            <CardAluno
              key={aluno.id}
              user={user.email}
              id={aluno.id}
              name={aluno.name}
              birthDate={aluno.birthDate}
              belt={aluno.belt}
              degree={aluno.degree}
              remove={remove}
              url={aluno.url} />
          )
        })}
      </Layout>
    )

  }
  return (
    <Layout>
      {error && (
        <pre>{JSON.stringify(error, null, 2)}</pre>
      )}
    </Layout>
  )
})