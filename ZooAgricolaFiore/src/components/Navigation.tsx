import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "Home", href: "/", active: location.pathname === "/" },
    { label: "La nostra storia", href: "/storia", active: location.pathname === "/storia" },
    { label: "Eventi", href: "/eventi", active: location.pathname === "/eventi" },
    { label: "Contatti", href: "/contatti", active: location.pathname === "/contatti" },
    { label: "Blog", href: "/blog", active: location.pathname === "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🐷</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:inline">FIORE</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-golden-yellow ${
                    item.active ? "text-golden-yellow" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-base font-medium transition-colors hover:text-golden-yellow ${
                    item.active ? "text-golden-yellow" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/prodotti">
            <Button variant="hero" size="lg" className="rounded-full px-8">
              I nostri prodotti
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
