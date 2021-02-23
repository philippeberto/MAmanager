
const create = async (aluno, user, bearer) => {
  console.log(bearer)
  const data = await fetch('https://mamanagerapi.herokuapp.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        `${bearer}`,
    },
    body: JSON.stringify({
      query: `mutation{
        createAluno(user:"${user}", input: {
          aluno: "${aluno.nome}"
          phone: "${aluno.telemovel}", 
          birthDate: "${aluno.ndata}", 
          parent: "${aluno.responsavel}", 
          parentPhone: "${aluno.tresponsavel}", 
          address: "${aluno.endereco}", 
          location: "${aluno.localidade}", 
          dueDate: ${parseInt(aluno.vdata)}, 
          gender: "${aluno.sexo}"
        }){
          id
          aluno
        }
      }`,
    }),
  })
  const alunoDB = await data.json()
  const novoAluno = alunoDB.data
  console.log(alunoDB)
}

const update = async (aluno, user, bearer) => {
  const data = await fetch('https://mamanagerapi.herokuapp.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        `"${bearer}"`,
    },
    body: JSON.stringify({
      query: `{ 
        findAluno (user: "${user}", id:"${req.url.split('/')[2]}") {
          id
          aluno
          phone
          birthDate
          parent
          parentPhone
          address
          location
          dueDate
          gender
      } }`,
    }),
  })
}

export default {
  create,
  update
}



// aluno: "${aluno.nome}"
// phone: "${aluno.telemovel}", 
// birthDate: "${aluno.ndata}", 
// parent: "${aluno.responsavel}", 
// parentPhone: "${aluno.tresponsavel}", 
// address: "${aluno.endereco}", 
// location: "${aluno.localidade}", 
// dueDate: ${parseInt(aluno.vdata)}, 
// gender: "${aluno.sexo}"