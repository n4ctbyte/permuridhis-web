export const buddhistQuotes = [
  {
    text: "Kebahagiaan tidak tergantung pada apa yang Anda miliki atau siapa Anda. Itu hanya tergantung pada apa yang Anda pikirkan.",
    author: "Buddha"
  },
  {
    text: "Pikiran adalah segalanya. Apa yang Anda pikirkan, Anda menjadi.",
    author: "Buddha"
  },
  {
    text: "Kedamaian datang dari dalam. Jangan mencarinya di luar.",
    author: "Buddha"
  },
  {
    text: "Tiga hal tidak dapat disembunyikan: matahari, bulan, dan kebenaran.",
    author: "Buddha"
  },
  {
    text: "Jangan percaya pada apa yang Anda dengar. Jangan percaya pada tradisi karena mereka telah diturunkan selama berabad-abad. Tetapi setelah observasi dan analisis, ketika Anda menemukan bahwa sesuatu setuju dengan alasan dan kondusif untuk kebaikan dan keuntungan satu dan semua, maka terima dan hiduplah.",
    author: "Buddha"
  },
  {
    text: "Kebencian tidak pernah berhenti dengan kebencian, tetapi dengan cinta saja mereka berhenti.",
    author: "Buddha"
  },
  {
    text: "Lebih baik menaklukkan diri sendiri daripada memenangkan seribu pertempuran.",
    author: "Buddha"
  },
  {
    text: "Jalan bukanlah di langit. Jalan ada di dalam hati.",
    author: "Buddha"
  },
  {
    text: "Kesehatan adalah hadiah terbesar, kepuasan adalah kekayaan terbesar.",
    author: "Buddha"
  },
  {
    text: "Jika Anda ingin mengetahui masa lalu Anda, lihat kondisi Anda saat ini. Jika Anda ingin mengetahui masa depan, lihat tindakan Anda saat ini.",
    author: "Buddha"
  },
  {
    text: "Ribuan lilin dapat dinyalakan dari satu lilin, dan kehidupan lilin tidak akan diperpendek. Kebahagiaan tidak pernah berkurang dengan dibagikan.",
    author: "Buddha"
  },
  {
    text: "Tidak ada api seperti nafsu, tidak ada hiu seperti kebencian, tidak ada jerat seperti kebodohan, tidak ada sungai yang mengalir deras seperti keserakahan.",
    author: "Buddha"
  },
  {
    text: "Apa yang kita pikirkan hari ini, kita akan menciptakan hari esok.",
    author: "Buddha"
  },
  {
    text: "Jangan hidup di masa lalu, jangan bermimpi tentang masa depan, konsentrasilah pikiran pada saat sekarang.",
    author: "Buddha"
  },
  {
    text: "Cinta kasih dan kasih sayang adalah kebutuhan, bukan kemewahan. Tanpa mereka umat manusia tidak dapat bertahan hidup.",
    author: "Dalai Lama"
  },
  {
    text: "Agama saya sangat sederhana. Agama saya adalah kebaikan.",
    author: "Dalai Lama"
  },
  {
    text: "Jadilah orang yang baik di mana pun Anda berada, dan itu saja sudah cukup.",
    author: "Dalai Lama"
  },
  {
    text: "Kebahagiaan sejati tidak bergantung pada kondisi eksternal; itu berasal dari kedamaian batin.",
    author: "Dalai Lama"
  },
  {
    text: "Jika Anda ingin orang lain bahagia, berlatihlah welas asih. Jika Anda ingin bahagia, berlatihlah welas asih.",
    author: "Dalai Lama"
  },
  {
    text: "Tujuan hidup kita adalah untuk menjadi bahagia.",
    author: "Dalai Lama"
  },
  {
    text: "Kemarahan tidak dapat diatasi dengan kemarahan. Jika seseorang marah kepada Anda, dan Anda marah sebagai balasannya, hasilnya adalah bencana.",
    author: "Dalai Lama"
  },
  {
    text: "Kesabaran adalah antidot terkuat terhadap kemarahan.",
    author: "Dalai Lama"
  },
  {
    text: "Setiap pagi ketika kita bangun, kita memiliki dua puluh empat jam baru di depan kita. Kita dapat hidup dalam cara yang damai, penuh kasih, dan welas asih, atau kita dapat membuat diri kita menderita.",
    author: "Thich Nhat Hanh"
  },
  {
    text: "Napas adalah jembatan yang menghubungkan kehidupan dan kesadaran, yang menyatukan tubuh dan pikiran Anda.",
    author: "Thich Nhat Hanh"
  },
  {
    text: "Kita harus belajar untuk beristirahat, bukan hanya tubuh kita tetapi juga pikiran kita.",
    author: "Thich Nhat Hanh"
  },
  {
    text: "Berjalanlah seolah-olah Anda mencium bumi dengan kaki Anda.",
    author: "Thich Nhat Hanh"
  },
  {
    text: "Masa sekarang adalah satu-satunya waktu di mana kita benar-benar hidup.",
    author: "Thich Nhat Hanh"
  },
  {
    text: "Senyuman Anda adalah hadiah kasih sayang kepada dunia.",
    author: "Thich Nhat Hanh"
  },
  {
    text: "Keajaiban bukan berjalan di atas air. Keajaiban adalah berjalan di atas bumi hijau, tinggal di saat sekarang dan menghargai keindahan dan kedamaian yang tersedia sekarang.",
    author: "Thich Nhat Hanh"
  },
  {
    text: "Untuk mencintai tanpa mengenal kondisi, untuk berbicara tanpa tujuan, untuk melayani tanpa alasan - ini adalah kebahagiaan spiritual sejati.",
    author: "Lao Tzu"
  }
];

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * buddhistQuotes.length);
  return buddhistQuotes[randomIndex];
};

export const getDailyQuote = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const quoteIndex = dayOfYear % buddhistQuotes.length;
  return buddhistQuotes[quoteIndex];
};