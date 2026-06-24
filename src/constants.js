export const STAGES = [
  { key: "wishlist", label: "Wishlist", color: "#8B8680" },
  { key: "applied", label: "Applied", color: "#3B6EA5" },
  { key: "interviewing", label: "Interviewing", color: "#C98A1F" },
  { key: "offer", label: "Offer", color: "#3F7D58" },
  { key: "rejected", label: "Rejected", color: "#A33B2E" },
];

export const STAGE_MAP = Object.fromEntries(STAGES.map((s) => [s.key, s]));

// Each theme defines the CSS variables applied to the document root.
export const THEMES = {
  paper: {
    name: "Paper",
    swatch: "#F7F4EE",
    vars: {
      "--bg": "#F7F4EE",
      "--card": "#FFFFFF",
      "--text": "#2B2A28",
      "--text-soft": "#6B6660",
      "--accent": "#C1440E",
      "--border": "#E6E1D6",
    },
  },
  slate: {
    name: "Slate",
    swatch: "#1B1D21",
    vars: {
      "--bg": "#1B1D21",
      "--card": "#242730",
      "--text": "#EDEEF0",
      "--text-soft": "#9A9DA6",
      "--accent": "#6C9BFF",
      "--border": "#34373F",
    },
  },
  mint: {
    name: "Mint",
    swatch: "#2F9E6E",
    vars: {
      "--bg": "#F2F8F5",
      "--card": "#FFFFFF",
      "--text": "#1F2D27",
      "--text-soft": "#5C7268",
      "--accent": "#2F9E6E",
      "--border": "#DCEAE3",
    },
  },
  blush: {
    name: "Blush",
    swatch: "#D2685A",
    vars: {
      "--bg": "#FBF2F1",
      "--card": "#FFFFFF",
      "--text": "#2E2424",
      "--text-soft": "#8A7370",
      "--accent": "#D2685A",
      "--border": "#F0DEDB",
    },
  },
};

export function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export function formatDate(d) {
  if (!d) return "";
  const dt = new Date(d + "T00:00:00");
  if (isNaN(dt)) return d;
  return dt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// export const SEED_DATA = [
//   {
//     id: uid(),
//     company: "Northwind Studios",
//     role: "Frontend Engineer",
//     stage: "interviewing",
//     dateApplied: "2026-06-02",
//     lastActionDate: "2026-06-18",
//     location: "Remote",
//     round: "Round 2 — Technical",
//     notes: "Strong culture fit, waiting on panel feedback.",
//     link: "",
//   },
//   {
//     id: uid(),
//     company: "Helio Robotics",
//     role: "Product Designer",
//     stage: "applied",
//     dateApplied: "2026-06-10",
//     lastActionDate: "",
//     location: "Bengaluru, IN",
//     round: "",
//     notes: "",
//     link: "",
//   },
// ];
