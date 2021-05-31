import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from "react"
import Layout from '../Components/Layout'

export default withPageAuthRequired(Usuario => {
  const { user, error, isLoading } = useUser()

  if (error) return (<div>Ocorreu um erro.<p>{JSON.stringify(error)}</p></div>)
  if (isLoading) return (<div>Carregando...</div>)
  if (user) return (
    <Layout>
      <div className="profile ">
        <img src={user.picture} alt="imagem de perfil" className="imgprofile" />
        <div className="profile profile-itens">
          Nome: {user.name}
          <br />
        E-mail: {user.email}
        </div>
      </div>
    </Layout>
  )
})