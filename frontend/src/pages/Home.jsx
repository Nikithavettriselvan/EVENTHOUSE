import {
  ArrowRight,
  CheckCircle2,
  MousePointerClick,
  QrCode,
  Award,
  GraduationCap,
  Megaphone,
  ShieldCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import { QRCodeSVG } from "qrcode.react";


const sampleEvents = [
  {
    id: 1,
    type: "Hackathon",
    image: "public/images/hackathon.avif", 
    title: "Annual Inter-College Hackathon 2026",
    date: "Sat, Dec 12, 2026 · 9:00 AM - 6:00 PM",
    venue: "Main Auditorium & Labs",
    organizer: "ACM Student Chapter",
    seatsLeft: 42,
  },
  {
    id: 2,
    type: "Cultural Fest",
    image: "public/images/music.jpg",
    title: "Campus Music & Acoustic Night",
    date: "Fri, Dec 18, 2026 · 6:30 PM - 9:30 PM",
    venue: "Open Air Amphitheatre",
    organizer: "Cultural Affairs Council",
    seatsLeft: 18,
  },
  {
    id: 3,
    type: "Workshop",
    image: "public/images/hackathon1.png",
    title: "AI in Design & Product Workshop",
    date: "Wed, Jan 13, 2027 · 3:00 PM - 5:00 PM",
    venue: "Design Studio, Block B",
    organizer: "Designers Guild",
    seatsLeft: 8,
  },
];

const steps = [
  {
    icon: MousePointerClick,
    title: "1. Register in seconds",
    text: "Pick an event and click Register. It is free, and your QR ticket is ready right away.",
    tag: "Free",
  },
  {
    icon: QrCode,
    title: "2. Scan QR at the event",
    text: "Show your QR ticket on your phone. The organizer scans it to mark your attendance.",
    tag: "Quick",
  },
  {
    icon: Award,
    title: "3. Download certificate",
    text: "After the event, your certificate is generated automatically and available in your account.",
    tag: "Auto",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            ⚡ Free for college students
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Register for college events.
            <span className="block text-indigo-600">Get your QR ticket.</span>
            Collect your certificate.
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-600">
            Discover workshops, hackathons and cultural events in your college. Register in one
            click, show your QR at the door and download your certificate afterwards.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#events"
              className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Browse Events <ArrowRight size={18} />
            </a>
            <a
              href="/signup"
              className="rounded-lg bg-indigo-50 px-6 py-3 font-semibold text-indigo-700 hover:bg-indigo-100"
            >
              Sign up
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {["Free to use", "QR ticket in My Tickets", "Automatic certificates"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Sample ticket card */}
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <span className="rounded bg-indigo-50 px-2 py-1 text-xs font-bold text-indigo-700">
              SAMPLE TICKET
            </span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              ● Registered
            </span>
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">Python Workshop</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 rounded-xl bg-indigo-50/60 p-4 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">Date</p>
              <p className="mt-1 font-semibold text-slate-800">Sat, 12 Dec · 10:00 AM</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">Venue</p>
              <p className="mt-1 font-semibold text-slate-800">Seminar Hall</p>
            </div>
          </div>

          <div className="my-5 border-t-2 border-dashed border-slate-200" />

          <div className="flex flex-col items-center">
            <div className="rounded-xl bg-white p-4 shadow ring-1 ring-slate-100">
              <QRCodeSVG value="EH-4F7K2" size={150} />
            </div>
            <p className="mt-3 text-sm text-slate-500">Show this QR at the venue</p>
            <p className="mt-1 font-mono text-sm font-semibold text-slate-700">EH-4F7K2</p>
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-xl bg-indigo-50 p-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-indigo-600">
              <Award size={18} />
            </span>
            <div className="text-sm">
              <p className="font-semibold text-slate-800">Certificate</p>
              <p className="text-xs text-slate-500">Available after the event</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold tracking-wide text-indigo-700">
            HOW IT WORKS
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">Simple as 1-2-3</h2>
          <p className="mt-2 text-slate-600">
            How EventHouse makes college events easy for students and organizers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <step.icon size={24} />
                </span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {step.tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FEATURED EVENTS ---------- */}
      <section id="events" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Campus Events</h2>
            <p className="mt-1 text-slate-600">Workshops, hackathons and cultural fests coming up</p>
          </div>
          <a
            href="/events"
            className="hidden items-center gap-1 text-sm font-semibold text-indigo-600 sm:flex"
          >
            View all <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

      {/* ---------- FOR STUDENTS / ORGANIZERS ---------- */}
      <section id="organizers" className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <GraduationCap size={24} />
          </span>
          <p className="mt-5 text-xs font-bold tracking-wide text-indigo-600">FOR STUDENTS</p>
          <h3 className="mt-1 text-2xl font-bold text-slate-900">Find events and get your ticket</h3>
          <p className="mt-2 text-slate-600">
            Find events, register in one click, and get your QR ticket.
          </p>
          <ul className="mt-5 space-y-3 text-sm font-medium text-slate-700">
            {[
              "Register for events in one click",
              "Your QR ticket is always in My Tickets",
              "Download your certificates anytime",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-indigo-600" /> {item}
              </li>
            ))}
          </ul>
          <a
            href="#events"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-100"
          >
            Explore Events <ArrowRight size={16} />
          </a>
        </div>

        <div className="rounded-2xl bg-slate-800 p-8 text-white shadow-sm">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700 text-indigo-300">
            <ShieldCheck size={24} />
          </span>
          <p className="mt-5 text-xs font-bold tracking-wide text-emerald-300">FOR ORGANIZERS</p>
          <h3 className="mt-1 text-2xl font-bold">Run events without paper</h3>
          <p className="mt-2 text-slate-300">Create events and manage attendance without paper.</p>
          <ul className="mt-5 space-y-3 text-sm font-medium">
            {[
              "Create an event in minutes",
              "Scan student QR tickets with your phone",
              "Generate certificates automatically after the event",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-300" /> {item}
              </li>
            ))}
          </ul>
          <a
            href="/signup"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500"
          >
            Sign up as Organizer <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ---------- ORGANIZER BANNER ---------- */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-3 rounded-2xl bg-indigo-100/70 p-5 sm:flex-row sm:items-center">
          <p className="flex items-center gap-3 font-semibold text-slate-800">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-indigo-600">
              <Megaphone size={18} />
            </span>
            Organizing an event? Sign up as an organizer.
          </p>
          <a href="/signup" className="flex items-center gap-1 font-semibold text-indigo-700">
            Sign up <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;