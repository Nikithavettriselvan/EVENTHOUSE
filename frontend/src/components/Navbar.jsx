import { useEffect, useState } from "react";
import { Ticket, Search, Menu, X } from "lucide-react";

const links = [
  { label: "Browse Events", href: "#events" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "For Organizers", href: "#organizers" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Stop the page behind the drawer from scrolling, and close with the Escape key
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Ticket size={20} />
            </span>
            <span className="text-lg font-bold text-slate-900">
              Event<span className="text-indigo-600">House</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Search box (desktop only, not functional yet) */}
          <div className="hidden w-64 items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 lg:flex">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Desktop buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <a href="/login" className="text-sm font-semibold text-slate-700 hover:text-indigo-600">
              Login
            </a>
            <a
              href="/signup"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Sign Up
            </a>
          </div>

          {/* Hamburger button (mobile only) */}
          <button
            className="rounded-lg p-2 text-slate-700 md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/*
        The drawer sits OUTSIDE the header on purpose: the header has backdrop-blur,
        which would trap a "fixed" child inside the header's box.
      */}

      {/* Dark background: tap it to close */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer that slides in from the right */}
      <aside
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[70] flex h-full w-72 max-w-[80%] flex-col bg-white p-6 shadow-xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">
            Event<span className="text-indigo-600">House</span>
          </span>
          <button
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            onClick={close}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={close}
              className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <a
            href="/login"
            onClick={close}
            className="rounded-lg border border-slate-200 px-4 py-3 text-center font-semibold text-slate-700"
          >
            Login
          </a>
          <a
            href="/signup"
            onClick={close}
            className="rounded-lg bg-indigo-600 px-4 py-3 text-center font-semibold text-white"
          >
            Sign Up
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;