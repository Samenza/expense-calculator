import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddSubscriber from "../components/subscriber/AddSubscriber";
import Home from "../pages/Home";
import ExpenseList from "../pages/ExpenseList";
import AddExpenseItem from "../components/expense/AddExpenseItem";
import SubscriberList from "../pages/SubscriberList";
import SubscriberDetail from "../pages/subscriber/SubscriberDetail";
import ExpenseListContextProvider from "../context/ExpenseListContextProvider";

const expenseList = (
  <ExpenseListContextProvider>
    <ExpenseList />
  </ExpenseListContextProvider>
);
const MainRoute = () => {
  return (
    <Routes>
      <Route element={<Home />}>
        <Route index path="/expense-list" element={expenseList} />
        <Route index path="/expense-list/:id" element={<AddExpenseItem />} />
        <Route index path="/subscriber" element={<SubscriberList />} />
        <Route index path="/subscriber/:id" element={<SubscriberDetail />} />
        <Route index path="/add-item" element={<AddExpenseItem />} />
        <Route index path="/add-subscriber" element={<AddSubscriber />} />
        <Route
          index
          path="/add-subscriber/:id"
          element={<AddSubscriber editMode />}
        />
      </Route>
      <Route path="*" element={<Navigate to={"/expense-list"} />} />
    </Routes>
  );
};

export default MainRoute;
