import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getPatients, getStats } from "./Service/api";
import StatsCards from "./view/StatsCards";
import Navbar from "./Common/Navbar";
import AddPatient from "./view/AddPatient";
import EditPatient from "./view/EditPatient";
import PatientTable from "./view/PatientTable";
import EmergencyAlert from "./view/EmergencyAlert";
import PatientChart from "./view/PatientChart";
import About from "./view/About";
import SearchBar from "./view/SearchBar";
import "./App.css";

function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [stats, setStats] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadData();
  }, [search]);

  const loadData = async () => {
    try {
    const p = await getPatients(search);
    const s = await getStats();
     setPatients(Array.isArray(p.data) ? p.data : []);
      setStats(s.data || {});
    // setPatients(p.data);
    // setStats(s.data);
    } catch (err) {
      console.error("Error loading Data", err);
    }
  };

  return (
    <div className="pt-20 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">
        Patient Dashboard
      </h1>

      <SearchBar search={search} setSearch={setSearch} />
      <StatsCards stats={stats} />
      <EmergencyAlert patients={patients} />
      <PatientTable patients={patients} handleEdit={(patient) =>
          (window.location.href = `/edit-patient/${patient._id}`)
        }/>
      <PatientChart stats={stats} />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-patient" element={<AddPatient refresh={() => {}} />} />
        <Route path="/edit-patient/:id" element={<EditPatient />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1 className="text-center mt-10 text-red-500">404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
