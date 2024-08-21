import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize count with value from store on component initialization', () => {
    const storeMock = {
      pipe: jest.fn().mockReturnValue({
        subscribe: jest.fn().mockImplementation((callback) => callback(5))
      })
    };
    const component = new CounterComponent(storeMock);
    component.ngOnInit();
    expect(component.count).toBe(5);
  });
});
