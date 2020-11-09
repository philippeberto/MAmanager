import React from "react";
import auth0 from "../lib/auth0";

const Usuario = (props) => {
  if (!props.errors) {
    const img = props.user.picture;
    console.log(img)
    return (

      <div className="profile ">
        <img src={img} alt="imagem de perfil" className="imgprofile" />
        <div className="profile profile-itens">
          Nome: {props.user.name}
          <br />
        E-mail: {props.user.email}
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
};

export default Usuario;

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);
  if (session) {
    return {
      props: {
        user: session.user,
      },
    };
  } else {
    return {
      props: {
        user: "Usuário",
      },
    };
  }
}
