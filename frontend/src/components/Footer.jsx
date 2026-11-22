import { Ticket } from "lucide-react";

const links = [
  { label: "Events", href: "#events" },
  { label: "Login", href: "/login" },
  { label: "Sign up", href: "/signup" },
  { label: "Verify Certificate", href: "/verify" },
];

function Footer() {
  return (
    <footer className="bg-indigo-50/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Ticket size={18} />
            </span>
            <span className="font-bold text-slate-900">EventHouse</span>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            Event registration and QR check-in for colleges.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-sm text-slate-600 hover:text-indigo-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-slate-500">© 2026 EventHouse</p>
      </div>
    </footer>
  );
}

export default Footer;