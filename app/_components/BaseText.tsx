interface Props {
  name: string;
  rows: number;
  placeholder: string;
  required: boolean;
  value: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function BaseText({ value, onChange, className }: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-mono text-slate-400 dark:text-white/40 uppercase tracking-widest">
        Message
      </label>
      <textarea
        name="message"
        rows={6}
        placeholder="Tell me about your project..."
        value={value}
        onChange={onChange}
        required
        className={className}
      />
    </div>
  );
}
