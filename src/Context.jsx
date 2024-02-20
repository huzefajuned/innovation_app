import { createContext, useReducer } from "react";

// Initial state for the cart
const initialState = {
  cartItems: [],
};

// Reducer function to manage state transitions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if item already exists in cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        // If item exists, increase its quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cartItems: updatedCartItems };
      } else {
        // If item does not exist, add it to cart
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    case "REMOVE_FROM_CART":
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cartItems: updatedCartItems };

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

// Create the context
export const CartContext = createContext();

// Cart context provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
