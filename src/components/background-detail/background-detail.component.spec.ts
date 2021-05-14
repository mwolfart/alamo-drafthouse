import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { BackgroundDetailComponent } from "./background-detail.component";

describe('BackgroundDetail', () => {
    let fixture: ComponentFixture<BackgroundDetailComponent>;
    let component: BackgroundDetailComponent;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ ],
            declarations: [ BackgroundDetailComponent ],
            providers: [  ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(BackgroundDetailComponent);
            component = fixture.componentInstance;
        });
    }));

    it('should render element correctly', () => {
        expect(component).toBeTruthy();
    })
})