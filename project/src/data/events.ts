export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'dharma' | 'retreat' | 'social' | 'ceremony';
  image: string;
}

export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Dharma Talk Mingguan",
    date: "2025-01-15",
    time: "19:00 - 21:00",
    location: "Ruang Serbaguna UNRI",
    description: "Diskusi mendalam tentang ajaran Buddha dan penerapannya dalam kehidupan sehari-hari. Terbuka untuk semua kalangan.",
    category: 'dharma',
    image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "2", 
    title: "Retreat Meditasi Weekend",
    date: "2025-01-25",
    time: "08:00 - 17:00",
    location: "Vihara Ekayana, Pekanbaru",
    description: "Program retreat intensif dengan fokus pada praktik meditasi vipassana dan metta bhavana.",
    category: 'retreat',
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "3",
    title: "Bakti Sosial & Pembagian Sembako",
    date: "2025-02-01",
    time: "08:00 - 12:00", 
    location: "Kelurahan Simpang Tiga",
    description: "Kegiatan bakti sosial membagikan sembako kepada masyarakat kurang mampu sebagai wujud karuna (welas asih).",
    category: 'social',
    image: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "4",
    title: "Perayaan Waisak",
    date: "2025-05-12",
    time: "06:00 - 22:00",
    location: "Vihara Ekayana, Pekanbaru", 
    description: "Perayaan Hari Raya Waisak dengan prosesi, dharma talk, dan kegiatan budaya Buddha.",
    category: 'ceremony',
    image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "5",
    title: "Workshop Mindfulness untuk Mahasiswa",
    date: "2025-02-15",
    time: "14:00 - 17:00",
    location: "Gedung Kuliah UNRI",
    description: "Workshop praktis tentang teknik mindfulness untuk mengatasi stres akademik dan meningkatkan fokus belajar.",
    category: 'dharma',
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];