import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { Character } from 'services/types-marvel'
import * as MarvelAPI from 'services/marvel-api'

type CharacterPageProps = {
  character: Character
}

export default function CharacterPage({ character }: CharacterPageProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <h1>{character.name}</h1>
}

export const getStaticPaths = async () => {
  const { data: characters } = await MarvelAPI.request<Character[]>(
    '/characters',
    { limit: 3 }
  )

  const paths = characters.map(({ id }) => ({
    params: { id: String(id) }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await MarvelAPI.request<Character[]>(
    `/characters/${params?.id}`
  )

  const [character] = data

  if (!character) return { notFound: true }

  return {
    props: {
      character
    }
  }
}
