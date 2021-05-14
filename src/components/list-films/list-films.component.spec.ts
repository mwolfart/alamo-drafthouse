import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { films } from 'src/fixtures/films'
import { ListFilmsComponent } from './list-films.component'

describe('ListFilms', () => {
  let fixture: ComponentFixture<ListFilmsComponent>
  let component: ListFilmsComponent

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [ListFilmsComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ListFilmsComponent)
          component = fixture.componentInstance
        })
    })
  )

  it('should render element correctly', () => {
    expect(component).toBeTruthy()
  })

  it('should render correct amount of app-custom-links', () => {
    component.availableFilms = films
    fixture.detectChanges()

    const links = Array.from(fixture.debugElement.nativeElement.querySelectorAll('app-custom-link')).map(
      (el: any) => el
    )
    expect(links.length).toBe(5)
  })
})
