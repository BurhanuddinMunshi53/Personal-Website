import { ReactNode, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/education", label: "Education" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },

];

const SiteLayout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-14 md:h-16">
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="h-6 w-6 rounded-md bg-foreground text-background grid place-items-center text-[11px] font-bold">
              B
            </span>
            <span className="font-semibold tracking-tight text-[15px]">
              Burhanuddin
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-sm rounded-md transition-colors ${
                    isActive
                      ? "text-foreground bg-subtle"
                      : "text-muted-foreground hover:text-foreground hover:bg-subtle"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/contact"
            className="hidden md:inline-flex items-center text-sm font-medium px-4 py-1.5 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Get in touch
          </NavLink>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 rounded-md hover:bg-subtle"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `px-3 py-3 text-base rounded-md ${
                      isActive
                        ? "bg-subtle text-foreground font-medium"
                        : "text-muted-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className="mt-2 text-center px-4 py-3 rounded-full bg-accent text-accent-foreground text-sm font-medium"
              >
                Get in touch
              </NavLink>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border mt-16 md:mt-24">
        <div className="container py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            <div>
              <p className="font-semibold text-base">Burhanuddin Munshi</p>
              <p className="text-sm text-muted-foreground mt-1">
                Independent developer · Python & Web
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Location</p>
              <p className="text-sm">Barwani, MP — India</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Status</p>
              <p className="text-sm flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open to collaboration
              </p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Burhanuddin Munshi</span>
            <span>Built with care.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
