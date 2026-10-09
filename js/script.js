/* =========================================================
   Interactive Quiz App - 50+ Pertanyaan
   ========================================================= */

// =========================================================
// BANK SOAL — 50 Pertanyaan
// =========================================================
const QUESTIONS = [
  // ============ JavaScript (15) ============
  {
    category: "JavaScript",
    difficulty: "easy",
    question: "Manakah yang BUKAN tipe data primitif di JavaScript?",
    options: ["String", "Number", "Object", "Boolean"],
    answer: 2,
    explanation: "Object adalah tipe data non-primitif (reference type).",
  },
  {
    category: "JavaScript",
    difficulty: "medium",
    question: "Apa hasil dari typeof null di JavaScript?",
    options: ["'null'", "'object'", "'undefined'", "'number'"],
    answer: 1,
    explanation: "Ini bug lama JavaScript yang tidak bisa diperbaiki karena alasan kompatibilitas.",
  },
  {
    category: "JavaScript",
    difficulty: "easy",
    question: "Method array mana yang menghasilkan array baru dari setiap item?",
    options: ["forEach()", "map()", "find()", "push()"],
    answer: 1,
    explanation: "map() mengembalikan array baru dengan panjang yang sama.",
  },
  {
    category: "JavaScript",
    difficulty: "medium",
    question: "Apa perbedaan let dan var?",
    options: [
      "Tidak ada perbedaan",
      "let block scope, var function scope",
      "var lebih cepat",
      "let hanya untuk angka",
    ],
    answer: 1,
    explanation: "let dan const memiliki block scope, sedangkan var function scope.",
  },
  {
    category: "JavaScript",
    difficulty: "hard",
    question: "Apa hasil dari 0.1 + 0.2 === 0.3 di JavaScript?",
    options: ["true", "false", "undefined", "error"],
    answer: 1,
    explanation: "Karena floating point precision, hasilnya 0.30000000000000004.",
  },
  {
    category: "JavaScript",
    difficulty: "medium",
    question: "Method apa untuk mengubah JSON string menjadi object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.decode()"],
    answer: 1,
    explanation: "JSON.parse() mengubah string JSON menjadi object JavaScript.",
  },
  {
    category: "JavaScript",
    difficulty: "hard",
    question: "Apa itu closure di JavaScript?",
    options: [
      "Fungsi yang menutup file",
      "Fungsi yang memiliki akses ke scope luarnya",
      "Loop yang tidak berhenti",
      "Cara menutup browser",
    ],
    answer: 1,
    explanation: "Closure memungkinkan fungsi dalam mengakses variabel dari fungsi luar.",
  },
  {
    category: "JavaScript",
    difficulty: "easy",
    question: "Apa itu const di JavaScript?",
    options: [
      "Variabel yang bisa diubah",
      "Variabel yang nilainya tidak bisa di-reassign",
      "Tipe data khusus",
      "Fungsi bawaan",
    ],
    answer: 1,
    explanation: "const membuat variabel yang tidak bisa di-reassign setelah dideklarasikan.",
  },
  {
    category: "JavaScript",
    difficulty: "medium",
    question: "Apa fungsi dari addEventListener?",
    options: [
      "Menambahkan elemen baru",
      "Menangani event pada elemen",
      "Menghapus elemen",
      "Mengubah style",
    ],
    answer: 1,
    explanation: "addEventListener menempelkan handler untuk event tertentu pada elemen.",
  },
  {
    category: "JavaScript",
    difficulty: "hard",
    question: "Apa hasil dari [1,2,3].reduce((a,b)=>a+b, 0)?",
    options: ["123", "6", "1", "Error"],
    answer: 1,
    explanation: "reduce menjumlahkan semua elemen: 1+2+3 = 6.",
  },
  {
    category: "JavaScript",
    difficulty: "medium",
    question: "Apa perbedaan == dan === ?",
    options: [
      "Tidak ada perbedaan",
      "== membandingkan nilai, === nilai + tipe",
      "=== lebih lambat",
      "== hanya untuk angka",
    ],
    answer: 1,
    explanation: "=== membandingkan nilai dan tipe data (strict equality).",
  },
  {
    category: "JavaScript",
    difficulty: "easy",
    question: "Bagaimana cara mendeklarasikan fungsi di JavaScript?",
    options: ["function myFunc() {}", "def myFunc() {}", "func myFunc() {}", "fn myFunc() {}"],
    answer: 0,
    explanation: "JavaScript menggunakan keyword function.",
  },
  {
    category: "JavaScript",
    difficulty: "medium",
    question: "Apa itu promise di JavaScript?",
    options: [
      "Janji untuk membayar",
      "Object untuk operasi asynchronous",
      "Tipe data primitif",
      "Method array",
    ],
    answer: 1,
    explanation: "Promise adalah object yang merepresentasikan hasil operasi async.",
  },
  {
    category: "JavaScript",
    difficulty: "hard",
    question: "Apa hasil dari '5' + 3 di JavaScript?",
    options: ["8", "53", "NaN", "Error"],
    answer: 1,
    explanation: "Karena '5' adalah string, operasi + melakukan konkatenasi: '53'.",
  },
  {
    category: "JavaScript",
    difficulty: "medium",
    question: "Method array apa untuk menyaring elemen?",
    options: ["filter()", "map()", "reduce()", "push()"],
    answer: 0,
    explanation: "filter() mengembalikan array baru dengan elemen yang lolos kondisi.",
  },

  // ============ CSS (10) ============
  {
    category: "CSS",
    difficulty: "easy",
    question: "Properti CSS untuk membuat layout grid adalah?",
    options: ["display: flex", "display: grid", "position: absolute", "float: left"],
    answer: 1,
    explanation: "display: grid mengaktifkan CSS Grid Layout pada elemen.",
  },
  {
    category: "CSS",
    difficulty: "medium",
    question: "Apa fungsi dari z-index?",
    options: [
      "Mengatur ukuran font",
      "Mengatur urutan tumpukan elemen",
      "Mengatur warna",
      "Mengatur margin",
    ],
    answer: 1,
    explanation: "z-index mengontrol urutan tumpukan elemen yang di-position.",
  },
  {
    category: "CSS",
    difficulty: "easy",
    question: "Bagaimana cara membuat teks miring di CSS?",
    options: ["font-style: italic", "text-style: italic", "font-weight: italic", "text-decoration: italic"],
    answer: 0,
    explanation: "font-style: italic membuat teks miring.",
  },
  {
    category: "CSS",
    difficulty: "hard",
    question: "Apa perbedaan :nth-child dan :nth-of-type?",
    options: [
      "Tidak ada perbedaan",
      ":nth-child hitung semua anak, :nth-of-type hanya tipe sama",
      ":nth-of-type lebih cepat",
      ":nth-child hanya untuk angka",
    ],
    answer: 1,
    explanation: ":nth-of-type hanya menghitung elemen dengan tipe/tag yang sama.",
  },
  {
    category: "CSS",
    difficulty: "easy",
    question: "Properti apa untuk mengubah warna latar belakang?",
    options: ["color", "background-color", "bg-color", "fill-color"],
    answer: 1,
    explanation: "background-color mengubah warna latar belakang elemen.",
  },
  {
    category: "CSS",
    difficulty: "medium",
    question: "Apa fungsi dari flex-wrap?",
    options: [
      "Membuat teks wrap",
      "Mengizinkan flex item pindah baris",
      "Mengubah warna",
      "Menambah border",
    ],
    answer: 1,
    explanation: "flex-wrap: wrap memungkinkan flex item pindah ke baris berikutnya.",
  },
  {
    category: "CSS",
    difficulty: "medium",
    question: "Apa satuan relatif terhadap font-size root?",
    options: ["px", "em", "rem", "pt"],
    answer: 2,
    explanation: "rem = root em, relatif terhadap font-size elemen html.",
  },
  {
    category: "CSS",
    difficulty: "hard",
    question: "Apa fungsi dari will-change di CSS?",
    options: [
      "Mengubah warna",
      "Memberi hint browser untuk optimasi animasi",
      "Menambah border",
      "Mengubah font",
    ],
    answer: 1,
    explanation: "will-change memberi tahu browser properti apa yang akan berubah.",
  },
  {
    category: "CSS",
    difficulty: "easy",
    question: "Properti untuk mengatur jarak dalam elemen?",
    options: ["margin", "padding", "border", "gap"],
    answer: 1,
    explanation: "padding mengatur jarak dalam elemen (antara konten dan border).",
  },
  {
    category: "CSS",
    difficulty: "medium",
    question: "Apa itu pseudo-class di CSS?",
    options: [
      "Class palsu",
      "Keyword untuk state khusus elemen",
      "Class dengan nama unik",
      "Class untuk animasi",
    ],
    answer: 1,
    explanation: "Pseudo-class seperti :hover, :focus menargetkan state elemen.",
  },

  // ============ HTML (8) ============
  {
    category: "HTML",
    difficulty: "easy",
    question: "Tag HTML yang tepat untuk navigasi utama adalah?",
    options: ["<aside>", "<section>", "<nav>", "<footer>"],
    answer: 2,
    explanation: "<nav> adalah elemen semantik untuk navigasi.",
  },
  {
    category: "HTML",
    difficulty: "easy",
    question: "Tag apa untuk membuat link?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 1,
    explanation: "<a> (anchor) digunakan untuk hyperlink.",
  },
  {
    category: "HTML",
    difficulty: "medium",
    question: "Apa fungsi atribut alt pada tag img?",
    options: [
      "Mengatur ukuran gambar",
      "Teks alternatif jika gambar gagal dimuat",
      "Mengatur posisi gambar",
      "Menambahkan border",
    ],
    answer: 1,
    explanation: "alt memberikan deskripsi teks untuk aksesibilitas.",
  },
  {
    category: "HTML",
    difficulty: "medium",
    question: "Tag HTML5 untuk video adalah?",
    options: ["<media>", "<video>", "<movie>", "<film>"],
    answer: 1,
    explanation: "<video> adalah tag HTML5 untuk memutar video.",
  },
  {
    category: "HTML",
    difficulty: "hard",
    question: "Apa perbedaan <section> dan <div>?",
    options: [
      "Tidak ada perbedaan",
      "<section> elemen semantik, <div> generik",
      "<div> lebih cepat",
      "<section> hanya untuk teks",
    ],
    answer: 1,
    explanation: "<section> memiliki makna semantik, <div> hanya kontainer generik.",
  },
  {
    category: "HTML",
    difficulty: "easy",
    question: "Tag untuk membuat heading terbesar?",
    options: ["<h6>", "<h1>", "<head>", "<header>"],
    answer: 1,
    explanation: "<h1> adalah heading terbesar.",
  },
  {
    category: "HTML",
    difficulty: "medium",
    question: "Apa fungsi dari <form>?",
    options: [
      "Menampilkan gambar",
      "Mengumpulkan input dari user",
      "Membuat tabel",
      "Membuat list",
    ],
    answer: 1,
    explanation: "<form> digunakan untuk mengumpulkan data dari user.",
  },
  {
    category: "HTML",
    difficulty: "hard",
    question: "Apa itu DOCTYPE html?",
    options: [
      "Nama file",
      "Deklarasi tipe dokumen HTML5",
      "Tag HTML",
      "Atribut",
    ],
    answer: 1,
    explanation: "DOCTYPE memberitahu browser untuk render dalam mode standar.",
  },

  // ============ Umum (10) ============
  {
    category: "Umum",
    difficulty: "easy",
    question: "Apa kepanjangan HTML?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlink Text Mark Language",
    ],
    answer: 0,
    explanation: "HTML = HyperText Markup Language.",
  },
  {
    category: "Umum",
    difficulty: "medium",
    question: "Siapa pencipta JavaScript?",
    options: ["Bill Gates", "Brendan Eich", "Linus Torvalds", "Mark Zuckerberg"],
    answer: 1,
    explanation: "Brendan Eich menciptakan JavaScript pada tahun 1995.",
  },
  {
    category: "Umum",
    difficulty: "medium",
    question: "Apa itu API?",
    options: [
      "Aplikasi Pembuat Internet",
      "Application Programming Interface",
      "Advanced Program Integration",
      "Automatic Program Installer",
    ],
    answer: 1,
    explanation: "API = Application Programming Interface.",
  },
  {
    category: "Umum",
    difficulty: "easy",
    question: "Apa itu URL?",
    options: [
      "Uniform Resource Locator",
      "Universal Reference Link",
      "United Resource Line",
      "User Registered Link",
    ],
    answer: 0,
    explanation: "URL = Uniform Resource Locator, alamat sebuah resource di web.",
  },
  {
    category: "Umum",
    difficulty: "medium",
    question: "Apa itu HTTP?",
    options: [
      "HyperText Transfer Protocol",
      "High Tech Transfer Process",
      "Hyperlink Test Transfer Protocol",
      "Host Transfer Text Protocol",
    ],
    answer: 0,
    explanation: "HTTP = HyperText Transfer Protocol, protokol untuk transfer data web.",
  },
  {
    category: "Umum",
    difficulty: "easy",
    question: "Apa itu browser?",
    options: [
      "Program untuk browsing internet",
      "Program untuk edit gambar",
      "Program untuk musik",
      "Program untuk game",
    ],
    answer: 0,
    explanation: "Browser adalah software untuk mengakses dan menampilkan halaman web.",
  },
  {
    category: "Umum",
    difficulty: "medium",
    question: "Apa itu open source?",
    options: [
      "Software berbayar",
      "Software dengan kode sumber terbuka",
      "Software yang tidak bisa diubah",
      "Software perusahaan",
    ],
    answer: 1,
    explanation: "Open source = kode sumber bisa dilihat, dimodifikasi, dan didistribusikan.",
  },
  {
    category: "Umum",
    difficulty: "hard",
    question: "Apa itu DNS?",
    options: [
      "Domain Name System",
      "Data Network System",
      "Direct Network Server",
      "Digital Network Service",
    ],
    answer: 0,
    explanation: "DNS = Domain Name System, menerjemahkan nama domain ke IP address.",
  },
  {
    category: "Umum",
    difficulty: "easy",
    question: "Apa itu responsive design?",
    options: [
      "Design yang mahal",
      "Design yang menyesuaikan ukuran layar",
      "Design minimalis",
      "Design berwarna",
    ],
    answer: 1,
    explanation: "Responsive design menyesuaikan tampilan dengan ukuran layar perangkat.",
  },
  {
    category: "Umum",
    difficulty: "medium",
    question: "Apa itu framework?",
    options: [
      "Kerangka kerja untuk mempermudah development",
      "Bahasa pemrograman",
      "Sistem operasi",
      "Database",
    ],
    answer: 0,
    explanation: "Framework menyediakan struktur dan fungsi siap pakai untuk development.",
  },

  // ============ Logika (7) ============
  {
    category: "Logika",
    difficulty: "medium",
    question: "Jika 5 mesin membuat 5 produk dalam 5 menit, berapa menit 100 mesin membuat 100 produk?",
    options: ["5 menit", "20 menit", "100 menit", "500 menit"],
    answer: 0,
    explanation: "Setiap mesin membuat 1 produk dalam 5 menit, jadi 100 mesin membuat 100 produk dalam 5 menit.",
  },
  {
    category: "Logika",
    difficulty: "hard",
    question: "Lanjutkan pola: 2, 6, 12, 20, 30, ...",
    options: ["40", "42", "44", "46"],
    answer: 1,
    explanation: "Selisih bertambah 4, 6, 8, 10, 12 → 30 + 12 = 42.",
  },
  {
    category: "Logika",
    difficulty: "hard",
    question: "Jika A=1, B=2, ..., Z=26, nilai dari 'CAB' adalah?",
    options: ["6", "12", "312", "6 (3+1+2)"],
    answer: 3,
    explanation: "C=3, A=1, B=2, jumlah = 6.",
  },
  {
    category: "Logika",
    difficulty: "medium",
    question: "Ayah Budi punya 5 anak: Aa, Ii, Uu, Ee, dan siapa?",
    options: ["Oo", "Budi", "Anak kelima", "Tidak ada"],
    answer: 1,
    explanation: "Anak kelima adalah Budi, karena disebut 'Ayah Budi'.",
  },
  {
    category: "Logika",
    difficulty: "hard",
    question: "Sebuah buku berharga Rp 50.000 ditambah setengah harganya. Berapa harganya?",
    options: ["Rp 75.000", "Rp 100.000", "Rp 50.000", "Rp 25.000"],
    answer: 1,
    explanation: "x = 50.000 + x/2 → x/2 = 50.000 → x = 100.000.",
  },
  {
    category: "Logika",
    difficulty: "medium",
    question: "Berapakah 7 x 8?",
    options: ["54", "56", "58", "48"],
    answer: 1,
    explanation: "7 x 8 = 56.",
  },
  {
    category: "Logika",
    difficulty: "hard",
    question: "Lanjutkan: 1, 1, 2, 3, 5, 8, ...",
    options: ["10", "11", "12", "13"],
    answer: 3,
    explanation: "Ini deret Fibonacci: 5 + 8 = 13.",
  },
];

