import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

/*
  One reusable form field: label + input (or dropdown) + helper text + error text.

  Props:
  - label, name, value, onChange, placeholder
  - type:     "text" | "email" | "password" ...  (password gets a show/hide eye button)
  - icon:     a lucide icon component shown inside the box (optional)
  - options:  array of strings. If given, a dropdown (select) is shown instead of an input
  - helper:   small grey text under the field (optional)
  - error:    red error text under the field (optional)
*/
function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon,
  options,
  helper,
  error,
  autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const fieldClasses = `w-full rounded-lg border bg-slate-50 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 ${
    Icon ? "pl-10" : "pl-3"
  } ${isPassword ? "pr-11" : "pr-3"} ${error ? "border-red-400" : "border-slate-200"}`;

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
        )}

        {options ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={fieldClasses}
          >
            <option value="">{placeholder || "Select"}</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={name}
            name={name}
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className={fieldClasses}
          />
        )}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {helper && !error && <p className="mt-1.5 text-xs text-slate-500">{helper}</p>}
      {error && <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

export default FormInput;