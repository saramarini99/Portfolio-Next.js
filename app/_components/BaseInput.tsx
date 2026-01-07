interface Props  {
  label: string;
  name: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  className?:string
}

export default function BaseInput({
  label,
  name,
  error,
  helperText,
  fullWidth = true,
  className,
  ...rest
}: Props) {
  const base =
    "block w-full rounded-md border px-3 py-2 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90 dark:bg-slate-900/80 dark:text-slate-50 placeholder:text-slate-400";
  const normalBorder = "border-slate-300 dark:border-slate-700";
  const errorBorder = "border-red-500 focus:ring-red-500 focus:border-red-500";

  return (
    <div className={fullWidth ? "w-full" : ""}>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        className={[
          base,
          error ? errorBorder : normalBorder,
          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      />

      {error ? (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      ) : helperText ? (
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