const HIGH_SCORE_KEY = "interactive_quiz_highscore";
const LEADERBOARD_KEY = "interactive_quiz_leaderboard";
const THEME_KEY = "interactive_quiz_theme";
const TIMER_CIRCUMFERENCE = 125.66;
const RING_CIRCUMFERENCE = 326.7;
const QUESTIONS_PER_GAME = 5;
const MAX_LEADERBOARD = 5;

// =========================================================
// DOM ELEMENTS
// =========================================================
const elements = {
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
  startButton: document.getElementById("start-btn"),
  restartButton: document.getElementById("restart-btn"),
  homeButton: document.getElementById("home-btn"),
  leaderboardBtn: document.getElementById("leaderboard-btn"),
  themeToggle: document.getElementById("theme-toggle"),
  themeIcon: document.querySelector(".theme-icon"),
  startTotalQuestions: document.getElementById("start-total-q"),
  startTime: document.getElementById("start-time"),
  startHighScore: document.getElementById("start-highscore"),
  questionCategory: document.getElementById("question-category"),
  questionDifficulty: document.getElementById("question-difficulty"),
  currentQuestion: document.getElementById("q-current"),
  questionTotal: document.getElementById("q-total"),
  progressBar: document.getElementById("progress-bar"),
  timerCircle: document.getElementById("timer-circle"),
  timerProgress: document.getElementById("timer-progress"),
  timerText: document.getElementById("timer-text"),
  liveScore: document.getElementById("live-score"),
  liveStreak: document.getElementById("live-streak"),
  streakLive: document.getElementById("streak-live"),
  questionText: document.getElementById("question-text"),
  options: document.getElementById("options-container"),
  feedback: document.getElementById("feedback"),
  feedbackIcon: document.getElementById("feedback-icon"),
  feedbackText: document.getElementById("feedback-text"),
  feedbackExplanation: document.getElementById("feedback-explanation"),
  nextButton: document.getElementById("next-btn"),
  fiftyBtn: document.getElementById("fifty-btn"),
  resultTitle: document.getElementById("result-title"),
  resultSubtitle: document.getElementById("result-subtitle"),
  ringProgress: document.getElementById("ring-progress"),
  resultPercent: document.getElementById("result-percent"),
  correct: document.getElementById("stat-correct"),
  wrong: document.getElementById("stat-wrong"),
  resultTotal: document.getElementById("stat-total"),
  resultScore: document.getElementById("stat-score"),
  highScoreBanner: document.getElementById("highscore-banner"),
  resultHighScore: document.getElementById("result-highscore"),
  reviewSection: document.getElementById("review-section"),
  reviewToggle: document.getElementById("review-toggle"),
  reviewArrow: document.getElementById("review-arrow"),
  reviewList: document.getElementById("review-list"),
  modal: document.getElementById("leaderboard-modal"),
  modalBackdrop: document.getElementById("modal-backdrop"),
  modalClose: document.getElementById("modal-close"),
  leaderboardList: document.getElementById("leaderboard-list"),
  clearLbBtn: document.getElementById("clear-lb-btn"),
};

// =========================================================
// STATE
// =========================================================
const state = {
  questionIndex: 0,
  score: 0,
  correctAnswers: 0,
  streak: 0,
  maxStreak: 0,
  answered: false,
  timeLeft: 15,
  questionTime: 15,
  timerId: null,
  fiftyUsed: false,
  gameQuestions: [],
  answers: [],
  selectedCategory: "all",
  selectedDifficulty: "all",
  selectedTime: 15,
};

// =========================================================
// STORAGE
// =========================================================
const getHighScore = () => Number.parseInt(localStorage.getItem(HIGH_SCORE_KEY), 10) || 0;
const getLeaderboard = () => {
  try {
    const data = JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

const saveToLeaderboard = (entry) => {
  const list = getLeaderboard();
  list.push(entry);
  list.sort((a, b) => b.score - a.score);
  const trimmed = list.slice(0, MAX_LEADERBOARD);
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(trimmed));
};

const updateHighScoreLabels = () => {
  const hs = getHighScore();
  elements.startHighScore.textContent = hs;
  elements.resultHighScore.textContent = hs;
};

// =========================================================
// THEME
// =========================================================
const updateThemeIcon = () => {
  const isLight = document.documentElement.dataset.theme === "light";
  elements.themeIcon.textContent = isLight ? "☾" : "☀";
};

const loadTheme = () => {
  const saved = localStorage.getItem(THEME_KEY) || "dark";
  document.documentElement.dataset.theme = saved;
  updateThemeIcon();
};

elements.themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem(THEME_KEY, next);
  updateThemeIcon();
});

// =========================================================
// CHIP GROUPS
// =========================================================
const setupChipGroup = (groupId, callback) => {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    group.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === chip));
    callback(chip.dataset);
  });
};

setupChipGroup("category-group", (data) => {
  state.selectedCategory = data.category;
  updateStartInfo();
});

setupChipGroup("difficulty-group", (data) => {
  state.selectedDifficulty = data.difficulty;
  updateStartInfo();
});

setupChipGroup("time-group", (data) => {
  state.selectedTime = Number(data.time);
  state.questionTime = state.selectedTime;
  elements.startTime.textContent = `${state.selectedTime}s`;
});

// =========================================================
// START INFO
// =========================================================
const getFilteredQuestions = () => {
  let filtered = [...QUESTIONS];
  if (state.selectedCategory !== "all") {
    filtered = filtered.filter((q) => q.category === state.selectedCategory);
  }
  if (state.selectedDifficulty !== "all") {
    filtered = filtered.filter((q) => q.difficulty === state.selectedDifficulty);
  }
  return filtered;
};

const updateStartInfo = () => {
  const filtered = getFilteredQuestions();
  const count = Math.min(QUESTIONS_PER_GAME, filtered.length);
  elements.startTotalQuestions.textContent = count;
};

// =========================================================
// TIMER
// =========================================================
const resetTimer = () => {
  clearInterval(state.timerId);
  state.timeLeft = state.questionTime;
  elements.timerText.textContent = state.timeLeft;
  elements.timerProgress.style.strokeDashoffset = 0;
  elements.timerCircle.classList.remove("warning", "danger");
};

