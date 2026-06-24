import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { STAGES, uid } from "../constants.js";

const BLANK = {
  company: "",
  role: "",
  stage: "wishlist",
  dateApplied: "",
  lastActionDate: "",
  location: "",
  round: "",
  link: "",
  notes: "",
};

export default function ApplicationFormModal({ initial, onSave, onDelete, onClose }) {
  const [form, setForm] = useState(initial ? { ...initial } : { ...BLANK });
  const firstRef = useRef(null);

  useEffect(() => {
    firstRef.current && firstRef.current.focus();
  }, []);

  function set(key, val) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.company.trim() || !form.role.trim()) return;
    onSave({ ...form, id: form.id || uid() });
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <form className="modal" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <div className="modal-header">
          <span className="eyebrow">{initial ? "Edit entry" : "New entry"}</span>
          <button type="button" className="icon-btn" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <label className="field">
          <span>Company</span>
          <input ref={firstRef} value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="e.g. Northwind Studios" required />
        </label>

        <label className="field">
          <span>Role</span>
          <input value={form.role} onChange={(e) => set("role", e.target.value)} placeholder="e.g. Frontend Engineer" required />
        </label>

        <div className="field-row">
          <label className="field">
            <span>Stage</span>
            <select value={form.stage} onChange={(e) => set("stage", e.target.value)}>
              {STAGES.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Round</span>
            <input value={form.round} onChange={(e) => set("round", e.target.value)} placeholder="e.g. Round 2 — Technical" />
          </label>
        </div>

        <div className="field-row">
          <label className="field">
            <span>Date applied</span>
            <input type="date" value={form.dateApplied} onChange={(e) => set("dateApplied", e.target.value)} />
          </label>
          <label className="field">
            <span>Last action date</span>
            <input type="date" value={form.lastActionDate} onChange={(e) => set("lastActionDate", e.target.value)} />
          </label>
        </div>
        <p className="field-hint">Last action date is whenever something last happened — an interview, an offer, a rejection.</p>

        <label className="field">
          <span>Location</span>
          <input value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="Remote, City…" />
        </label>

        <label className="field">
          <span>Job link</span>
          <input value={form.link} onChange={(e) => set("link", e.target.value)} placeholder="https://…" />
        </label>

        <label className="field">
          <span>Notes</span>
          <textarea value={form.notes} onChange={(e) => set("notes", e.target.value)} rows={3} placeholder="Referral, interview prep, follow-ups…" />
        </label>

        <div className="modal-actions">
          {initial && (
            <button type="button" className="btn-ghost danger" onClick={() => onDelete(initial.id)}>
              Delete entry
            </button>
          )}
          <div className="spacer" />
          <button type="button" className="btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Save entry
          </button>
        </div>
      </form>
    </div>
  );
}
