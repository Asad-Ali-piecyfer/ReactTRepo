import { combineReducers } from "redux";
import ProductReducers from "./productReducers";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  products: ProductReducers,
});

export default rootReducer;