const startTimer = () => {
  resetTimer();
  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    elements.timerText.textContent = state.timeLeft;
    elements.timerProgress.style.strokeDashoffset =
      TIMER_CIRCUMFERENCE * (1 - state.timeLeft / state.questionTime);

    elements.timerCircle.classList.toggle("warning", state.timeLeft <= 7 && state.timeLeft > 3);
    elements.timerCircle.classList.toggle("danger", state.timeLeft <= 3);

    if (state.timeLeft <= 0) {
      clearInterval(state.timerId);
      answerQuestion(-1, true);
    }
  }, 1000);
};

// =========================================================
// SHUFFLE
// =========================================================
const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

// =========================================================
// RENDER QUESTION
// =========================================================
const renderQuestion = () => {
  const question = state.gameQuestions[state.questionIndex];
  const progress = ((state.questionIndex + 1) / state.gameQuestions.length) * 100;

  state.answered = false;
  state.fiftyUsed = false;
  elements.fiftyBtn.disabled = false;
  elements.fiftyBtn.classList.remove("used");
  elements.questionCategory.textContent = question.category;
  elements.questionDifficulty.textContent =
    question.difficulty === "easy" ? "Mudah" : question.difficulty === "medium" ? "Sedang" : "Sulit";
  elements.questionDifficulty.dataset.level = question.difficulty;
  elements.currentQuestion.textContent = state.questionIndex + 1;
  elements.questionTotal.textContent = state.gameQuestions.length;
  elements.progressBar.style.width = `${progress}%`;
  elements.questionText.textContent = question.question;
  elements.options.replaceChildren();
  elements.feedback.hidden = true;
  elements.feedback.className = "feedback";
  elements.nextButton.hidden = true;

  const letters = ["A", "B", "C", "D"];
  question.options.forEach((optionText, optionIndex) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "option";
    optionButton.dataset.optionIndex = optionIndex;

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = letters[optionIndex];

    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = optionText;

    const status = document.createElement("span");
    status.className = "option-status";
    status.setAttribute("aria-hidden", "true");

    optionButton.append(letter, text, status);
    elements.options.append(optionButton);
  });

  startTimer();
};

