import { useState, useMemo, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { SEED_DATA, THEMES } from "./constants.js";
import Header from "./components/Header.jsx";
import StatsBar from "./components/StatsBar.jsx";
import Toolbar from "./components/Toolbar.jsx";
import ApplicationList from "./components/ApplicationList.jsx";
import ApplicationFormModal from "./components/ApplicationFormModal.jsx";

export default function App() {
  const [apps, setApps] = useLocalStorage("job-tracker:applications", SEED_DATA);
  const [theme, setTheme] = useLocalStorage("job-tracker:theme", "paper");
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(undefined); // undefined = closed, null = new, object = edit

  useEffect(() => {
    const vars = THEMES[theme]?.vars || THEMES.paper.vars;
    Object.entries(vars).forEach(([key, val]) => {
      document.documentElement.style.setProperty(key, val);
    });
  }, [theme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return apps;
    return apps.filter(
      (a) =>
        a.company.toLowerCase().includes(q) ||
        a.role.toLowerCase().includes(q) ||
        (a.location || "").toLowerCase().includes(q)
    );
  }, [apps, query]);

  function saveApp(entry) {
    setApps((prev) => {
      const exists = prev.some((a) => a.id === entry.id);
      return exists ? prev.map((a) => (a.id === entry.id ? entry : a)) : [entry, ...prev];
    });
    setEditing(undefined);
  }

  function deleteApp(id) {
    setApps((prev) => prev.filter((a) => a.id !== id));
    setEditing(undefined);
  }

  return (
    <div className="tracker-root">
      <Header theme={theme} onThemeChange={setTheme} onNew={() => setEditing(null)} />
      <StatsBar apps={apps} />
      <Toolbar query={query} onQueryChange={setQuery} />
      <ApplicationList apps={filtered} query={query} onEdit={setEditing} onDelete={deleteApp} />

      {editing !== undefined && (
        <ApplicationFormModal
          initial={editing}
          onSave={saveApp}
          onDelete={deleteApp}
          onClose={() => setEditing(undefined)}
        />
      )}
    </div>
  );
}
