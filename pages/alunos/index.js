import React from 'react'
import auth0 from '../../lib/auth0'
import dayjs from 'dayjs'
import Link from 'next/link'
import Image from 'next/image'

const Alunos = (props) => {
  if (!props.errors) {
    return (
      <div>
        <h2>Alunos Matriculados</h2>
        <a href="/alunos/addAluno">Novo Aluno</a>
        <input type="text"></input>
        <button type="submit">ok</button>
        <div className="colum3">
          {props.data.findAllAlunos.map((aluno) => {
            return (
              <div key={aluno.id}>
                <div className="cardAluno">
                  <h3>{aluno.aluno}</h3>
                  <Link href={`/alunos/${aluno.id}/updateAluno`}>
                    <a>
                      <Image
                        src="/img/icon-edit.png"
                        width='20'
                        height='20'
                        alt="edit icon"
                      />
                    </a>
                  </Link>
                    ID: {aluno.id}
                  <br />
                    Nasc.: {dayjs(aluno.birthDate).format('DD/MM/YYYY')}
                  <br />
                    Localização: {aluno.location}
                  <br />
                    Vencimento: {aluno.dueDate}
                  <br />
                    Sexo: {aluno.gender}
                  <br />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  return (
    <div>
      {props.errors.map(erro => {
        return <p>{JSON.stringify(erro.message, null, 2)}</p>
      })}
    )
    </div>
  )
}

export default Alunos

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req)
  if (session) {
    const data = await fetch('https://mamanagerapi.herokuapp.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY',
      },
      body: JSON.stringify({
        query: `{ 
          findAllAlunos(user: "${session.user.email}") {
            id
            aluno
            birthDate
            dueDate
            gender
            location
        } }`,
      }),
    })
    const alunosDB = await data.json()
    const alunos = alunosDB.data
    let errors = null
    if (alunosDB.errors) {
      errors = alunosDB.errors
    }

    return {
      props: {
        errors,
        user: session.user,
        data: alunos,
      },
    }
  }
  return {
    props: {
      user: 'Usuário não logado',
      data: 'Dados inacessíveis'
    }
  }
}
