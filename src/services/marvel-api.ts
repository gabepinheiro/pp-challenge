import axios from 'axios'
import md5 from 'js-md5'
import { Character } from './types-marvel'

const priavekey = process.env.PRIVATE_KEY || ''
const publickey = process.env.PUBLIC_KEY || ''

const ts = new Date().getTime()
const hash = md5(ts + priavekey + publickey)

const instanceAxios = axios.create({
  baseURL: process.env.MARVEL_API_HOST,
  params: {
    ts,
    apikey: process.env.PUBLIC_KEY,
    hash
  }
})

type MarvelAPIResponse<T> = {
  code?: string
  data: {
    results: T
    total: number
  }
}

type Params = {
  limit?: number
  offset?: number
}

export const request = <T>(url: string, params: Params) =>
  instanceAxios
    .get<MarvelAPIResponse<T>>(url, {
      params
    })
    .then((res) => ({
      data: res.data.data.results,
      total: res.data.data.total
    }))

export const getAllCharacters = async () => {
  const { data: charactersOffset0 } = await request<Character[]>(
    '/characters',
    {
      limit: 100,
      offset: 0
    }
  )
  const { data: charactersOffset100 } = await request<Character[]>(
    '/characters',
    {
      limit: 100,
      offset: 100
    }
  )

  const { data: charactersOffset200 } = await request<Character[]>(
    '/characters',
    {
      limit: 100,
      offset: 200
    }
  )

  const { data: charactersOffset300 } = await request<Character[]>(
    '/characters',
    {
      limit: 100,
      offset: 300
    }
  )

  const { data: charactersOffset400 } = await request<Character[]>(
    '/characters',
    {
      limit: 100,
      offset: 400
    }
  )

  const { data: charactersOffset500 } = await request<Character[]>(
    '/characters',
    {
      limit: 100,
      offset: 500
    }
  )

  const { data: charactersOffset600 } = await request<Character[]>(
    '/characters',
    {
      limit: 100,
      offset: 600
    }
  )

  const { data: charactersOffset700 } = await request<Character[]>(
    '/characters',
    {
      limit: 100,
      offset: 700
    }
  )

  const { data: charactersOffset800 } = await request<Character[]>(
    '/characters',
    {
      limit: 100,
      offset: 800
    }
  )

  const { data: charactersOffset900 } = await request<Character[]>(
    '/characters',
    {
      limit: 100,
      offset: 900
    }
  )

  const characters = [
    ...charactersOffset0,
    ...charactersOffset100,
    ...charactersOffset200,
    ...charactersOffset300,
    ...charactersOffset400,
    ...charactersOffset500,
    ...charactersOffset600,
    ...charactersOffset700,
    ...charactersOffset800,
    ...charactersOffset900
  ]

  return characters
}
