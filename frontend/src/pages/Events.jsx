import Navbar from "../components/Navbar";

function Events() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900">Events</h1>
        <p className="mt-2 text-slate-600">Event list will be here.</p>
      </main>
    </div>
  );
}
export default Events;