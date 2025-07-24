"use client";

import React, { useState, lazy, Suspense } from "react";
import emailjs from "@emailjs/browser";
import TopLoader from "../components/ui/top-loader";

const ContactExperience = lazy(() => import("../components/ui/ComputerExperience"));

const TitleHeader = ({ title, sub }) => (
  <div className="flex flex-col items-center gap-5 text-center">
    <div className="hero-badge">
      <p>{sub}</p>
    </div>
    <h1 className="font-semibold text-3xl md:text-5xl text-purple-400">{title}</h1>
  </div>
);

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const currentTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        { ...formData, time: currentTime },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((err) => {
        console.error("Email send error:", err);
        setTimeout(() => setLoading(false), 1000);
      });
  };

  return (
    <>
      <TopLoader isLoading={loading} color="#8b5cf6" height={4} duration={2} />

      <section id="contact" className="flex justify-center items-center py-16 px-5 md:px-10">
        <div className="max-w-7xl w-full">
          <TitleHeader title="Get in Touch – Let’s Connect" sub="💬 Have questions or ideas? Let’s talk! 🚀" />

          <div className="mt-16 grid grid-cols-1 xl:grid-cols-12 gap-10">
            {/* Contact Form */}
            <div className="xl:col-span-5 w-full">
              <div className="flex justify-center items-center rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-8 md:p-10 shadow-lg">
                <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
                  {/* Inputs here... */}
                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-white text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="What’s your good name?"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm bg-white/10 text-white placeholder:text-gray-400 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-white text-sm">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="What’s your email address?"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm bg-white/10 text-white placeholder:text-gray-400 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                  </div>
                  {/* Message */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-white text-sm">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm bg-white/10 text-white placeholder:text-gray-400 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
                    />
                  </div>

                  <button type="submit" disabled={loading}>
                    <div className="cta-button group opacity-90 hover:opacity-100 transition">
                      <div className="bg-circle" />
                      <p className="text">{loading ? "Sending..." : "Send Message"}</p>
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                      </div>
                    </div>
                  </button>
                </form>
              </div>
            </div>

            {/* 3D Visual Lazy Loaded */}
            <div className="xl:col-span-7 w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
              <div className="bg-[#cd7c2e] w-full h-full rounded-3xl overflow-hidden cursor-grab relative click">
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center h-full text-white">
                      Loading 3D Visualization...
                    </div>
                  }
                >
                  <ContactExperience />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;