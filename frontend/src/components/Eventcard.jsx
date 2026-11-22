import { Calendar, MapPin, CalendarDays } from "lucide-react";

/*
  Props:
  - type:       "Workshop", "Hackathon" etc. (small badge on the image)
  - image:      path or URL of the poster. If missing, a gradient is shown instead.
  - title, date, venue, organizer
  - seatsLeft:  number. The badge turns red when 10 or fewer seats remain.
*/
function EventCard({ type, image, title, date, venue, organizer, seatsLeft }) {
  const almostFull = seatsLeft <= 10;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
      {/* Poster */}
      <div className="relative h-44 w-full bg-gradient-to-br from-indigo-500 to-violet-600">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-white/70">
            <CalendarDays size={48} />
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-800">
          {type}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Calendar size={14} className="text-indigo-600" />
          {date}
        </p>
        <h3 className="mt-2 text-lg font-bold text-slate-900">{title}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={14} className="text-indigo-600" />
          {venue}
        </p>
        <p className="mt-1 text-xs text-slate-500">Organized by {organizer}</p>

        {/* Bottom row */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <span
            className={`text-xs font-semibold ${
              almostFull ? "text-red-600" : "text-emerald-600"
            }`}
          >
            ● {seatsLeft} seats left
          </span>
          <a
            href="/login"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventCard;