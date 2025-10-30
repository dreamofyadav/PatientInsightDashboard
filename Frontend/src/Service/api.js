import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3002/api" });

export const getPatients = (search = "") => API.get(`/patients?search=${search}`);
export const addPatient = (patientData) => API.post("/patients", patientData);
export const getStats = () => API.get("/patients/stats");
export const getPatientById = (id) => API.get(`/patients/${id}`);
export const updatePatient = (id, data) => API.put(`/patients/${id}`, data);
