import { applyMiddleware } from "redux";

const initialState = {
  appleproduct: JSON.parse(localStorage.getItem("appleproduct")) || [],
  apbasket: JSON.parse(localStorage.getItem("apbasket")) || [],
  apfavorite: JSON.parse(localStorage.getItem("apfavorite")) || [],
  count: JSON.parse(localStorage.getItem("count")) || 1,
  aphistory: JSON.parse(localStorage.getItem("aphistory")) || [],
  search: JSON.parse(localStorage.getItem('search')) || [],
};

export const Reduce = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      let getProduct = [...state.appleproduct, action.payload];
      localStorage.setItem("appleproduct", JSON.stringify(getProduct));
      return { ...state, appleproduct: getProduct };
    case "DEL_PRODUCT":
      let delProduct = state.appleproduct.filter(
        (el) => el.id !== action.payload.id
      );
      localStorage.setItem("appleproduct", JSON.stringify(delProduct));
      return { ...state, appleproduct: delProduct };
    case "GET_FAVORITE":
      let getFav = [...state.apfavorite, action.payload];
      localStorage.setItem("apfavorite", JSON.stringify(getFav));
      return { ...state, apfavorite: getFav };
    case "DEL_FAVORITE":
      let delFav = state.apfavorite.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("apfavorite", JSON.stringify(delFav));
      return { ...state, apfavorite: delFav };
    case "GET_BASKET":
      let getBas = [...state.apbasket, action.payload];
      localStorage.setItem("apbasket", JSON.stringify(getBas));
      return { ...state, apbasket: getBas };
    case "DEL_BASKET":
      let delBas = state.apbasket.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("apbasket", JSON.stringify(delBas));
      return { ...state, apbasket: delBas };
    case "PLUS":
      let plus = state.count + action.payload;
      localStorage.setItem("count", JSON.stringify(plus));
      return { ...state, count: plus };
    case "MINES":
      let minus = state.count > 1 ? state.count - action.payload : 1;
      localStorage.setItem("count", JSON.stringify(minus));
      return { ...state, count: minus };
    case "SEARCH":
      localStorage.setItem("search", JSON.stringify(action.payload));
      return { ...state, search: action.payload };
    case "GET_HISTORY":
      let getHis = [...state.aphistory, action.payload];
      localStorage.setItem("aphistory", JSON.stringify(getHis));
      return { ...state, aphistory: getHis };
    case "DEL_HISTORY":
      let delHis = state.aphistory.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("aphistory", JSON.stringify(delHis));
      return { ...state, aphistory: delHis };
    case "DEL_ALL":
      let allHis = state.aphistory.filter((el) => el.id !== el.id);
      localStorage.setItem("aphistory", JSON.stringify(allHis));
      return { ...state, aphistory: allHis };

      return { ...state, darkmode: false };
    case "SORT_PRODUCT":
      const sortedProducts = state.appleproduct.sort((a, b) => {
        if (action.payload === "expensive") {
          return b.price - a.price;
        } else if (action.payload === "cheap") {
          return a.price - b.price;
        }
        return 0;
      });
      return {
        ...state,
        appleproduct: sortedProducts,
      };
    default:
      return state;
  }
};
