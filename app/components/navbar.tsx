"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navMenu = [
    { name: "Beranda", href: "/" },
    { name: "Cari Kos", href: "/cari" },
    { name: "Tentang", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between h-20 px-8 md:px-16 lg:px-24">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Logo NestKos"
          width={170}
          height={170}
          priority
        />

        {/* Menu */}
        <div className="flex items-center gap-8">
          {navMenu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-xl font-medium text-black"
            >
              {item.name}

              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#0069E2] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="flex gap-4">
          <button className="h-10 rounded border border-[#0069E2] px-8 text-[#0069E2] transition hover:bg-[#0069E2] hover:text-white">
            Masuk
          </button>

          <button className="h-10 rounded bg-[#0069E2] px-8 text-white transition hover:bg-[#0057bb]">
            Daftar
          </button>
        </div>
      </div>
    </nav>
  );
}