import { Component } from '@angular/core'
import axios from 'axios'
import { Cinema, Film, Session } from 'src/types/data'

@Component({
  selector: 'app-menu-theater',
  templateUrl: './menu-theater.component.html',
  styleUrls: ['./menu-theater.component.sass'],
})
export class MenuTheaterComponent {
  cinemaList: Cinema[] = []
  filmList: Film[] = []
  sessionList: Session[] = []

  filmsAtSelectedCinema: Film[] = []
  selectedCinema: Cinema | null = null

  numberOfCinemaCols: number = this.getNumberOfCinemaCols(window.innerWidth)
  cinemaColsRatio: string = this.getCinemaColsRatio(window.innerWidth)

  constructor() {
    axios.get('https://drafthouse.com/s/mother/v1/page/market/main/austin').then(({ data }) => {
      this.cinemaList = data.data.market.cinemas.sort()
      this.filmList = data.data.films.sort()
      this.sessionList = data.data.sessions.sort()
    })
  }

  onResize(event: any) {
    this.numberOfCinemaCols = this.getNumberOfCinemaCols(event.target.innerWidth)
    this.cinemaColsRatio = this.getCinemaColsRatio(event.target.innerWidth)
  }

  getNumberOfCinemaCols(windowWidth: number) {
    if (windowWidth > 812) {
      return 3
    }
    return windowWidth > 512 ? 2 : 1
  }

  getCinemaColsRatio(windowWidth: number) {
    if (windowWidth > 812) {
      return '3:1'
    }
    return windowWidth > 512 ? '4:1' : '5:1'
  }

  getSessionsInCinema(id: string): Session[] {
    return this.sessionList.filter((session) => session.cinemaId == id)
  }

  getFilmsInSessionList(sessions: Session[]): Film[] {
    let foundFilms: string[] = []
    sessions.map((session) => !foundFilms.includes(session.filmSlug) && foundFilms.push(session.filmSlug))
    const films = foundFilms
      .map((filmSlug) => this.getFilmBySlug(filmSlug))
      .filter((film): film is Film => film !== null)
    return films
  }

  getFilmBySlug(slug: string): Film | null {
    return this.filmList.find((film) => film.slug === slug) ?? null
  }

  getCinemaById(id: string): Cinema | null {
    return this.cinemaList.find((cinema) => cinema.id === id) ?? null
  }

  getFilmsInCinema(id: string): Film[] {
    const sessions = this.getSessionsInCinema(id)
    return this.getFilmsInSessionList(sessions)
  }

  selectCinema(id: string): void {
    this.selectedCinema = this.getCinemaById(id)
    this.filmsAtSelectedCinema = this.getFilmsInCinema(id)
  }
}
