import { useState } from "react";
import { Link } from "react-router-dom";
import { Ticket, Mail, Lock } from "lucide-react";
import FormInput from "../components/FormInput";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear the error of the field being edited
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Checks the form in the browser. The backend will check again later,
  // because browser checks only help the user and are not real security.
  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // TODO: call the FastAPI login endpoint here
    console.log("Login data:", form);
  };

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
        <h1 className="text-center text-2xl font-bold text-slate-900">Welcome back</h1>
        <p className="mt-1 text-center text-sm text-slate-500">
          Sign in to see your tickets and events
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
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
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            autoComplete="current-password"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;