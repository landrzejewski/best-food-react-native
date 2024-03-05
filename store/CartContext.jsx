import {createContext, useState} from 'react';

export const CartContext = createContext({
  ids: [],
  addDish: id => {},
  removeDish: id => {},
});

export const CartContextProvider = ({children}) => {
  const [ids, setIds] = useState([]);

  function addDish(id) {
    setIds(currentIds => [...currentIds, id]);
  }

  function removeDish(id) {
    setIds(currentIds => currentIds.filter(currentId => currentId !== id));
  }

  return (
    <CartContext.Provider value={{ids, addDish, removeDish}}>
      {children}
    </CartContext.Provider>
  );
};
