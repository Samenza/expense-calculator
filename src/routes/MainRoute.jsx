import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddSubscriber from "../components/subscriber/AddSubscriber";
import Home from "../pages/Home";
import SubscriberList from "../components/subscriber/SubscriberList";
import ExpenseList from "../components/expense/ExpenseList";
import AddExpenseItem from "../components/expense/AddExpenseItem";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<Home />}>
        <Route index path="/expense-list" element={<ExpenseList />} />
        <Route index path="/subscriber" element={<SubscriberList />} />
        <Route index path="/add-item" element={<AddExpenseItem />} />
        <Route index path="/add-subscriber" element={<AddSubscriber />} />
      </Route>
      <Route path="*" element={<Navigate to={"/expense-list"} />} />
    </Routes>
  );
};

export default MainRoute;
