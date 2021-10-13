export type Character = {
  id: number
  name: string
  description: string
  urls: string[]
  thumbnail: Image
  comics: ComicList
  stories: StoryList
  events: EventList
  series: SeriesList
}

type Image = {
  path: string
  extension: string
}

type ComicList = {
  items: ComicSummary[]
}

type ComicSummary = {
  name: string
}

type StoryList = {
  items: StorySummary[]
}

type StorySummary = {
  name: string
}
type EventList = {
  items: EventSummary[]
}

type EventSummary = {
  name: string
}

type SeriesList = {
  items: SeriesSummary[]
}

type SeriesSummary = {
  name: string
}
