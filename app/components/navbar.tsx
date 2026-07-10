"use client"

import Link from "next/link"

export default  function Navbar () {

    const navMenu = [
        {name: "Beranda", href:"/"},
        {name: "Cari kos", href:"/cari"},
        {name: "Tentang", href:"tentang"},
        {name: "kontak", href:"/kontak"}
    ]
    return (
        <nav className="bg-white">
            <div className="flex items-center justify-between px-8 md:px-16 lg:px-24 h-20 w-full">
                
                <img 
                    src="/images/logo.png" 
                    alt="logo nestkos"
                    width={170}
                    height={170}
                />

                <div className="flex items-center gap-8">
                    {navMenu.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-xl font-medium text-black group"
                        >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#0069E2] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                <div className="flex gap-4">
                    <button className="bg-transparent border border-[#0069E2] text-[#0069E2] rounded-sm px-8 h-10">Masuk</button>
                    <button className="bg-[#0069E2] rounded-sm px-8 h-10 text-white">Daftar</button>
                </div>
            </div>
        </nav>
        
    )
}