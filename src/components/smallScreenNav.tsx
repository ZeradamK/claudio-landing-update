"use client";
import { useState } from "react";
import Link from "next/link";
import { Columns, X } from "@deemlol/next-icons";

export default function SmallScreenNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-[10px] right-[10px] z-50 md:hidden flex flex-col items-end">
      {/* Hamburger/X Icon */}
      <button
        className="relative z-50 flex items-center justify-center w-10 h-10 focus:outline-none group"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <span className="transition-transform duration-300">
          {open ? <X size={24} color="#FFFFFF" /> : <Columns size={24} color="#FFFFFF" />}
        </span>
      </button>
      {/* Dropdown Menu */}
      <nav
        className={`mt-2 bg-black/80 backdrop-blur-md border border-white/10 shadow-lg transition-transform duration-300 origin-top-right font-[var(--font-lato)] rounded-[15px] w-[300px] ${open ? "scale-y-100" : "scale-y-0"} transform z-40`}
        style={{ transitionProperty: "transform, opacity" }}
      >
        <ul className="flex flex-col gap-2 py-4 px-6 text-white text-[15px]">
          <li>
            <Link href="#" className="block py-2 px-2 rounded hover:bg-white/10 transition-colors" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-2 rounded hover:bg-white/10 transition-colors" onClick={() => setOpen(false)}>
              Features
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-2 rounded hover:bg-white/10 transition-colors" onClick={() => setOpen(false)}>
              Team
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-2 rounded hover:bg-white/10 transition-colors" onClick={() => setOpen(false)}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#waitlist" className="block py-2 px-2 rounded border border-white/20 font-bold text-[13px] mt-2 text-center hover:bg-white/10 transition-colors rounded-[15px]" onClick={() => setOpen(false)}>
              Join waitlist
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
} 