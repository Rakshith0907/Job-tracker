import { Trash2, MapPin, Calendar, Clock3, FileBadge2 } from "lucide-react";
import { STAGE_MAP, formatDate } from "../constants.js";

export default function ApplicationCard({ app, onEdit, onDelete }) {
  const stage = STAGE_MAP[app.stage];

  return (
    <div className="app-card" onClick={() => onEdit(app)}>
      <div className="app-card-top">
        <div className="app-card-title">
          <div className="app-company">{app.company}</div>
          <div className="app-role">{app.role}</div>
        </div>
        <div className="app-card-actions">
          <span className="stage-pill" style={{ color: stage.color, background: stage.color + "1A" }}>
            {stage.label}
          </span>
          <button
            className="icon-btn"
            title="Delete entry"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(app.id);
            }}
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      <div className="app-meta">
        {app.location && (
          <span>
            <MapPin size={13} /> {app.location}
          </span>
        )}
        {app.dateApplied && (
          <span>
            <Calendar size={13} /> Applied {formatDate(app.dateApplied)}
          </span>
        )}
        {app.round && (
          <span>
            <FileBadge2 size={13} /> {app.round}
          </span>
        )}
        {app.lastActionDate && (
          <span>
            <Clock3 size={13} /> Last update {formatDate(app.lastActionDate)}
          </span>
        )}
      </div>

      {app.notes && <div className="app-notes">{app.notes}</div>}
    </div>
  );
}
