import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CounterEffects } from './counter.effects';
import { Actions } from '@ngrx/effects';
import { of } from 'rxjs';

describe('CounterEffects', () => {
  let effects: CounterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CounterEffects,
        provideMockStore({}),  // Mock Store provider
        { provide: Actions, useValue: of() },  // Provide Actions stream
      ]
    });

    effects = TestBed.inject(CounterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
