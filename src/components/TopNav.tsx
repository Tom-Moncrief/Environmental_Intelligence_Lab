type TopNavProps = {
  brand: string;
};

export function TopNav({ brand }: TopNavProps) {
  return (
    <header className="topbar topbar--clean">
      <div className="brand-lockup">
        <span className="brand-mark brand-mark--clean">EIL</span>
        <div>
          <p className="brand-name">{brand}</p>
          <p className="brand-tagline">GeoAI research for biomass energy crops</p>
        </div>
      </div>

      <nav className="topnav" aria-label="Primary">
        <a href="#core-aim">Aim</a>
        <a href="#problem">Problem</a>
        <a href="#objectives">Objectives</a>
        <a href="#pipeline">Pipeline</a>
        <a href="#vision">Vision</a>
        <a href="#outcome">Outcome</a>
      </nav>
    </header>
  );
}
