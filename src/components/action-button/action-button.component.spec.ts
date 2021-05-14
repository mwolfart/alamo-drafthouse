import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ActionButtonComponent } from './action-button.component'

describe('ActionButton', () => {
  let fixture: ComponentFixture<ActionButtonComponent>
  let component: ActionButtonComponent

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [ActionButtonComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ActionButtonComponent)
          component = fixture.componentInstance
        })
    })
  )

  it('should render element correctly', () => {
    expect(component).toBeTruthy()
  })

  it('should trigger callback on toggle with correct parameters', () => {
    spyOn(component.clickCallback, 'emit')
    component.id = '0001'
    component.toggle()
    expect(component.clickCallback.emit).toHaveBeenCalledWith('0001')
  })

  it(
    'should trigger Toggle event and callback when clicking on button',
    waitForAsync(() => {
      spyOn(component, 'toggle')

      let button = fixture.debugElement.nativeElement.querySelector('button')
      button.click()

      fixture.whenStable().then(() => {
        expect(component.toggle).toHaveBeenCalled()
      })
    })
  )
})
