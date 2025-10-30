export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      value={search}
      onChange={e => setSearch(e.target.value)}
      placeholder="Search patient by name & Color..."
      style={{ width: "100%", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}
    />
  );
}
