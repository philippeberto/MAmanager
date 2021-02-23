import React from 'react'
import auth0 from '../lib/auth0'

const getSession = props => {
  return props
}

export default getSession

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req)
  console.log(session)
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

