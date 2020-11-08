import dayjs from 'dayjs'

const mensalidadesResumo = () => {
  const soma = somaMensalidades()
  return soma
}

export default mensalidadesResumo

const somaMensalidades = async () => {
  const cdate = new Date();
  let firstDay = new Date(cdate.getFullYear(), cdate.getMonth(), 1);
  let lastDay = new Date(cdate.getFullYear(), cdate.getMonth() + 1, 0);
  firstDay = dayjs(firstDay).format('YYYY-MM-DD')
  lastDay = dayjs(lastDay).format('YYYY-MM-DD')
  const data = await fetch('http://localhost:3001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY',
    },
    body: JSON.stringify({
      query: `{
        findMensalidadesByPeriod(user:"philippe.bjj@gmail.com",input:{
          idate: "2020-11-01"
          fdate: "2020-11-30"
        })
        somaDespesasByPeriod(user:"philippe.bjj@gmail.com",input:{
          idate: "2020-11-01"
          fdate: "2020-11-30"
        })
      }`,
    }),
  })
  const mensalidadesDB = await data.json()

  const mensalidades = parseInt(mensalidadesDB.data.findMensalidadesByPeriod)
  console.log(mensalidades)
  return mensalidades
}

