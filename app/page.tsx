import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <div className="relative h-[200px] md:h-[600px]">

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
          <div className="flex flex-col md:flex-row items-center gap-10 h-[70vh]">

            <div className="w-full text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold
               text-white mb-5 tracking-light">Temukan Kos Nyaman <br /> Sesuai 
                <span className="bg-gradient-to-r from-[#008CFF] to-[#50B0FF] text-transparent bg-clip-text"> Kebutuhanmu</span>
              </h1>

              <p className="text-white text-lg w-[100vh] max-w-2xl">Cari informasi kos terpercaya, bandingkan fasilitas, dan lakukan pemesanan dengan mudah dalam satu platform.</p>
            </div>
          </div>
        </div>

        {/*search*/}
        <div className="absolute w-full -bottom-10 left-0 right-0 px-8 md:px-16 lg:px-24">

          <div className="bg-white rounded-xl p-6 text-black flex flex-col gap-8">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

              {/*lokasi*/}
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Lokasi</label>
                <input 
                  type="text"
                  placeholder="Masukan Lokasi..."
                  className="w-full px-4 py-2 border border-gray-400 rounded text-black" />
              </div>

              {/*Tipe*/}
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Tipe</label>
                <input 
                  type="text"
                  placeholder="Masukan Tipe kosan.."
                  className="w-full px-4 py-2 border border-gray-400 rounded text-black" />
              </div>

              {/*Harga*/}
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Harga</label>
                <input 
                  type="text"
                  placeholder="Masukan Harga.."
                  className="w-full px-4 py-2 border border-gray-400 rounded text-black" />
              </div>

              {/*Ukuran*/}
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Ukuran</label>
                <input 
                  type="text"
                  placeholder="Masukan ukuran.."
                  className="w-full px-4 py-2 border border-gray-400 rounded text-black" />
              </div>
            </div>

           
            {/*Search Lokasi Terdekat*/}
            <div className="flex flex-row gap-4">
              <input 
                type="text"
                placeholder="Cari Kosan Terdekat.."
                className="w-full px-4 py-2 border border-gray-400 rounded text-black" 
              />
              
              <button className="bg-[#008CFF] px-8 py-2 text-white rounded-sm font-medium cursor-pointer">Search</button>
            </div> 
            
          </div>
        </div>
       
      </div>
    </div>
  );
}
