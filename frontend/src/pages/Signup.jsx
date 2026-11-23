import { useState } from "react";
import { Link } from "react-router-dom";
import { Ticket, Mail, Lock, User, Building2, Hash, GraduationCap, Megaphone } from "lucide-react";
import FormInput from "../components/FormInput";

const departments = [
  "Information Technology",
  "Computer Science",
  "Electronics & Communication",
  "Electrical & Electronics",
  "Mechanical",
  "Civil",
  "AI & Data Science",
  "Other",
];

function Signup() {
  const [role, setRole] = useState("student"); // "student" or "organizer"
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    registerNo: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 8) newErrors.password = "Use at least 8 characters";
    if (!form.department) newErrors.department = "Select your department";
    // Register number is needed only for students
    if (role === "student" && !form.registerNo.trim()) {
      newErrors.registerNo = "Register number is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Organizers don't send a register number
    const data = { ...form, role };
    if (role === "organizer") delete data.registerNo;

    // TODO: call the FastAPI register endpoint here
    console.log("Signup data:", data);
  };

  const toggleClasses = (active) =>
    `flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition ${
      active ? "bg-indigo-600 text-white shadow" : "text-slate-600 hover:text-indigo-600"
    }`;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-10">
      {/* Logo */}
      <Link to="/" className="mb-6 flex items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
          <Ticket size={22} />
        </span>
        <span className="text-xl font-bold text-slate-900">
          Event<span className="text-indigo-600">House</span>
        </span>
      </Link>

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 sm:p-8">
        <h1 className="text-center text-2xl font-bold text-slate-900">Create your account</h1>
        <p className="mt-1 text-center text-sm text-slate-500">
          Join college events and get your QR ticket
        </p>

        {/* Student / Organizer toggle */}
        <div className="mt-6 flex rounded-full bg-indigo-50 p-1">
          <button type="button" onClick={() => setRole("student")} className={toggleClasses(role === "student")}>
            <GraduationCap size={16} /> Student
          </button>
          <button type="button" onClick={() => setRole("organizer")} className={toggleClasses(role === "organizer")}>
            <Megaphone size={16} /> Organizer
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
          <FormInput
            label="Full Name"
            name="name"
            icon={User}
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="name"
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            icon={Mail}
            placeholder="you@college.edu"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            icon={Lock}
            placeholder="At least 8 characters"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            autoComplete="new-password"
          />
          <FormInput
            label="Department"
            name="department"
            icon={Building2}
            placeholder="Select your department"
            options={departments}
            value={form.department}
            onChange={handleChange}
            error={errors.department}
          />

          {/* Only students see this field */}
          {role === "student" && (
            <FormInput
              label="Register Number"
              name="registerNo"
              icon={Hash}
              placeholder="Your college register number"
              helper="Used to mark your attendance and print your certificate."
              value={form.registerNo}
              onChange={handleChange}
              error={errors.registerNo}
            />
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;