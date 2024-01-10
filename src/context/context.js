import { createContext, useContext } from "react";

export const userContext = createContext({
  cartArr: [
    {
      itemsName: "phone",
      price: 23,
      image: "img",
      description: "this is my item",
      
    },
  ],
  Additem:()=>{

  }
});

export const UserContextProvider = userContext.Provider;

export default function useUserContext() {
  return useContext(userContext);
}
