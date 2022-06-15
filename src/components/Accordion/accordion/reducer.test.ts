import { reducer, StateType, TOGGLE_COLLAPSED } from "./reducer";

test("collapsed should be true", () => {
  const state: StateType = {
    collapsed: false,
  };

  const newState: StateType = reducer(state, { type: TOGGLE_COLLAPSED });

  expect(newState.collapsed).toBe(true);
});

test("to be Error", () => {
  const state: StateType = {
    collapsed: false,
  };

  expect(() => reducer(state, { type: "dsad" })).toThrowError();
});
