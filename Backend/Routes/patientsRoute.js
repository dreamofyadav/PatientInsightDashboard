import express from "express";
import Patient from "../models/Patient.js";
const router = express.Router();

// // get all patients
// router.get("/", async (req, res) => {
//   const { search } = req.query;
//   let filter = {};
//   if (search) {
//     filter = { name: { $regex: search, $options: "i" } };
//   }
//   const patients = await Patient.find(filter);
//   res.json(patients);
// });

// get all patients (search by name or color)
router.get("/", async (req, res) => {
  try {
    const { search } = req.query;
    let filter = {};

    if (search) {
      const searchLower = search.toLowerCase();

      // Color-to-status mapping
      let colorStatusMap = {
        red: "critical",
        orange: "admitted",
        green: "recovered"
      };

       if (colorStatusMap[searchLower]) {
        const mappedValue = colorStatusMap[searchLower];
        filter = {
          $or: [
            { status: mappedValue },
            { condition: mappedValue }
          ]
        };
      } else {
        filter = {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { disease: { $regex: search, $options: "i" } }
          ]
        };
      }
    }

    const patients = await Patient.find(filter);
    res.json(patients);
  } catch (err) {
    console.error("Error fetching patients:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// get stats
router.get("/stats", async (req, res) => {
try {
  const patients = await Patient.find();
  const total = patients.length;
  const admitted = patients.filter(p => p.status === "admitted").length;
  const discharged = patients.filter(p => p.status === "recovered").length;
  const critical = patients.filter(p => p.condition === "critical").length;
  const normal = patients.filter(p => p.condition === "normal").length;

    // Filter only patients with valid admitted + discharged dates
    const validStays = patients.filter(
      p => p.admittedDate && p.dischargedDate && p.dischargedDate >= p.admittedDate
    );
  const totalDays = validStays.reduce((sum, p) => {
      const stay = (p.dischargedDate - p.admittedDate) / (1000 * 3600 * 24);
      return sum + Math.max(stay, 0); // prevent negative
    }, 0);

    const avgStay = (validStays.length ? totalDays / validStays.length : 0).toFixed(1);

  const diseaseCount = {};
  patients.forEach(p => { 
    if (p.disease) diseaseCount[p.disease] = (diseaseCount[p.disease] || 0) + 1; });
  
    const topDiseases = Object.entries(diseaseCount)
    .sort((a,b) => b[1]-a[1])
    .slice(0,3)
    .map(([d]) => d);

  res.json({ total, admitted, discharged, critical, normal, avgStay, topDiseases });
} catch (error) {
  console.error("Error in /stats:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }  
});

// Add new patient
router.post("/", async (req, res) => {
  try {
    const { name, age, disease, condition, status, admittedDate, dischargedDate } = req.body;
    const newPatient = new Patient({ name, age, disease, condition, status, admittedDate, dischargedDate });
    await newPatient.save();
    res.status(201).json({ message: "Patient added successfully", patient: newPatient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//  update patient by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json({ message: "Patient updated successfully", patient: updatedPatient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get patient by Id
router.get("/:id", async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
