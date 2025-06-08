export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  category: 'university' | 'temple' | 'organization' | 'sponsor';
}

export const partners: Partner[] = [
  {
    id: "1",
    name: "Universitas Riau",
    logo: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    website: "https://unri.ac.id",
    description: "Universitas induk yang memberikan dukungan penuh terhadap kegiatan keagamaan mahasiswa",
    category: 'university'
  },
  {
    id: "2", 
    name: "Vihara Ekayana Pekanbaru",
    logo: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    website: "#",
    description: "Vihara mitra dalam kegiatan dharma dan spiritual guidance",
    category: 'temple'
  },
  {
    id: "3",
    name: "Majelis Buddhayana Indonesia",
    logo: "https://images.pexels.com/photos/4160111/pexels-photo-4160111.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop", 
    website: "https://buddhayana.or.id",
    description: "Organisasi Buddha nasional yang memberikan guidance dan dukungan program",
    category: 'organization'
  },
  {
    id: "4",
    name: "Buddhist Youth Network",
    logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    website: "#",
    description: "Jaringan pemuda Buddha se-Indonesia untuk kolaborasi kegiatan",
    category: 'organization'
  },
  {
    id: "5",
    name: "Tzu Chi Foundation",
    logo: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    website: "https://tzuchi.or.id", 
    description: "Mitra dalam kegiatan sosial dan kemanusiaan",
    category: 'sponsor'
  },
  {
    id: "6",
    name: "STAB Kertarajasa",
    logo: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    website: "#",
    description: "Sekolah Tinggi Agama Buddha yang memberikan support akademis dharma",
    category: 'university'
  }
];