interface Props {
  name: string;
  rows: number;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function BaseText({ value, onChange }: Props) {
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
        className="w-full bg-white + shadow-sm dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-amber-400/60 focus:bg-white/[0.06] transition-all duration-200 resize-none"
      />
    </div>
  );
}
