import Button from "./Button";

const Dashboard = ({ onLogout }) => {
  // Mock data for the SaaS experience
  const stats = [
    { label: "Active Users", value: "1,284", grow: "+12%" },
    { label: "Revenue", value: "$42,500", grow: "+8%" },
    { label: "Server Status", value: "99.9%", grow: "Stable" }
  ];

  return (
    <div className="card" style={{ maxWidth: "600px" }}>
      <div className="dashboard-header">
        <h2 style={{ fontSize: "1.8rem" }}>SkyLine <span style={{ fontWeight: "300" }}>Analytics</span></h2>
        <p className="subtitle">Welcome back, Administrator. Systems are optimal.</p>
      </div>

      <div className="stats-grid" style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr 1fr", 
        gap: "1rem", 
        margin: "2rem 0" 
      }}>
        {stats.map((stat, index) => (
          <div key={index} style={{ 
            background: "rgba(15, 23, 42, 0.5)", 
            padding: "1rem", 
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.05)"
          }}>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.75rem", margin: 0 }}>{stat.label}</p>
            <h3 style={{ margin: "0.5rem 0", color: "var(--primary-green)" }}>{stat.value}</h3>
            <span style={{ fontSize: "0.7rem", color: "#6ee7b7" }}>{stat.grow}</span>
          </div>
        ))}
      </div>

      <div className="dashboard-footer" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem" }}>
        <p className="subtitle" style={{ marginBottom: "1rem" }}>Session active: 12m 4s</p>
        <button 
          onClick={onLogout} 
          className="btn-primary" 
          style={{ background: "rgba(244, 63, 94, 0.2)", color: "#fb7185", border: "1px solid #fb7185" }}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;