// =========================================================
// ANSWER
// =========================================================
const answerQuestion = (selectedIndex, timedOut = false) => {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerId);

  const question = state.gameQuestions[state.questionIndex];
  const isCorrect = selectedIndex === question.answer;
  const optionButtons = [...elements.options.querySelectorAll(".option")];

  optionButtons.forEach((button, index) => {
    button.disabled = true;
    const status = button.querySelector(".option-status");
    if (index === question.answer) {
      button.classList.add("correct");
      status.textContent = "✓";
    } else if (index === selectedIndex) {
      button.classList.add("wrong");
      status.textContent = "✕";
    } else {
      button.classList.add("dimmed");
    }
  });

  state.answers.push({
    question: question.question,
    selected: selectedIndex,
    correct: question.answer,
    isCorrect,
    timedOut,
    explanation: question.explanation || "",
  });

  if (isCorrect) {
    state.correctAnswers += 1;
    state.streak += 1;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    const gained = 100 + state.timeLeft * 5 + (state.streak - 1) * 25;
    state.score += gained;
    elements.feedbackIcon.textContent = "✓";
    elements.feedbackText.textContent = `Benar! +${gained} poin${state.streak > 1 ? ` (streak ${state.streak}x)` : ""}`;
    elements.feedback.className = "feedback correct";
    elements.feedbackExplanation.textContent = question.explanation || "";
  } else {
    state.streak = 0;
    elements.feedbackIcon.textContent = timedOut ? "⏱" : "✕";
    elements.feedbackText.textContent = timedOut
      ? `Waktu habis. Jawaban: ${question.options[question.answer]}`
      : `Belum tepat. Jawaban: ${question.options[question.answer]}`;
    elements.feedback.className = "feedback wrong";
    elements.feedbackExplanation.textContent = question.explanation || "";
  }

  elements.liveScore.textContent = state.score;
  elements.liveStreak.textContent = state.streak;
  elements.feedback.hidden = false;
  elements.nextButton.hidden = false;
  elements.nextButton.textContent =
    state.questionIndex === state.gameQuestions.length - 1 ? "Lihat Hasil" : "Soal Berikutnya";
};

