import React from 'react';

// Creates a Context object
const UserContext = React.createContext();
const ProductContext = React.createContext();

// The "Provider" component allows other components to consume/use the context object and supply the necessary information need to the constext object

export const UserProvider = UserContext.Provider;
export const ProductProvider = ProductContext.Provider;

export default UserContext;