type NavItem = {
  href: string;
  label: string;
  active?: boolean;
};

type TopNavProps = {
  brand: string;
  items: NavItem[];
};

export function TopNav({ brand, items }: TopNavProps) {
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
        {items.map((item) => (
          <a key={item.href} href={item.href} className={item.active ? 'topnav__link topnav__link--active' : 'topnav__link'}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
