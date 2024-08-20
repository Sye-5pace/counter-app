import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setInitialValue } from './counter.actions';

export const initialState = {
  count: 0,
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => (state.count > 0 ? { ...state, count: state.count - 1 } : state)),
  on(reset, (state) => ({ ...state, count: 0 })),
  on(setInitialValue, (state, { count }) => ({ ...state, count }))
);

export function storeReducer(state: { count: number } | undefined, action: Action) {
  return _counterReducer(state, action);
}