// =========================================================
// 50:50
// =========================================================
elements.fiftyBtn.addEventListener("click", () => {
  if (state.answered || state.fiftyUsed) return;
  state.fiftyUsed = true;
  elements.fiftyBtn.disabled = true;
  elements.fiftyBtn.classList.add("used");

  const q = state.gameQuestions[state.questionIndex];
  const wrongIndices = q.options.map((_, i) => i).filter((i) => i !== q.answer);
  const toHide = shuffle(wrongIndices).slice(0, 2);
  const optionButtons = [...elements.options.querySelectorAll(".option")];
  toHide.forEach((i) => {
    optionButtons[i].classList.add("eliminated");
    optionButtons[i].disabled = true;
  });
});

// =========================================================
// START QUIZ
// =========================================================
const startQuiz = () => {
  const filtered = getFilteredQuestions();
  if (filtered.length === 0) {
    alert("Tidak ada soal untuk filter ini. Coba ubah filter.");
    return;
  }
  state.gameQuestions = shuffle(filtered).slice(0, QUESTIONS_PER_GAME);
  state.questionIndex = 0;
  state.score = 0;
  state.correctAnswers = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.answers = [];
  elements.liveScore.textContent = "0";
  elements.liveStreak.textContent = "0";
  showScreen(elements.quizScreen);
  renderQuestion();
};

