import React from "react";
import auth0 from "../lib/auth0";

const Usuario = (props) => {
  const img = props.user.picture;
  return (
    <div className="profile ">
      <img src={img} alt="imagem de perfil" className="imgprofile" />
      <div className="profile profile-itens">
        Nome: {props.user.name}
        <br />
        E-mail: {props.user.email}
      </div>
    </div>
  );
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
