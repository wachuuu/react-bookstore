import allItemsReducer from "./allItemsReducer";
import dataSourceReducer from "./dataSourceReducer";

const rootReducer = {
  allItems: allItemsReducer,
  dataSource: dataSourceReducer
}

export default rootReducer
