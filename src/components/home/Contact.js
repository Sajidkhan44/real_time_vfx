"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-[120px] relative z-[999] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start justify-between">

        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-100">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-300 max-w-lg leading-relaxed">
            Bring your vision to life with REAL TIME VFX! Join us today.
          </p>
          <Link
            href="mailto:careers@realtimevfx.in"
            className="inline-block bg-[#34b6f6] hover:bg-blue-500 transition text-white font-semibold px-6 py-3 rounded-lg"
          >
            Join us
          </Link>
        </div>

        {/* Contact Form */}
        <form className="w-full max-w-xl bg-[#111] p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-black text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-black text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 bg-black text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#34b6f6] hover:bg-blue-500 transition text-white font-semibold px-6 py-3 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
