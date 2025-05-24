// import React, { createContext, useReducer, useContext } from "react";

// const CartContext = createContext();

// const initialState = {
//   items: [],
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         return {
//           ...state,
//           items: state.items.map((item) =>
//             item.id === action.payload.id
//               ? { ...item, count: item.count + 1 }
//               : item
//           ),
//         };
//       }
//       return {
//         ...state,
//         items: [...state.items, { ...action.payload, count: 1 }],
//       };
//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload.id),
//       };
//     case "INCREASE_COUNT":
//       return {
//         ...state,
//         items: state.items.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, count: item.count + 1 }
//             : item
//         ),
//       };
//     case "DECREASE_COUNT":
//       return {
//         ...state,
//         items: state.items.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, count: Math.max(item.count - 1, 0) }
//             : item
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);
//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };
