import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ExpenseList from "../components/ExpenseList";
import Home from "../pages/Home";
import Users from "../components/Users";
import AddExpenseItem from "../components/AddExpenseItem";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<Home />}>
        <Route index path="/expense-list" element={<ExpenseList />} />
        <Route index path="/users" element={<Users />} />
        <Route index path="/add-item" element={<AddExpenseItem />} />
      </Route>
      <Route path="*" element={<Navigate to={"/expense-list"} />} />
    </Routes>
  );
};

export default MainRoute;
