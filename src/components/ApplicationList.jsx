import { FileText } from "lucide-react";
import ApplicationCard from "./ApplicationCard.jsx";

export default function ApplicationList({ apps, query, onEdit, onDelete }) {
  if (apps.length === 0) {
    return (
      <div className="empty-state">
        <FileText size={36} />
        <h3>No entries yet</h3>
        <p>{query ? "Nothing matches that search." : "Add your first application to start tracking."}</p>
      </div>
    );
  }

  return (
    <div className="app-list">
      {apps.map((app) => (
        <ApplicationCard key={app.id} app={app} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
