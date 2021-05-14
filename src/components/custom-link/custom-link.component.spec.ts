import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CustomLinkComponent } from "./custom-link.component";

describe('CustomLink', () => {
    let fixture: ComponentFixture<CustomLinkComponent>;
    let component: CustomLinkComponent;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ ],
            declarations: [ CustomLinkComponent ],
            providers: [  ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(CustomLinkComponent);
            component = fixture.componentInstance;
        });
    }));

    it('should render element correctly', () => {
        expect(component).toBeTruthy();
    })

    it('should render label and link url correctly', () => {
        component.label = "Mad Max";
        component.urlSrc = "http://mad-max.com/";
        fixture.detectChanges();

        const link = fixture.debugElement.nativeElement.querySelector('a');
        const label = fixture.debugElement.nativeElement.querySelector('label');
        expect(link.getAttribute('href')).toBe('http://mad-max.com/');
        expect(label.innerHTML).toBe('MAD MAX');
    })
})