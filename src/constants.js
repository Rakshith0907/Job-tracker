export const STAGES = [
  { key: "wishlist", label: "Wishlist", color: "#8B8680" },
  { key: "applied", label: "Applied", color: "#3B6EA5" },
  { key: "interviewing", label: "Interviewing", color: "#C98A1F" },
  { key: "offer", label: "Offer", color: "#3F7D58" },
  { key: "rejected", label: "Rejected", color: "#A33B2E" },
];

export const STAGE_MAP = Object.fromEntries(STAGES.map((s) => [s.key, s]));

export function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export function formatDate(d) {
  if (!d) return "";
  const dt = new Date(d + "T00:00:00");
  if (isNaN(dt)) return d;
  return dt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export const SEED_DATA = [
  {
    id: uid(),
    company: "Northwind Studios",
    role: "Frontend Engineer",
    stage: "interviewing",
    dateApplied: "2026-06-02",
    lastActionDate: "2026-06-18",
    location: "Remote",
    round: "Round 2 — Technical",
    notes: "Strong culture fit, waiting on panel feedback.",
    link: "",
  },
  {
    id: uid(),
    company: "Helio Robotics",
    role: "Product Designer",
    stage: "applied",
    dateApplied: "2026-06-10",
    lastActionDate: "",
    location: "Bengaluru, IN",
    round: "",
    notes: "",
    link: "",
  },
  {
    id: uid(),
    company: "Pinegate Capital",
    role: "Data Analyst",
    stage: "wishlist",
    dateApplied: "",
    lastActionDate: "",
    location: "Hybrid — Pune",
    round: "",
    notes: "Referral via Priya, plan to apply this week.",
    link: "",
  },
  {
    id: uid(),
    company: "Caldera Health",
    role: "Backend Engineer",
    stage: "rejected",
    dateApplied: "2026-05-12",
    lastActionDate: "2026-06-05",
    location: "Remote",
    round: "Final round",
    notes: "Closed role after final interview.",
    link: "",
  },
];
