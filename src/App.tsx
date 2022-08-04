import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import List from "./components/List";
import UserItem from "./components/UserItem";
// import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";
import TodoItem from "./components/TodoItem";
import EventsExapmle from "./components/EventsExapmle";
import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import TodosPage from "./pages/TodosPage";
import Layout from "./components/Layout";
import UserItemsPage from "./pages/UserItemsPage";
import TodosItemPage from "./pages/TodosItemPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="users" element={<UserPage />} />
          <Route path="users/:id" element={<UserItemsPage />} />
          <Route path="todos" element={<TodosPage />} />
          <Route path="todos/:id" element={<TodosItemPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
