export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  department?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dharma Wijaya",
    role: "Ketua Umum",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Memimpin Permuridhis dengan visi menyebarkan nilai-nilai Buddha di lingkungan kampus UNRI. Aktif dalam kegiatan dharma dan pelayanan masyarakat.",
    email: "ketua@permuridhis.org",
    department: "Teknik Elektro"
  },
  {
    id: "2",
    name: "Sari Kusuma",
    role: "Wakil Ketua",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Mendukung kepemimpinan organisasi dan mengkoordinasi program-program keagamaan serta kegiatan sosial kemasyarakatan.",
    email: "wakil@permuridhis.org",
    department: "Psikologi"
  },
  {
    id: "3",
    name: "Budi Santoso",
    role: "Sekretaris",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Mengelola administrasi organisasi dan dokumentasi kegiatan. Bertanggung jawab atas komunikasi internal dan eksternal.",
    email: "sekretaris@permuridhis.org",
    department: "Administrasi Bisnis"
  },
  {
    id: "4",
    name: "Maya Dewi",
    role: "Bendahara",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Mengelola keuangan organisasi dengan transparansi dan akuntabilitas. Mengkoordinasi penggalangan dana untuk kegiatan sosial.",
    email: "bendahara@permuridhis.org",
    department: "Akuntansi"
  },
  {
    id: "5",
    name: "Andi Wijaya",
    role: "Koordinator Kegiatan",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Merencanakan dan melaksanakan berbagai kegiatan dharma, retreat, dan program pengembangan spiritual anggota.",
    email: "kegiatan@permuridhis.org",
    department: "Manajemen"
  },
  {
    id: "6",
    name: "Lisa Maharani",
    role: "Koordinator Humas",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Menjalin hubungan dengan organisasi Buddha lainnya dan mengelola komunikasi publik melalui media sosial dan website.",
    email: "humas@permuridhis.org",
    department: "Komunikasi"
  },
  {
    id: "7",
    name: "Putu Wayan",
    role: "Koordinator Dana",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Mengkoordinasi program dana (sumbangan) untuk kegiatan sosial dan bantuan kepada sesama, terutama dalam situasi darurat.",
    email: "dana@permuridhis.org",
    department: "Ekonomi"
  },
  {
    id: "8",
    name: "Kadek Ayu",
    role: "Koordinator Kebaktian",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Memimpin pelaksanaan kebaktian rutin, retreat spiritual, dan program pembelajaran dharma untuk anggota dan masyarakat umum.",
    email: "kebaktian@permuridhis.org",
    department: "Filsafat"
  }
];