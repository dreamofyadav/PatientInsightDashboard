export default function EmergencyAlert({ patients }) {
  // ✅ Ensure 'patients' is always an array
  const safePatients = Array.isArray(patients) ? patients : [];

  const critical = safePatients.filter(p => p.condition === "critical");
  if (!critical.length) return null;

  return (
    <div style={{ background: "#fee2e2", padding: "15px", borderRadius: "8px" }}>
      <h3> 👿⛔Emergency Alerts</h3>
      {critical.map(p => (
        <div key={p._id}>🔴 {p.name} – {p.disease}</div>
      ))}
    </div>
  );
}
