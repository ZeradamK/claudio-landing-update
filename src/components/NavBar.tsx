"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-center fixed top-0 left-0 z-50 pt-[5px] pointer-events-none">
      <div className="flex items-center gap-6 md:gap-8 px-4 py-[5px] md:px-8 md:py-[9px] rounded-[15px] border border-white/10 bg-black/40 backdrop-blur-sm max-w-2xl w-full md:w-auto pointer-events-auto font-[var(--font-lato)]">
        {/* Logo */}
        <Link href="/" className="flex items-center mr-2" aria-label="Claudio Home">
          {/* Claudio logo image */}
          <Image
            src="/claudio-logo.png"
            alt="Claudio Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
            priority
          />
        </Link>
        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-neutral-300 text-[14px] font-medium font-[var(--font-lato)]">
          <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Team</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
        </ul>
        {/* CTA Button */}
        <Link
          href="#waitlist"
          className="ml-auto border border-white/20 rounded-[15px] px-4 py-[5px] font-bold text-white hover:bg-white/10 transition-colors text-[13px] font-[var(--font-lato)]"
        >
          Join waitlist
        </Link>
      </div>
    </nav>
  );
} 