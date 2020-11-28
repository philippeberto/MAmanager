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
                  <div className='cardTittle'>{aluno.aluno}</div>
                  <Link href={`/alunos/${aluno.id}/updateAluno`}>
                    <a className='editIcon'>
                      <Image
                        src="/img/icon-edit.png"
                        width='20'
                        height='20'
                        alt="edit icon"
                      />
                    </a>
                  </Link><br />
                  ({aluno.id})
                  <br />
                  <div className='cardDescription'>
                    Idade: {dayjs().diff(dayjs(aluno.birthDate), 'year')} anos
                    <br />
                    Vencimento: dia {aluno.dueDate}
                    <br />
                    Faixa: {aluno.degree}
                    <br />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div >
    )
  }
  return (
    <div>
      {props.errors.map(erro => {
        return <p>{JSON.stringify(erro.message, null, 2)}</p>
      })}
    </div>
  )
}

export default Alunos

export async function getServerSideProps({ req, res }) {
  console.log(` AUTH0_CLIENT_ID: "${process.env.AUTH0_CLIENT_ID}"`)
  console.log(`"${process.env.BEARER}"`)
  const session = await auth0.getSession(req)
  if (session) {
    const data = await fetch('https://mamanagerapi.herokuapp.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          `"${process.env.BEARER}"`,
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
