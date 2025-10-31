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
