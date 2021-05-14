import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { films } from 'src/fixtures/films'
import { sessions } from 'src/fixtures/sessions'
import { cinemas } from 'src/fixtures/cinemas'
import { MenuTheaterComponent } from './menu-theater.component'

describe('MenuTheater', () => {
  let fixture: ComponentFixture<MenuTheaterComponent>
  let component: MenuTheaterComponent

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [MenuTheaterComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(MenuTheaterComponent)
          component = fixture.componentInstance
        })
    })
  )

  it(
    'should render element correctly',
    waitForAsync(() => {
      expect(component).toBeTruthy()
    })
  )

  it('should return correct ratio values when resizing', () => {
    let event = {
      target: {
        innerWidth: 1024,
      },
    }
    component.onResize(event)
    expect(component.numberOfCinemaCols).toBe(3)
    expect(component.cinemaColsRatio).toBe('3:1')

    event.target.innerWidth = 800
    component.onResize(event)
    expect(component.numberOfCinemaCols).toBe(2)
    expect(component.cinemaColsRatio).toBe('4:1')

    event.target.innerWidth = 480
    component.onResize(event)
    expect(component.numberOfCinemaCols).toBe(1)
    expect(component.cinemaColsRatio).toBe('5:1')
  })

  it('should return correct sessions for cinema id', () => {
    component.sessionList = sessions
    const sessionsInCinema = component.getSessionsInCinema('0001')
    expect(sessionsInCinema.length).toBe(2)
  })

  it('should return no films for session list if films are not defined', () => {
    const filmsInSessions = component.getFilmsInSessionList(sessions)
    expect(filmsInSessions.length).toBe(0)
  })

  it('should return correct films for session list', () => {
    component.filmList = films
    const filmsInSessions = component.getFilmsInSessionList(sessions)
    expect(filmsInSessions.length).toBe(5)
  })

  it('should get correct film by its slug', () => {
    component.filmList = films
    const film = component.getFilmBySlug('joker')
    expect(film).toEqual({ title: 'Joker', slug: 'joker' })
  })

  it('should get correct cinema by its id', () => {
    component.cinemaList = cinemas
    const cinema = component.getCinemaById('0002')
    expect(cinema).toEqual({ name: 'Ritz', id: '0002' })
  })

  it('should get correct films in cinema by id', () => {
    component.cinemaList = cinemas
    component.sessionList = sessions
    component.filmList = films
    const filmsInSession = component.getFilmsInCinema('0002')
    expect(filmsInSession.length).toBe(3)
  })

  it('should return correct data when selecting cinema', () => {
    component.cinemaList = cinemas
    component.sessionList = sessions
    component.filmList = films
    component.selectCinema('0001')
    expect(component.selectedCinema).toEqual({ name: 'Lakeline', id: '0001' })
    expect(component.filmsAtSelectedCinema.length).toBe(2)
  })

  it('should return correct amount of action buttons', () => {
    component.cinemaList = cinemas
    fixture.detectChanges()
    const buttons = Array.from(fixture.debugElement.nativeElement.querySelectorAll('app-action-button')).map(
      (el: any) => el
    )
    expect(buttons.length).toBe(3)
  })
})
