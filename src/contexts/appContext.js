'use client';

const { createContext, useContext, useReducer } = require('react');

const AppContext = createContext();

export const APP_ACTIONS = {
  TOGGLE_MENU: 'toggleMenu',
};

const initialState = {
  isMenuOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case APP_ACTIONS.TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleMenu = () => {
    dispatch({ type: APP_ACTIONS.TOGGLE_MENU });
  };

  const value = { ...state, toggleMenu };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
