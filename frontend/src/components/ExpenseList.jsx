export default function ExpenseList({ items }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Expenses</h2>
      <ul>
        {items.map((exp, idx) => (
          <li key={idx} className="border p-2 mb-2">
            <div><strong>${exp.amount}</strong> — {exp.category}</div>
            <div className="text-sm text-gray-500">{exp.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
