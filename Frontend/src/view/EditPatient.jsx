// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getPatientById, updatePatient } from "../Service/api";

// export default function EditPatient() {
//   const { id } = useParams();
//   const [form, setForm] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // ✅ Fetch the patient’s data by ID
//    useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await getPatientById(id);
//         setForm(res.data);
//       } catch (err) {
//         console.error("Error loading patient data", err);
//         alert("❌ Patient not found or server error");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [id]);


//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updatePatient(id, form);
//       alert("✅ Patient updated successfully!");
//       navigate("/"); // Go back to dashboard
//     } catch (err) {
//       console.error("Error updating patient", err);
//       alert("❌ Error updating patient");
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (!form) return <p>Patient not found.</p>;

//   return (
//     <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded-lg mt-20">
//       <h2 className="text-2xl font-bold mb-4 text-blue-700">Edit Patient</h2>
//       <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//         <input
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Name"
//           className="border p-2 w-full mb-2 rounded"
//         />
//         <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Age" className="border p-2 w-full mb-2 rounded"/>
//         {/* <input name="disease" value={form.disease} onChange={handleChange} placeholder="Disease" required className="border p-2 rounded" /> */}
        
//         <select name="disease" value={form.disease} onChange={handleChange} >
//           <option value="covid">Covid-19</option>
//           <option value="dengu">Dengu</option>
//           <option value="allergy">Allergy</option>
//         </select>
        
//         <select name="condition" value={form.condition} onChange={handleChange} >
//           {/* <option value="" disabled selected>Select Condition</option> */}
//           <option value="critical">Critical</option>
//           <option value="normal">Normal</option>  
//         </select>

//         <select name="status" value={form.status} onChange={handleChange} className="border p-2 rounded" >
//           <option value="admitted">Admitted</option>
//           {/* <option value="critical">Critical</option> */}
//           <option value="recovered">Recovered</option>
//         </select>
//         <input type="date" name="admittedDate" value={form.admittedDate?.slice(0, 10) || ""} onChange={handleChange} className="border p-2 rounded"/>
//         <input type="date" name="dischargedDate" value={form.dischargedDate?.slice(0, 10) || ""} onChange={handleChange} className="border p-2 rounded"/>
//         <button
//           type="submit"
//           className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Update Patient
//         </button>
//       </form>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPatientById, updatePatient } from "../Service/api";

export default function EditPatient() {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  //  Fetch patient by ID
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getPatientById(id);
        setForm(res.data);
      } catch (err) {
        console.error("Error loading patient data", err);
        alert(" Patient not found or server error");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePatient(id, form);
      alert("Patient updated successfully!");
      navigate("/"); // Redirect to dashboard
    } catch (err) {
      console.error("Error updating patient", err);
      alert(" Error updating patient");
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
      </div>
    );

  if (!form)
    return (
      <div className="text-center mt-20 text-red-600 font-medium">
        Patient not found.
      </div>
    );

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl mt-16 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
         Edit Patient Details
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            placeholder="Enter patient's name"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={form.age || ""}
            onChange={handleChange}
            placeholder="Enter age"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Disease */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Disease
          </label>
          <select
            name="disease"
            value={form.disease || ""}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select Disease</option>
            <option value="covid">Covid-19</option>
            <option value="dengu">Dengue</option>
            <option value="allergy">Allergy</option>
          </select>
        </div>

        {/* Condition */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Condition
          </label>
          <select
            name="condition"
            value={form.condition || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select Condition</option>
            <option value="critical">Critical</option>
            <option value="normal">Normal</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            name="status"
            value={form.status || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="admitted">Admitted</option>
            <option value="recovered">Recovered</option>
          </select>
        </div>

        {/* Admitted Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Admitted Date
          </label>
          <input
            type="date"
            name="admittedDate"
            // min={today}
            value={form.admittedDate?.slice(0, 10) || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Discharged Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Discharged Date
          </label>
          <input
            type="date"
            name="dischargedDate"
            min={form.admittedDate?.slice(0, 10) || today}
            value={form.dischargedDate?.slice(0, 10) || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg shadow-md transition-all"
          >
            Update Patient
          </button>
        </div>
      </form>
    </div>
  );
}
