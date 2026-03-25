"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  childStage: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  childStage: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        setForm(initialState);
      }}
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-[#0B1D3A]/75">Parent Name</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full rounded-2xl border border-[#0B1D3A]/15 bg-white px-4 py-3 text-[#0B1D3A] outline-none transition focus:border-[#D4AF37]/70"
            placeholder="Enter your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-[#0B1D3A]/75">Email Address</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full rounded-2xl border border-[#0B1D3A]/15 bg-white px-4 py-3 text-[#0B1D3A] outline-none transition focus:border-[#D4AF37]/70"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-[#0B1D3A]/75">Child Program</span>
        <select
          value={form.childStage}
          onChange={(event) => setForm({ ...form, childStage: event.target.value })}
          className="w-full rounded-2xl border border-[#0B1D3A]/15 bg-white px-4 py-3 text-[#0B1D3A] outline-none transition focus:border-[#D4AF37]/70"
        >
          <option value="">Select a program</option>
          <option value="Early Years">Early Years</option>
          <option value="Primary">Primary</option>
          <option value="Middle School">Middle School</option>
          <option value="Secondary">Secondary / O-Level / Matric</option>
        </select>
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-[#0B1D3A]/75">Message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="w-full rounded-[1.5rem] border border-[#0B1D3A]/15 bg-white px-4 py-3 text-[#0B1D3A] outline-none transition focus:border-[#D4AF37]/70"
          placeholder="Tell us what you would like to know or when you want to visit."
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#0B1D3A] shadow-[0_10px_30px_rgba(212,175,55,0.22)] transition hover:-translate-y-0.5"
      >
        Send Enquiry
      </button>

      {submitted ? (
        <p className="mt-4 text-sm text-[#0B1D3A]/80">
          Thank you. Our admissions team will contact you shortly to arrange the next step.
        </p>
      ) : null}
    </form>
  );
}
