import React from "react";

type Option = {
  value: string | number;
  label: string;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.SelectHTMLAttributes<HTMLSelectElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    id: string;
    as?: "input" | "select" | "textarea"; // 👈 now supports textarea
    options?: Option[];                   // 👈 only used when `as="select"`
  };

export default function Input({
  label,
  id,
  as = "input",
  options,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {as === "select" ? (
        <select
          id={id}
          {...props}
          className="rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-green-50">
              {opt.label}
            </option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea
          id={id}
          {...props}
          className="rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      ) : (
        <input
          id={id}
          {...props}
          className="rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      )}
    </div>
  );
}
