interface Istate {
  count: number;
}
export interface Iction {
  type: string;
}
const initialState: Istate = {
  count: 0,
};
const reducer = (state: Istate = initialState, action: Iction) => {
  switch (action.type) {
    case "addition":
      return {
        ...state,
        count: state.count + 1,
      };
    case "minus":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
export { reducer };
