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
  },
  id: {
    create: 'Tambah Catatan',
    delete: 'Hapus',
    back: 'Kembali',
    backToHome: 'Kembali ke beranda',
    submit: 'Kirim',
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
    note: 'Note List',
    noteEmpty: 'Note is empty',
    archive: 'Archive List',
    archiveEmpty: 'Archive is empty',
    login: 'Create new account ',
    signUp: 'Register',
    register: 'Have an account? ',
    modal: 'Add Note',
  },
  id: {
    note: 'Daftar Catatan',
    noteEmpty: 'Tidak ada catatan',
    archive: 'Daftar Arsip',
    archiveEmpty: 'Tidak ada arsip',
    login: 'Tidak punya akun? ',
    signUp: 'Daftar',
    register: 'Sudah punya akun? ',
    modal: 'Tambah Catatan',
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
  NotFoundContent,
};
