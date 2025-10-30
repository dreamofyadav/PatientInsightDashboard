// import React, { useState , useEffect } from "react";
// import { addPatient } from "../Service/api";
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";

// export default function AddPatient({ refresh , editData}) {
//   const [form, setForm] = useState({
//     name: "",
//     age: "",
//     disease: "",
//     condition:"",
//     status: "admitted",
//     admittedDate: "",
//     dischargedDate: "",
//   });
//  const today = new Date().toISOString().split("T")[0];

//    // Prefill form for editing an existing patient
//   useEffect(() => {
//     if (editData) {
//       setForm(editData);
//     }
//   }, [editData]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editData?._id) {
//         //  Update existing patient
//         await updatePatient(editData._id, form);
//         alert(" Patient updated successfully");
//       } else {
//         //  Add new patient
//         await addPatient(form);
//         alert("Patient added successfully");
//       }

//        setForm({
//         name: "",
//         age: "",
//         disease: "",
//         condition: "",
//         status: "admitted",
//         admittedDate: "",
//         dischargedDate: "",
//       });
//         refresh();
//       if (clearEdit) clearEdit(); // reset edit mode
//         } catch (err) {
//       alert(" Error saving patient");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{
//         margin: "20px 0",
//         padding: "15px",
//         border: "1px solid #ddd",
//         borderRadius: "8px",
//       }}
//     >
//       <h3>{editData ? " Edit Patient" : "Add New Patient"}</h3>
//       <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "repeat(2, 1fr)" }}>
//         <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
//         <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Age" required />
//         <select name="disease" value={form.disease} onChange={handleChange} required>
//           <option value="" disabled selected>Select Disease</option>
//           <option value="covid">Covid-19</option>
//           <option value="dengu">Dengu</option>
//           <option value="allergy">Allergy</option>
//         </select>
//         {/* <input name="condition" value={form.condition} onChange={handleChange} placeholder="Patient Condition" /> */}
//         <select name="condition" value={form.condition} onChange={handleChange} >
//           <option value="" disabled selected>Select Condition</option>
//           <option value="critical">Critical</option>
//           <option value="normal">Normal</option>  
//         </select>
//         <select name="status" value={form.status} onChange={handleChange}>
//           <option value="admitted">Admitted</option>
//           {/* <option value="critical">Critical</option> */}
//           <option value="recovered">Recovered</option>
//         </select>
//         <input type="date" min ={today} name="admittedDate" value={form.admittedDate} onChange={handleChange} />
//         <input type="date" min={today} name="dischargedDate" value={form.dischargedDate} onChange={handleChange} />
//       </div>
//       <button
//         type="submit"
//         style={{
//           marginTop: "15px",
//           backgroundColor: "#2563eb",
//           color: "white",
//           padding: "10px 15px",
//           borderRadius: "6px",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         {editData ? "Update Patient" : " Add Patient"}
//       </button>

//        {editData && (
//         <button
//           type="button"
//           onClick={clearEdit}
//           style={{
//             marginTop: "15px",
//             marginLeft: "10px",
//             backgroundColor: "#e11d48",
//             color: "white",
//             padding: "10px 15px",
//             borderRadius: "6px",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//            Cancel
//         </button>
//       )}
//     </form>
//   );
// }



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addPatient, updatePatient } from "../Service/api";


export default function AddPatient({ refresh, editData, clearEdit }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    disease: "",
    condition: "",
    status: "admitted",
    admittedDate: "",
    dischargedDate: "",
  });
 const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editData?._id) {
        await updatePatient(editData._id, form);
        alert("Patient updated successfully");
        navigate("/");
      } else {
        await addPatient(form);
        alert("Patient added successfully");
        navigate("/");
      }

      setForm({
        name: "",
        age: "",
        disease: "",
        condition: "",
        status: "admitted",
        admittedDate: "",
        dischargedDate: "",
      });

      refresh();
      if (clearEdit) clearEdit();
    } catch (err) {
      console.error("Error:", err);
      alert("Error saving patient");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white p-8 mt-8 shadow-lg rounded-2xl border border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        {editData ? " Edit Patient" : " Add New Patient"}
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
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
            value={form.age}
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
            value={form.disease}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="" disabled>
              Select Disease
            </option>
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
            value={form.condition}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="" disabled>
              Select Condition
            </option>
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
            value={form.status}
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
            min={today}
            name="admittedDate"
            value={form.admittedDate}
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
            min={form.admittedDate || today}
            name="dischargedDate"
            value={form.dischargedDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3 justify-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-all"
        >
          {editData ? "Update Patient" : "Add Patient"}
        </button>

        {editData && (
          <button
            type="button"
            onClick={clearEdit}
            className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg shadow-md transition-all"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
