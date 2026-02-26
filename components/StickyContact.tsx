"use client";
import React from "react";

export default function StickyContact(): React.ReactElement {
  const openEnquiry = (source: string): void => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-enquiry", { detail: { source } }));
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
      <div className="flex">
        <button
          onClick={() => openEnquiry("call")}
          className="w-1/2 bg-blue-900 text-white py-3 flex items-center justify-center gap-2 font-semibold"
        >
          📞 Call Now
        </button>
        <button
          onClick={() => openEnquiry("whatsapp")}
          className="w-1/2 bg-green-500 text-white py-3 flex items-center justify-center gap-2 font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
            <path d="M20.52 3.48A11.91 11.91 0 0012.05 0C5.47 0 .1 5.37.1 11.95c0 2.1.55 4.15 1.6 5.97L0 24l6.26-1.64a11.9 11.9 0 005.8 1.48h.01c6.58 0 11.95-5.37 11.95-11.95 0-3.19-1.24-6.19-3.5-8.41z"/>
          </svg>
          Live Chat
        </button>
      </div>
    </div>
  );
}
