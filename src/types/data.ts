export type Cinema = {
  id: string
  name: string
}

export type Film = {
  title: string
  slug: string
}

export type Session = {
  cinemaId: string
  filmSlug: string
  filmTitle: string
}
