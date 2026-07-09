import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <div className="relative h-[200px] md:h-[550px]">

        <div className="absolute inset-0">
          <Image 
            src="/images/bg-home.jpg"
            alt="image home nestkos"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* hero section*/}
        <div className="relative z-10 px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row items-center gap-10 min-h-[60vh]">

            <div className="w-full text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 tracking-light">Temukan Kos Nyaman <br /> Sesuai 
                <span className="bg-gradient-to-r from-[#008CFF] to-[#50B0FF] text-transparent bg-clip-text"> Kebutuhanmu</span>
              </h1>

              <p className="text-white text-lg w-[100vh] max-w-2xl">Cari informasi kos terpercaya, bandingkan fasilitas, dan lakukan pemesanan dengan mudah dalam satu platform.</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
