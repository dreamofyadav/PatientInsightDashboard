// export default function StatsCards({ stats }) {
//   return (
//     <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
//       <div style={{ flex: 1, background: "#bae6fd", padding: "15px", borderRadius: "8px" }}>Total: {stats.total}</div>
//       <div style={{ flex: 1, background: "#bbf7d0", padding: "15px", borderRadius: "8px" }}>Admitted: {stats.admitted}</div>
//       <div style={{ flex: 1, background: "#fde68a", padding: "15px", borderRadius: "8px" }}>Discharged: {stats.discharged}</div>
//       <div style={{ flex: 1, background: "#fca5a5", padding: "15px", borderRadius: "8px" }}>Avg Stay: {stats.avgStay} days</div>
//     </div>
//   );
// }


import React from "react";

export default function StatsCards({ stats }) {
  const cards = [
    {
      label: "Total Patients",
      value: stats.total || 0,
      color: "bg-sky-100 text-sky-800 border-sky-300",
    },
    {
      label: "Admitted",
      value: stats.admitted || 0,
      color: "bg-green-100 text-green-800 border-green-300",
    },
    {
      label: "Discharged",
      value: stats.discharged || 0,
      color: "bg-yellow-100 text-yellow-800 border-yellow-300",
    },
    {
      label: "Avg Stay (days)",
      value: stats.avgStay || 0,
      color: "bg-red-100 text-red-800 border-red-300",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`p-5 border rounded-2xl shadow-sm ${card.color} hover:shadow-md transition duration-200`}
        >
          <h3 className="text-sm font-semibold text-gray-600 uppercase mb-1">
            {card.label}
          </h3>
          <p className="text-2xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
