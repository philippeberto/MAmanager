import React from 'react'
import auth0 from '../lib/auth0'

const Index = props => {
  console.log(props)
  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}

export default Index

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req)
  if (session) {
    return {
      props: {
        user: session.user
      }
    }
  }
  return {
    props: {
      user: 'Usuário não logado'
    }
  }
}