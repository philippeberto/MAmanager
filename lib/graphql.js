import { useState } from 'react'
import useSWR from 'swr'

const fetcher = async (query) => {
  console.log('api_url, ', process.env.NEXT_PUBLIC_API)
  console.log(query)
  const res = await fetch(process.env.NEXT_PUBLIC_API, {
    headers: {
      'content-type': 'application/json',
      Authorization: `${process.env.NEXT_PUBLIC_BEARER}`
    },
    method: 'POST',
    body: query
  })
  console.log(res)
  const json = await res.json()
  return json
}

const useQuery = queryStr => {
  const query = {
    query: queryStr
  }
  const allData = useSWR(JSON.stringify(query), fetcher)
  const { data, ...rest } = allData
  return { data: data ? data.data : null, ...rest }
}

const useMutation = query => {
  const [data, setData] = useState(null)
  const mutate = async variables => {
    const mutation = {
      query,
      variables
    }
    try {
      const returnedData = await fetcher(JSON.stringify(mutation))
      setData(returnedData)
      return returnedData
    } catch (err) {
      console.log(err)
    }
  }
  return [data, mutate]
}

export { useQuery, useMutation, fetcher }