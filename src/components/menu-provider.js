import React from "react";

const defaultState = {
  isOpen: false,
  toggleIsOpen: () => {},
};
const MenuContext = React.createContext(defaultState);

const MenuProvider = props => {
  const [isOpen, toggleIsOpen] = React.useState(false);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggleIsOpen,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
export { MenuProvider };
