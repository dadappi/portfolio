export const profile = {
  name: "Dhafi Ibrohim",
  title: "Pelajar SMAN 48 Jakarta | Aspiring Developer",
  photo: "/profile.jpg",
  shortBio: "Lahir di Jakarta, 10 Juni 2010. Masih duduk di bangku SMA tapi sudah mulai bikin project nyata.",
  contact: {
    email: "dhafiibrohim7@gmail.com",
    github: "https://github.com/dadappi",
    linkedin: "https://linkedin.com/in/dhafi-ibrohim",
    twitter: "https://twitter.com/dadappi"
  }
};

export const experience = [
  {
    role: "📝 Siswa SMA — Jurusan IPA",
    institution: "SMAN 48 Jakarta",
    period: "2025 – Sekarang (Kelas 11, TA 2026/2027)",
    description: "Pendidikan formal sambil eksplorasi mandiri dunia programming.",
    achievements: [
      "Aktif mencari peluang belajar di luar kurikulum",
      "Membangun portfolio project secara mandiri"
    ],
    techStack: ["Python", "C++", "Matematika Diskrit", "Algoritma Dasar"],
    links: [
      { label: "🏫 Profil SMAN 48", url: "https://sman48-jkt.sch.id" }
    ]
  },
  {
    role: "🏆 Peserta OSN Informatika",
    institution: "Kemdikbud / OSN",
    period: "2025 (Kelas 10, TA 2025/2026)",
    description: "Mengikuti Olimpiade Sains Nasional bidang Informatika.",
    achievements: [
      "Latihan soal algoritma & struktur data intensif",
      "Belajar manajemen waktu saat kompetisi",
      "Mengenal komunitas competitive programming"
    ],
    techStack: ["C++", "Python", "Algoritma", "Struktur Data", "CP"],
    links: []
  },
  {
    role: "🎓 Beasiswa UOB My Digital Space",
    institution: "UOB Indonesia x Ruangguru",
    period: "2025 – 2026 (Kelas 10, TA 2025/2026)",
    description: "Program beasiswa digital selama 1 tahun untuk belajar fundamental programming.",
    achievements: [
      "Menyelesaikan 1 tahun program beasiswa penuh",
      "Project akhir: Aplikasi manajemen keuangan pribadi (Python)",
      "Mendapatkan sertifikat kelulusan"
    ],
    techStack: ["Python", "HTML/CSS/JS", "Git", "Database Dasar", "Figma"],
    links: []
  }
];

export const hobbies = [
  {
    name: "Fotografi",
    icon: "camera",
    description: "Mengabadikan momen lewat kamera — street, landscape, atau sekadar dokumentasi harian.",
    details: "Kamera: Canon SX510HS. Fokus pada komposisi & lighting natural.",
    images: [],
    links: []
  },
  {
    name: "Nonton Film & Series",
    icon: "film",
    description: "Sci-fi, thriller, dokumenter tech, hingga anime.",
    details: "Genre favorit: Sci-fi, Thriller, Dokumenter tentang teknologi.",
    images: [],
    links: []
  },
  {
    name: "Baca Artikel Teknis",
    icon: "book-open",
    description: "Artikel Medium, Dev.to, dokumentasi resmi, hingga paper riset.",
    details: "Topik favorit: AI/LLM engineering, systems programming, competitive programming.",
    images: [],
    links: []
  }
];

export const projects = [
  {
    name: "💰 Aplikasi Keuangan Pribadi (Python)",
    description: "Project akhir beasiswa UOB My Digital Space. CLI/GUI app buat tracking pengeluaran & budgeting.",
    techStack: ["Python", "SQLite", "Matplotlib/Plotly", "Pandas"],
    linkDemo: "https://colab.research.google.com/drive/1CuCOC3B7G55vdKWO9I9Ls4c-cXMDxvrj?usp=sharing",
    linkGithub: "",
    image: "/project-finance.jpg",
    images: [],
    details: "Fitur: input expense/income, kategori custom, laporan bulanan, grafik pengeluaran."
  },
  {
    name: "🤖 Agent Hermes — WhatsApp Reminder Bot",
    description: "Bot WhatsApp otomatis pakai cron job buat reminder jadwal & tugas.",
    techStack: ["Python", "WhatsApp Web API", "Node.js", "Cron Jobs", "SQLite", "Docker"],
    linkDemo: "",
    linkGithub: "",
    image: "/project-hermes.jpg",
    images: [],
    details: "Arsitektur: Node.js handle WhatsApp connection, Python handle logic & scheduling via cron."
  },
  {
    name: "🧪 Eksperimen & Repo Lainnya",
    description: "Kumpulan project kecil, latihan algoritma, dan eksperimen tech baru di GitHub.",
    techStack: ["Python", "C++", "JavaScript", "Various"],
    linkDemo: "",
    linkGithub: "https://github.com/dadappi?tab=repositories",
    image: "/project-lab.jpg",
    images: [],
    details: "Repo menarik: CP template (C++), Python scripts, cloning UI, eksperimen LLM API."
  }
];

export const techStack = [
  {
    category: "Frontend",
    tools: [
      { name: "React", level: 50 },
      { name: "Tailwind CSS", level: 55 },
      { name: "JavaScript", level: 45 },
      { name: "Framer Motion", level: 40 }
    ]
  },
  {
    category: "Backend",
    tools: [
      { name: "Node.js", level: 45 },
      { name: "Python", level: 75 },
      { name: "Express", level: 40 },
      { name: "AsyncIO", level: 55 }
    ]
  },
  {
    category: "DevOps & Cloud",
    tools: [
      { name: "Docker", level: 35 },
      { name: "Git & GitHub", level: 70 },
      { name: "Linux Terminal", level: 60 },
      { name: "CI/CD Basics", level: 30 }
    ]
  },
  {
    category: "Tools & Others",
    tools: [
      { name: "Vite", level: 50 },
      { name: "VSCode", level: 70 },
      { name: "Figma", level: 40 },
      { name: "C++", level: 70 }
    ]
  }
];

export const milestones = [
  {
    year: "2010",
    title: "👶 Lahir di Jakarta",
    description: "Mulai perjalanan di dunia ini. 10 Juni 2010."
  },
  {
    year: "2025",
    title: "🏫 Masuk SMAN 48 Jakarta",
    description: "Memulai pendidikan menengah di salah satu SMA favorit Jakarta. Jurusan IPA."
  },
  {
    year: "2025",
    title: "🏆 OSN Informatika (Kelas 10)",
    description: "Ikut OSN Informatika. Pengalaman berharga untuk problem solving & algoritma."
  },
  {
    year: "2025",
    title: "🎓 Beasiswa UOB My Digital Space",
    description: "Diterima beasiswa UOB My Digital Space 1 tahun penuh. Belajar fundamental programming."
  },
  {
    year: "2026",
    title: "💰 Project Finance App (Python)",
    description: "Project akhir beasiswa UOB: aplikasi manajemen keuangan pribadi full-stack Python."
  },
  {
    year: "2026",
    title: "🤖 Agent Hermes — WhatsApp Bot",
    description: "Bangun bot WhatsApp reminder pakai cron job & Python/Node.js. Deploy ke VPS pakai Docker."
  },
  {
    year: "2026",
    title: "🌐 Portfolio Website Live",
    description: "Bangun portfolio dari nol belajar React, Tailwind v4, Framer Motion."
  },
  {
    year: "2027 (Target)",
    title: "🎓 Lulus SMA & Mulai Karier Tech",
    description: "Target lulus SMA & lanjut kuliah (Informatika) sambil mulai kerja part-time sebagai Junior Developer."
  }
];
