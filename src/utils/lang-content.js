const NavbarContent = {
  en: {
    list: [ 'Home', 'Note', 'Archive', 'Login', 'Register'],
  },
  id: {
    list: [ 'Beranda', 'Catatan', 'Arsip', 'Masuk', 'Daftar' ]
  }
};

const FooterContent = {
  en: {
    submission: 'Submission Dicoding ',
    link: 'Fundamental ReactJs',
  },
  id: {
    submission: 'Tugas Akhir Dicoding ',
    link: 'ReactJs Fundamental',
  }
};

const ButtonContent = {
  en: {
    create: 'Create Note',
    delete: 'Delete',
    back: 'Back',
    backToHome: 'Back to home',
    submit: 'Submit',
    started: 'Get started'
  },
  id: {
    create: 'Tambah Catatan',
    delete: 'Hapus',
    back: 'Kembali',
    backToHome: 'Kembali ke beranda',
    submit: 'Kirim',
    started: 'Mulai sekarang'
  }
};

const SwalContent = {
  en: {
    title: 'Delete Note',
    text: 'Are you sure to delete this note?',
    confirmButton: 'Yes, delete',
    cancelButton: 'Cancel',
  },
  id: {
    title: 'Hapus Catatan',
    text: 'Apakah Anda yakin menghapus catatan ini?',
    confirmButton: 'Iya, hapus',
    cancelButton: 'Batal',
  }
};

const ToastContent = {
  en: {
    login: 'Login Success.',
    logout: 'Logout Success.',
    noteCreateSuccess: 'Successfully added a note.',
    noteCreateFailed: 'Failed to add a note.',
    noteDeleteSuccess: 'Successfully deleted a note.',
    noteDeleteFailed: 'Failed to delete a note.',
    archiveDeleteSuccess: 'Successfully deleted a archive.',
    archiveDeleteFailed: 'Failed to delete a archive.',
    noteArchiveChange: 'Successfully changed the note status.',
  },
  id: {
    login: 'Berhasil Login.',
    logout: 'Berhasil Logout.',
    noteCreateSuccess: 'Berhasil menambahkan catatan.',
    noteCreateFailed: 'Gagal menambahkan catatan.',
    noteDeleteSuccess: 'Berhasil menghapus catatan.',
    noteDeleteFailed: 'Gagal menghapus catatan.',
    archiveDeleteSuccess: 'Berhasil menghapus arsip.',
    archiveDeleteFailed: 'Gagal menghapus arsip.',
    noteArchiveChange: 'Berhasil mengubah status catatan.',
  }
};

const FormContent = {
  en: {
    titleLabel: 'Title',
    titlePlaceholder: 'Note Title',
    bodyLabel: 'Description',
    bodyPlaceholder: 'Note Description',
    userName: 'User Name',
    confirmPassword: 'Password Confirmation',
    passwordAlert: 'Password does not match'
  },
  id: {
    titleLabel: 'Judul',
    titlePlaceholder: 'Judul Catatan',
    bodyLabel: 'Deskripsi',
    bodyPlaceholder: 'Deskripsi Catatan',
    userName: 'Nama Pengguna',
    confirmPassword: 'Konfirmasi Password',
    passwordAlert: 'Password tidak sesuai'
  }
};

const PageContent = {
  en: {
    noteList: 'Note List',
    noteEmpty: 'Note is empty',
    archiveList: 'Archive List',
    archiveEmpty: 'Archive is empty',
    login: 'Create new account ',
    signUp: 'Register',
    register: 'Have an account? ',
    modal: 'Add Note',
    active: 'Active',
    archive: 'Archive'
  },
  id: {
    noteList: 'Daftar Catatan',
    noteEmpty: 'Tidak ada catatan',
    archiveList: 'Daftar Arsip',
    archiveEmpty: 'Tidak ada arsip',
    login: 'Tidak punya akun? ',
    signUp: 'Daftar',
    register: 'Sudah punya akun? ',
    modal: 'Tambah Catatan',
    active: 'Aktif',
    archive: 'Arsip'
  }
};

const LandingContent = {
  en: {
    bannerTitle: 'The simplest way to keep notes',
    bannerDesc: 'All your notes, synced on all your browser',
    content: [
      { title: 'Use it everywhere', desc: 'Access your notes from anywhere, anytime. Your notes, your way' },
      { title: 'Cloud storage', desc: 'Securely store your notes in the cloud. Access them whenever and wherever you need.' },
      { title: 'Free to use', desc: 'Enjoy our services at no cost. Experience the freedom of MyNotes without any charges.' },
      { title: 'Easy to use', desc: 'MyNotes provides an intuitive and user-friendly interface for effortless use.' },
    ],
    startedTitle: 'Ready to get Started?',
    startedDesc: 'Try MyNotes for Free, and take your notes to the moon 🚀',
  },
  id: {
    bannerTitle: 'Cara sederhana untuk menyimpan catatan',
    bannerDesc: 'Semua catatan Anda, disinkronkan di semua browser Anda',
    content: [
      { title: 'Gunakan di mana saja', desc: 'Akses catatan Anda dari mana saja, kapan saja. Catatan Anda, gaya Anda' },
      { title: 'Penyimpanan Cloud', desc: 'Simpan catatan Anda dengan aman di cloud. Akses kapan saja dan di mana saja Anda butuhkan.' },
      { title: 'Gratis untuk digunakan', desc: 'Nikmati layanan kami tanpa biaya. Rasakan kebebasan MyNotes tanpa biaya apapun.' },
      { title: 'Mudah digunakan', desc: 'MyNotes menyediakan antarmuka yang intuitif dan mudah digunakan.' },
    ],
    startedTitle: 'Siap untuk Memulai?',
    startedDesc: 'Coba MyNotes secara Gratis, dan bawa catatan Anda ke bulan 🚀',
  }
};

const NotFoundContent = {
  en: {
    desc: 'Sorry, the page you are looking for is not found.'
  },
  id: {
    desc: 'Maaf, halaman yang sedang kamu cari tidak ditemukan.'
  }
};

// const FooterText = {
//   en: {},
//   id: {}
// };

export {
  NavbarContent,
  FooterContent,
  ButtonContent,
  SwalContent,
  ToastContent,
  FormContent,
  PageContent,
  LandingContent,
  NotFoundContent,
};
