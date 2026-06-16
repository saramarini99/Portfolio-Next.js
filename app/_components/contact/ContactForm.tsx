"use client";

import { useState } from "react";
import BaseInput from "@/components/BaseInput";
import BaseText from "@/components/BaseText";
import BaseButton from "@/components/BaseButton";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClass =
  "w-full bg-white shadow-sm dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-white/20 focus:outline-none focus:border-amber-400/60 transition-all duration-200";

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // your submit logic here (e.g. send to API)
    onSubmitSuccess(); // tell parent we're done
    setFormData(initialFormData); // reset form internally
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <BaseInput
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required={true}
          className={inputClass}
        />
        <BaseInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required={true}
          className={inputClass}
        />
      </div>

      <BaseInput
        label="Subject"
        name="subject"
        type="text"
        value={formData.subject}
        onChange={handleChange}
        required={false}
        className={inputClass}
      />

      <BaseText
        name="message"
        rows={6}
        placeholder="Tell me about your project..."
        value={formData.message}
        onChange={handleChange}
        required={true}
        className={`${inputClass} resize-none`}
      />

      <div className="pt-2 flex items-center justify-between gap-4">
        <p className="text-slate-400 dark:text-white/25 text-xs font-mono">
          I usually reply within 24h.
        </p>
        <BaseButton
          type="secondary"
          className="group flex items-center gap-3 px-7 py-3 rounded-xl transition-all duration-200 active:scale-95"
        >
          Send message
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </BaseButton>
      </div>
    </form>
  );
}
