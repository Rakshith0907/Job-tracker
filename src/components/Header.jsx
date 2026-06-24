import { Plus } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

export default function Header({ theme, onThemeChange, onNew }) {
  return (
    <div className="top-bar">
      <div className="brand">
        <span className="eyebrow">Track every application</span>
        <h1>Job Application Tracker</h1>
      </div>
      <div className="top-bar-actions">
        <ThemeSwitcher theme={theme} onThemeChange={onThemeChange} />
        <button className="btn-primary" onClick={onNew}>
          <Plus size={16} /> New entry
        </button>
      </div>
    </div>
  );
}
