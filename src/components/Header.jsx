import { Plus } from "lucide-react";

export default function Header({ onNew }) {
  return (
    <div className="top-bar">
      <div className="brand">
        <span className="eyebrow">Track every application</span>
        <h1>Job Application Tracker</h1>
      </div>
      <button className="btn-primary" onClick={onNew}>
        <Plus size={16} /> New entry
      </button>
    </div>
  );
}
