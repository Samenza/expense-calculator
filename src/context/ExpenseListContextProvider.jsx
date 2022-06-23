import React, { createContext, useContext, useState } from "react";

const expenseListContext = createContext();
const ExpenseListContextProvider = (props) => {
  const [listFilter, setListFilter] = useState("all");
  return (
    <expenseListContext.Provider value={{ listFilter, setListFilter }}>
      {props.children}
    </expenseListContext.Provider>
  );
};

export default ExpenseListContextProvider;

export const useExpenseListContext = () => {
  const context = useContext(expenseListContext);
  if (!context) {
    throw new Error(
      "useNotificationContext must use in ExpenseListContextProvider"
    );
  }
  return context;
};
