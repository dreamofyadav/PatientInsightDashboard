import { PieChart, Pie, Tooltip, Cell } from "recharts";

export default function PatientChart({ stats }) {
  // Define your data
  const data = [
    { name: "Admitted", value: stats.admitted || 0 },
    { name: "Discharged", value: stats.discharged || 0 },
    { name: "Critical", value: stats.critical || 0 },
    { name: "Normal", value: stats.normal || 0 },
  ];

  // Define colors for each type
  const COLORS = {
    admitted: "#FFA500",   // Orange
    discharged: "#00C49F", // Green
    critical: "#FF4C4C",   // Red
    normal: "#8884D8",     // Purple
  };

  console.log("Patient stats:", stats);
console.log("Chart data:", data);

  return (
    <div className="mt-8 flex flex-col items-center justify-center md:flex-row md:gap-12">
      <PieChart width={350} height={350}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          label
          outerRadius={120}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[entry.name.toLowerCase()] || "#ccc"} // fallback color
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      
      <div className="flex flex-col gap-3 mt-6 md:mt-0">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-3 text-lg">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: COLORS[item.name.toLowerCase()] }}
            ></div>
            <span className="capitalize font-medium text-gray-700">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
