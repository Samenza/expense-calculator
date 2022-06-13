import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddSubscriber from "../components/subscriber/AddSubscriber";
import Home from "../pages/Home";
import ExpenseList from "../pages/ExpenseList";
import AddExpenseItem from "../components/expense/AddExpenseItem";
import SubscriberList from "../pages/SubscriberList";
import SubscriberDetail from "../pages/subscriber/SubscriberDetail";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<Home />}>
        <Route index path="/expense-list" element={<ExpenseList />} />
        <Route index path="/expense-list/:id" element={<AddExpenseItem />} />
        <Route index path="/subscriber" element={<SubscriberList />} />
        <Route index path="/subscriber/:id" element={<SubscriberDetail />} />
        <Route index path="/add-item" element={<AddExpenseItem />} />
        <Route index path="/add-subscriber" element={<AddSubscriber />} />
        <Route index path="/add-subscriber/:id" element={<AddSubscriber />} />
      </Route>
      <Route path="*" element={<Navigate to={"/expense-list"} />} />
    </Routes>
  );
};

export default MainRoute;
