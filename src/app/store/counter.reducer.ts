import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = {
  count: 0
}

const counterReducer = createReducer(
  initialState,
 on(increment, (state) => ({ ...state, count: state.count + 1})),
 on(decrement, (state) => ({ ...state, decrement: state.count - 1})),
 on(reset, (state)=> ({ ...state, reset: state.count = 0}))
);

export function reducer(state: { count: number; } | undefined, action: Action) {
  return counterReducer(state, action);
}

