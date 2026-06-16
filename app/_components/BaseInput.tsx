interface Props {
  label: string;
  name: string;
  type: string;
  error?: string;
  value: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  className?: string;
}

export default function BaseInput({
  label,
  name,
  error,
  helperText,
  type,
  value,
  required,
  onChange,
  className,
  ...rest
}: Props) {
  const base =
    "block w-full rounded-md border px-3 py-2 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90 dark:bg-slate-900/80 dark:text-slate-50 placeholder:text-slate-400";
  const normalBorder = "border-slate-300 dark:border-slate-700";
  const errorBorder = "border-red-500 focus:ring-red-500 focus:border-red-500";

  return (
    <div className="flex flex-col gap-1.5">
      {" "}
      <label
        htmlFor={name}
        className="text-[11px] font-mono text-slate-400 dark:text-white/40 uppercase tracking-widest"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        className={[base, error ? errorBorder : normalBorder, className ?? ""]
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
