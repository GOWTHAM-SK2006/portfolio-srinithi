"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryFor: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await res.json()) as { error?: string; message?: string };

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error || "Unable to submit enquiry. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback(data.message || "Thank you! Your enquiry has been received.");
      setFormData({ name: "", phone: "", email: "", enquiryFor: "", message: "" });
    } catch {
      setStatus("error");
      setFeedback("Network error. Please email srinithianand@gmail.com directly.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="Your Name *"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-obsidian/70 border border-gold/30 rounded-xl px-4 py-3.5 text-sm text-[#FFF7E2] placeholder:text-[#D5C8B0]/45 focus:border-gold-light focus:outline-none transition-colors"
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full bg-obsidian/70 border border-gold/30 rounded-xl px-4 py-3.5 text-sm text-[#FFF7E2] placeholder:text-[#D5C8B0]/45 focus:border-gold-light focus:outline-none transition-colors"
        />
      </div>

      <input
        type="email"
        placeholder="Email Address *"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full bg-obsidian/70 border border-gold/30 rounded-xl px-4 py-3.5 text-sm text-[#FFF7E2] placeholder:text-[#D5C8B0]/45 focus:border-gold-light focus:outline-none transition-colors"
      />

      <div className="relative">
        <select
          required
          value={formData.enquiryFor}
          onChange={(e) =>
            setFormData({ ...formData, enquiryFor: e.target.value })
          }
          className="w-full bg-obsidian-card border border-gold/30 rounded-xl px-4 py-3.5 text-sm text-[#F7F1E3]/85 focus:border-gold-light focus:outline-none transition-colors appearance-none"
        >
          <option value="" disabled>
            Enquiry For *
          </option>
          <option value="Live Concert Performance">Live Concert Performance</option>
          <option value="Music Collaboration">Music Collaboration</option>
          <option value="Special Event Booking">Special Event Booking</option>
          <option value="Television & Media Enquiry">Television &amp; Media Enquiry</option>
          <option value="Other">Other</option>
        </select>
        <svg
          className="w-4 h-4 text-gold-light absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <textarea
        placeholder="Your Message *"
        required
        rows={5}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full bg-obsidian/70 border border-gold/30 rounded-xl px-4 py-3.5 text-sm text-[#FFF7E2] placeholder:text-[#D5C8B0]/45 focus:border-gold-light focus:outline-none transition-colors resize-none"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full btn-gold text-base flex items-center justify-center gap-2.5 py-4 cursor-pointer disabled:opacity-60"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div className="rounded-xl border border-gold/45 bg-gold/10 px-4 py-3 text-center text-gold-light text-sm animate-fade-in">
          {feedback} You can also reach{" "}
          <a href="mailto:srinithianand@gmail.com" className="underline font-semibold">
            srinithianand@gmail.com
          </a>
          .
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl border border-red-400/40 bg-red-950/35 px-4 py-3 text-center text-red-200 text-sm animate-fade-in">
          {feedback}
        </div>
      )}
    </form>
  );
}