// =========================================================
// SCREENS
// =========================================================
const showScreen = (screen) => {
  [elements.startScreen, elements.quizScreen, elements.resultScreen].forEach((item) => {
    item.hidden = item !== screen;
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// =========================================================
// RESULTS
// =========================================================
const showResults = () => {
  clearInterval(state.timerId);
  const total = state.gameQuestions.length;
  const wrongAnswers = total - state.correctAnswers;
  const percentage = Math.round((state.correctAnswers / total) * 100);
  const oldHighScore = getHighScore();
  const isNewHighScore = state.score > oldHighScore;

  if (isNewHighScore) localStorage.setItem(HIGH_SCORE_KEY, state.score);

  saveToLeaderboard({
    score: state.score,
    correct: state.correctAnswers,
    total,
    date: new Date().toISOString(),
  });

  elements.resultPercent.textContent = `${percentage}%`;
  elements.correct.textContent = state.correctAnswers;
  elements.wrong.textContent = wrongAnswers;
  elements.resultTotal.textContent = total;
  elements.resultScore.textContent = state.score;
  elements.resultTitle.textContent =
    percentage === 100 ? "Sempurna!" :
    percentage >= 80 ? "Luar Biasa!" :
    percentage >= 60 ? "Kerja Bagus!" : "Tetap Semangat!";
  elements.resultSubtitle.textContent = `Kamu mendapatkan ${state.score} poin dengan max streak ${state.maxStreak}x.`;

  requestAnimationFrame(() => {
    elements.ringProgress.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - percentage / 100);
  });
  elements.ringProgress.setAttribute(
    "class",
    percentage >= 80 ? "ring-progress good" :
    percentage >= 50 ? "ring-progress medium" : "ring-progress bad"
  );

  elements.highScoreBanner.hidden = !isNewHighScore;
  updateHighScoreLabels();
  renderReview();
  elements.reviewList.hidden = true;
  elements.reviewArrow.textContent = "▾";
  showScreen(elements.resultScreen);
};

// =========================================================
// REVIEW
// =========================================================
const renderReview = () => {
  elements.reviewList.replaceChildren();
  state.answers.forEach((ans, idx) => {
    const item = document.createElement("div");
    item.className = `review-item ${ans.isCorrect ? "correct" : "wrong"}`;

    const num = document.createElement("span");
    num.className = "review-num";
    num.textContent = `${idx + 1}.`;

    const content = document.createElement("div");
    content.className = "review-content";

    const q = document.createElement("p");
    q.className = "review-q";
    q.textContent = ans.question;

    const your = document.createElement("p");
    your.className = "review-your";
    your.textContent = ans.timedOut
      ? "Tidak dijawab (waktu habis)"
      : `Jawabanmu: ${state.gameQuestions[idx].options[ans.selected]}`;

    const correct = document.createElement("p");
    correct.className = "review-correct";
    correct.textContent = `Jawaban benar: ${state.gameQuestions[idx].options[ans.correct]}`;

    content.append(q, your, correct);

    if (ans.explanation) {
      const exp = document.createElement("p");
      exp.className = "review-exp";
      exp.textContent = ans.explanation;
      content.append(exp);
    }

    item.append(num, content);
    elements.reviewList.append(item);
  });
};

elements.reviewToggle.addEventListener("click", () => {
  const isHidden = elements.reviewList.hidden;
  elements.reviewList.hidden = !isHidden;
  elements.reviewArrow.textContent = isHidden ? "▴" : "▾";
});

// =========================================================
// LEADERBOARD
// =========================================================
const renderLeaderboard = () => {
  const list = getLeaderboard();
  elements.leaderboardList.replaceChildren();

  if (list.length === 0) {
    const empty = document.createElement("p");
    empty.className = "leaderboard-empty";
    empty.textContent = "Belum ada skor. Main dulu yuk!";
    elements.leaderboardList.append(empty);
    elements.clearLbBtn.hidden = true;
    return;
  }

  elements.clearLbBtn.hidden = false;
  list.forEach((entry, idx) => {
    const item = document.createElement("div");
    item.className = "leaderboard-item";

    const rank = document.createElement("span");
    rank.className = "lb-rank";
    rank.textContent = `#${idx + 1}`;

    const info = document.createElement("div");
    info.className = "lb-info";

    const score = document.createElement("span");
    score.className = "lb-score";
    score.textContent = `${entry.score} poin`;

    const meta = document.createElement("span");
    meta.className = "lb-meta";
    const date = new Date(entry.date).toLocaleDateString("id-ID", {
      day: "numeric", month: "short", year: "numeric",
    });
    meta.textContent = `${entry.correct}/${entry.total} benar · ${date}`;

    info.append(score, meta);
    item.append(rank, info);
    elements.leaderboardList.append(item);
  });
};

const openLeaderboard = () => {
  renderLeaderboard();
  elements.modal.classList.add("is-open");
  elements.modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeLeaderboard = () => {
  elements.modal.classList.remove("is-open");
  elements.modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

elements.leaderboardBtn.addEventListener("click", openLeaderboard);
elements.modalClose.addEventListener("click", closeLeaderboard);
elements.modalBackdrop.addEventListener("click", closeLeaderboard);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && elements.modal.classList.contains("is-open")) closeLeaderboard();
});

elements.clearLbBtn.addEventListener("click", () => {
  if (confirm("Hapus semua skor leaderboard?")) {
    localStorage.removeItem(LEADERBOARD_KEY);
    renderLeaderboard();
  }
});

// =========================================================
// EVENT LISTENERS
// =========================================================
elements.startButton.addEventListener("click", startQuiz);
elements.restartButton.addEventListener("click", startQuiz);

elements.homeButton.addEventListener("click", () => {
  clearInterval(state.timerId);
  updateHighScoreLabels();
  updateStartInfo();
  showScreen(elements.startScreen);
});

elements.nextButton.addEventListener("click", () => {
  if (state.questionIndex === state.gameQuestions.length - 1) {
    showResults();
    return;
  }
  state.questionIndex += 1;
  renderQuestion();
});

elements.options.addEventListener("click", (event) => {
  const option = event.target.closest(".option");
  if (!option || option.disabled) return;
  answerQuestion(Number(option.dataset.optionIndex));
});

// Keyboard: 1-4 pilih, Enter next
document.addEventListener("keydown", (e) => {
  if (elements.quizScreen.hidden) return;
  if (!state.answered && ["1", "2", "3", "4"].includes(e.key)) {
    const idx = Number(e.key) - 1;
    const btn = elements.options.querySelectorAll(".option")[idx];
    if (btn && !btn.disabled) btn.click();
  }
  if (state.answered && e.key === "Enter" && !elements.nextButton.hidden) {
    elements.nextButton.click();
  }
});

// =========================================================
// INIT
// =========================================================
elements.questionTotal.textContent = QUESTIONS_PER_GAME;
updateHighScoreLabels();
updateStartInfo();
elements.startTime.textContent = `${state.selectedTime}s`;
loadTheme();