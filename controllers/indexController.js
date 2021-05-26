import { useQuery } from '../lib/graphql'
import dayjs from 'dayjs'


const getStatistics = (user) => {
  const date = new Date()
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const { data, mutate } = useQuery(`
  {
    somaMensalidadesByPeriod(user:"${user}",input:{
      idate: "${dayjs(firstDay).format('YYYY-MM-DD')}"
      fdate: "${dayjs(lastDay).format('YYYY-MM-DD')}"
    }`
  )
  console.log(data)
}

export default getStatistics