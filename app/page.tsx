import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-700 tracking-tight">MI BUNGUNG BARANA</span>
        </div>
        <div className="hidden md:flex gap-6 font-medium text-slate-600">
          <a href="#hero" className="hover:text-blue-700 transition">Beranda</a>
          <a href="#fasilitas" className="hover:text-blue-700 transition">Fasilitas</a>
          <a href="#ekskul" className="hover:text-blue-700 transition">Ekstrakurikuler</a>
          <a href="#kontak" className="hover:text-blue-700 transition">Kontak</a>
        </div>
        <a href="#kontak" className="bg-green-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition text-sm">
          Hubungi Kami
        </a>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="hero" className="relative bg-gradient-to-br from-green-900 to-indigo-950 text-white py-24 px-6 md:px-12 flex flex-col items-center text-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-semibold mb-4 backdrop-blur-sm">
          Penerimaan Siswa Baru Baru Dibuka
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-tight">
          Membangun Generasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Unggul, Berkarakter</span> & Berteknologi
        </h1>
        <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
          Selamat datang di MI Bungung Barana. Kami berkomitmen menyediakan ekosistem belajar terbaik demi mencetak pemimpin masa depan yang kompetitif secara global.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#kontak" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition text-center">
            Daftar Sekarang
          </a>
          <a href="#fasilitas" className="bg-white/10 hover:bg-white/10 text-white border border-white/20 font-semibold px-8 py-3.5 rounded-xl backdrop-blur-sm transition text-center">
            Jelajahi Fasilitas
          </a>
        </div>
      </section>

      {/* 3. FASILITAS SECTION */}
      <section id="fasilitas" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Fasilitas Unggulan Modern</h2>
          <p className="mt-4 text-slate-600">Sarana pendukung belajar mengajar terlengkap untuk menunjang potensi akademik dan non-akademik siswa.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">🔬</div>
            <h3 className="text-xl font-bold text-slate-950 mb-3">Laboratorium Modern</h3>
            <p className="text-slate-600 leading-relaxed">Laboratorium Fisika, Kimia, Biologi, dan Komputer lengkap dengan alat peraga berbasis teknologi terbaru.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">📚</div>
            <h3 className="text-xl font-bold text-slate-950 mb-3">Perpustakaan Digital</h3>
            <p className="text-slate-600 leading-relaxed">Akses ke ribuan koleksi buku fisik serta e-book lokal maupun internasional yang nyaman dan ber-AC.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">⚽</div>
            <h3 className="text-xl font-bold text-slate-950 mb-3">Fasilitas Olahraga</h3>
            <p className="text-slate-600 leading-relaxed">Lapangan sepak bola, basket, voli indoor, serta lintasan atletik terstandarisasi untuk kesehatan siswa.</p>
          </div>
        </div>
      </section>

      {/* 4. EKSTRAKURIKULER SECTION */}
      <section id="ekskul" className="py-20 bg-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ekstrakurikuler</h2>
            <p className="mt-4 text-slate-600">Wadah bagi siswa untuk mengeksplorasi minat, mengasah bakat, dan membangun jiwa kepemimpinan.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Pramuka & PMR', 'Paskibraka', 'Klub Robotik & IT', 'Basket & Futsal', 'Paduan Suara & Seni', 'English Debate Club', 'Kerohanian (Rohis/Rokris)', 'Jurnalistik & Fotografi'].map((ekskul, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200/60 font-semibold text-center text-slate-800 shadow-sm flex items-center justify-center">
                {ekskul}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER & KONTAK */}
      <footer id="kontak" className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">MI Bungung Barana</h3>
            <p className="text-sm leading-relaxed">Madrasah Ibtidaiyah percontohan yang berkomitmen tinggi menghadirkan pendidikan berkualitas di era modern.</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hubungi Kami</h3>
            <p className="text-sm leading-relaxed">
              📍 Bungung Barana, desa Tuju, kec. bangakala barat<br />
              📞 -<br />
              ✉️ -
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Tautan</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#hero" className="hover:text-white transition">Kembali ke Atas</a>
              <a href="#fasilitas" className="hover:text-white transition">Fasilitas Sekolah</a>
              <a href="#ekskul" className="hover:text-white transition">Ekstrakurikuler</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} MI Bungung Barana. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
