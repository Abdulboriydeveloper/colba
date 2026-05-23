import './StatsCards.css'

export default function StatsCards({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div className="stat-card" key={stat.label} style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-num">{stat.num}</div>
          {stat.sub && <div className="stat-sub">{stat.sub}</div>}
          <div className="stat-label">{stat.label}</div>
          <div className="stat-deco" />
        </div>
      ))}
    </div>
  )
}
