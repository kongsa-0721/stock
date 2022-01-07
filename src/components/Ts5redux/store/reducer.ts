export interface Istate {
  list: string[];
  datasource?: {};
}
export interface Iaction {
  type: string;
  data?: string;
  datasource?: {};
}
const initialstate = {
  list: ["list1", "list2", "list3", "list4", "list5"],
};
const reducers = (state: Istate = initialstate, actions: Iaction): any => {
  switch (actions.type) {
    case "update":
      return {
        list: [...state.list, actions.data].filter((item) => item !== ""),
        datasource: actions.datasource,
      };
    case "delete":
      const lists = state.list.filter((item) => {
        return item !== actions.data;
      });
      return {
        ...state,
        list: [...lists],
      };
    default:
      return state;
  }
};
export { reducers };
