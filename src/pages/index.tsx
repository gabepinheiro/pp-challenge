import { HomeTemplate } from 'templates/Home'
import * as MarvelAPI from 'services/marvel-api'
import { Character } from 'services/types-marvel'

type HomeProps = {
  characters: Character[]
}

export default function Home({ characters }: HomeProps) {
  return <HomeTemplate characters={characters} />
}

export const getStaticProps = async () => {
  const characters = await MarvelAPI.getAllCharacters()

  const charactersWithDescription = characters.filter((character) => {
    if (character.description.length) {
      return character
    }
  })

  return {
    props: {
      characters: charactersWithDescription
    }
  }
}
