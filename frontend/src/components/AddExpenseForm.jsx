import { useState } from "react";
import { API } from "../api";

export default function AddExpenseForm({ onAdd }) {
  const [form, setForm] = useState({ amount: "", category: "", description: "" });
  const username = localStorage.getItem("username");

  const submit = async () => {
    await API.post("/expenses/add", { ...form, user: { username } });
    onAdd();
    setForm({ amount: "", category: "", description: "" });
  };

  return (
    <div className="border p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Add Expense</h2>
      <input className="w-full p-2 border mb-2" placeholder="Amount" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} />
      <input className="w-full p-2 border mb-2" placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
      <input className="w-full p-2 border mb-2" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <button className="bg-purple-500 text-white px-4 py-2" onClick={submit}>Add</button>
    </div>
  );
}
