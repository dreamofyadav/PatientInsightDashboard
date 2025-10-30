// import React from "react";

// export default function PatientTable({ patients, handleEdit }) {
//   //  Ensure patients is always an array to avoid .map errors
//   const safePatients = Array.isArray(patients) ? patients : [];

//   const color = (status) =>
//     status === "critical"
//       ? "red"
//       : status === "admitted"
//       ? "orange"
//       : "green";

//   //  Show a message when no patients
//   if (safePatients.length === 0) {
//     return (
//       <p style={{ textAlign: "center", color: "#555", marginTop: "20px" }}>
//         No patients to display.
//       </p>
//     );
//   }

//   return (
//     <table
//       border="1"
//       width="100%"
//       cellPadding="10"
//       style={{ marginTop: "20px", borderCollapse: "collapse" }}
//     >
//       <thead style={{ background: "#f3f4f6" }}>
//         <tr>
//           <th>Name</th>
//           <th>Disease</th>
//           <th>Status</th>
//           <th>Admitted</th>
//           <th>Discharged</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {safePatients.map((p) => (
//           <tr key={p._id || p.id}>
//             <td>{p.name || "N/A"}</td>
//             <td>{p.disease || "N/A"}</td>
//             <td style={{ color: color(p.status) }}>
//               {p.status || "Unknown"}
//             </td>
//             <td>
//               {p.admittedDate
//                 ? new Date(p.admittedDate).toLocaleDateString()
//                 : "-"}
//             </td>
//             <td>
//               {p.dischargedDate
//                 ? new Date(p.dischargedDate).toLocaleDateString()
//                 : "-"}
//             </td>
//             <td style={{ textAlign: "center" }}>
//               {/*  Edit Button */}
//               <button
//                 onClick={() => handleEdit(p)}
//                 style={{
//                   marginRight: "8px",
//                   backgroundColor: "#2563eb",
//                   color: "white",
//                   padding: "6px 10px",
//                   borderRadius: "6px",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                  Edit
//               </button>
//               </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }




import React from "react";

export default function PatientTable({ patients, handleEdit }) {
  const safePatients = Array.isArray(patients) ? patients : [];

  const getStatusColor = (status) => {
    switch (status) {
      case "critical":
        return "text-red-600 font-semibold";
      case "admitted":
        return "text-yellow-600 font-semibold";
      case "recovered":
        return "text-green-600 font-semibold";
      default:
        return "text-gray-600";
    }
  };

  if (safePatients.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8 text-lg">
        No patients to display.
      </p>
    );
  }

  return (
    <div className="mt-8">
      {/* Desktop & Tablet Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Disease</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Admitted</th>
              <th className="px-4 py-3 text-left">Discharged</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {safePatients.map((p) => (
              <tr key={p._id || p.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-medium text-gray-800">{p.name}</td>
                <td className="px-4 py-3 text-gray-700">{p.disease}</td>
                <td className={`px-4 py-3 ${getStatusColor(p.status)}`}>
                  {p.status}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {p.admittedDate
                    ? new Date(p.admittedDate).toLocaleDateString()
                    : "-"}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {p.dischargedDate
                    ? new Date(p.dischargedDate).toLocaleDateString()
                    : "-"}
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  Mobile Card View */}
      <div className="md:hidden flex flex-col gap-4 mt-4">
        {safePatients.map((p) => (
          <div
            key={p._id || p.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg text-gray-800">{p.name}</h3>
              <span className={`text-sm ${getStatusColor(p.status)}`}>
                {p.status}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-1">
              <span className="font-medium text-gray-700">Disease:</span>{" "}
              {p.disease}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              <span className="font-medium text-gray-700">Admitted:</span>{" "}
              {p.admittedDate
                ? new Date(p.admittedDate).toLocaleDateString()
                : "-"}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-medium text-gray-700">Discharged:</span>{" "}
              {p.dischargedDate
                ? new Date(p.dischargedDate).toLocaleDateString()
                : "-"}
            </p>
            <button
              onClick={() => handleEdit(p)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow transition"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
