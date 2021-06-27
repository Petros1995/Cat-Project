import { ADD_CAT, CREATE_CAT } from "./types.js"
function CatList(state = [], action) {
    switch (action.type) {
      case ADD_CAT:
        return [...action.payload];
      case CREATE_CAT:
        return [...state, ...action.payload];
      default:
        return state;
    }
  }
  
  export default CatList;
  