import { Search } from "lucide-react";

export default function Toolbar({ query, onQueryChange }) {
  return (
    <div className="toolbar">
      <div className="search-box">
        <Search size={15} />
        <input
          placeholder="Search company, role, or location…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>
    </div>
  );
}
