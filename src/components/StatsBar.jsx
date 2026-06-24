function StatTile({ label, value, accent }) {
  return (
    <div className="stat-tile">
      <div className="stat-value" style={accent ? { color: "var(--accent)" } : undefined}>
        {value}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsBar({ apps }) {
  const total = apps.length;
  const interviewing = apps.filter((a) => a.stage === "interviewing").length;
  const offers = apps.filter((a) => a.stage === "offer").length;
  const beyondWishlist = apps.filter((a) => a.stage !== "wishlist").length;
  const responded = apps.filter((a) => ["interviewing", "offer", "rejected"].includes(a.stage)).length;
  const responseRate = beyondWishlist ? Math.round((responded / beyondWishlist) * 100) : 0;

  return (
    <div className="stats-row">
      <StatTile label="Total applications" value={total} />
      <StatTile label="Interviewing" value={interviewing} />
      <StatTile label="Offers" value={offers} accent />
      <StatTile label="Response rate" value={responseRate + "%"} />
    </div>
  );
}
