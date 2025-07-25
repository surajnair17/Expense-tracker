import AddExpenseForm from "../components/AddExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { useEffect, useState } from "react";
import { API } from "../api";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const username = localStorage.getItem("username");

  const load = async () => {
    const res = await API.get(`/expenses/user/${username}`);
    setExpenses(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {username}</h1>
      <AddExpenseForm onAdd={load} />
      <ExpenseList items={expenses} />
    </div>
  );
}
