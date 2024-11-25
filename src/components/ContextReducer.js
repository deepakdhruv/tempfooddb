import React, { useReducer, createContext, useContext } from 'react';

// Create contexts for state and dispatch
const CartStateContext = createContext();
const CartDispatchContext = createContext();

// Reducer function to handle actions
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            // Add a new item to the cart
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                    qty: action.qty,
                    size: action.size,
                }
            ];
        case "REMOVE":
            // Remove an item from the cart by ID
            return state.filter(item => item.id !== action.id);
        case "CLEAR":
            // Clear the cart
            return [];
        default:
            console.error("Unknown action type in reducer:", action.type);
            return state;
    }
};

// Provider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};

// Custom hooks for accessing the state and dispatch
export const UseCart = () => useContext(CartStateContext); // For state
export const UseDispatchCart = () => useContext(CartDispatchContext); // For dispatch
