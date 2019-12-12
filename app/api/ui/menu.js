module.exports = [
  {
    key:  'home',
    name: 'Home',
    icon: 'ios-home',
    child: [
      {
        key: 'dashboard',
        name: 'Dashboard',
        title: true,
      },
      {
        key:  'dashboard',
        name: 'Dashboard',
        icon: 'ios-person', 
       link: '/app/dashboard',
      },
      {
        key: 'list',
        name: 'Mahasiswa & Dosen',
        title: true,
      },
      {
        key : 'list-student',
        name: 'Daftar Mahasiswa',
        icon: '',
        link: '/app/list-student'
      },
      {
        key : 'list-lecturer',
        name: 'Daftar Dosen',
        icon: '',
        link: '/app/list-lecturer'
      }
    ]
  },
  {
    key:  'system',
    name: 'Sistem',
    icon: 'ios-build',
    child:  [
      {
        key:  'user',
        name: 'Pengguna',
        icon: 'ios-person',
        link: '/app/system/user'
      },
      {
        key:  'role',
        name: 'Role',
        icon: 'ios-people',
        link: '/app/system/role'
      }
    ]
  },
  {
    key: 'master-university',
    name: 'Master Universitas',
    icon: 'ios-cube',
    child:  [
      {
        key:  'identity-univ',
        name: 'Identitas Universitas',
        icon: 'ios-ribbon',
        link: '/app/master-university/identity'
      },
      {
        key:  'college',
        name: 'Kampus',
        icon: '',
        link: '/app/master-university/college'
      },
      {
        key:  'faculty',
        name: 'Fakultas',
        icon: '',
        link: '/app/master-university/faculty'
      },
      {
        key:  'study-program',
        name: 'Program Studi',
        icon: '',
        link: '/app/master-university/study-program'
      },
      {
        key:  'education-program',
        name: 'Program Pendidikan',
        icon: '',
        link: '/app/master-university/education-program'
      },
      {
        key:  'institutional-account',
        name: 'Rekening Institusi',
        icon: '',
        link: '/app/master-university/institutional-account'
      },
      {
        key:  'class',
        name: 'Kelas',
        icon: '',
        link: '/app/master-university/class'
      },
      {
        key:  'academic-calendar',
        name :  'Kalender Akademik',
        icon: '',
        link: '/app/master-university/academic-calendar'
      }
    ]
  },
  {
    key:  'master-courses',
    name: 'Master Matakuliah',
    icon: 'ios-cube',
    child:  [
      {
        key:  'Curicullum',
        name: 'Kurikulum',
        icon: '',
        link: '/app/master-courses/curicullum'
      },
      {
        key:  'courses-type',
        name: 'Jenis Matakuliah',
        icon: '',
        link: '/app/master-courses/courses-type'
      },
      {
        key:  'sks-max',
        name: 'Maksimal SKS',
        icon: '',
        link: '/app/master-courses/sks-max'
      },
      {
        key:  'courses',
        name: 'Matakuliah',
        icon: '',
        link: '/app/master-courses/courses'
      },
      {
        key:  'predicate',
        name: 'Predikat',
        icon: '',
        link: '/app/master-courses/predicate'
      }
    ]
  },
  {
    key:  'master-fee',
    name: 'Master Biaya',
    icon: 'ios-cube',
    child:  [
      {
        key:  'fee',
        name: 'Biaya',
        icon: '',
        link: '/app/master-fee/fee'
      },
      {
        key:  'discount',
        name: 'Potongan',
        icon: '',
        link: '/app/master-fee/discount'
      },
      {
        key : 'scholarship',
        name: 'Jenis Beasiswa',
        icon: '',
        link: '/app/master-fee/scholarship'
      },
      {
        key : 'arrears-setup',
        name: 'Pengaturan Denda',
        icon: '',
        link: '/app/master-fee/arrears-setup'
      },
      {
        key : 're-registration',
        name: 'Registrasi Ulang',
        icon: '',
        link: '/app/master-fee/re-registration'
      },
      {
        key : 'lecturer-account',
        name: 'Rekening Dosen',
        icon: '',
        link: '/app/master-fee/lecturer-account'
      },
      {
        key : 'lecturer-salary',
        name: 'Honor Dosen',
        icon: '',
        link: '/app/master-fee/lecturer-salary'

      }
    ]
  },
  {
    key : 'master-score',
    name: 'Master Penilaian',
    icon: 'ios-cube',
    child:  [
      {
        key : 'value-weight',
        name: 'Bobot Nilai',
        icon: '',
        link: '/app/master-score/value-weight'
      },
      {
        key : 'quality-score',
        name: 'Nilai Mutu',
        icon: '',
        link: '/app/master-score/quality'
      },
    ]
  },
  {
    key : 'scheduling',
    name: 'Penjadwalan',
    icon: 'ios-time',
    child:  [
      {
        key : 'college-schedule',
        name: 'Jadwal Kuliah',
        icon: '',
        link: '/app/scheduling/college-schedule'
      },
      {
        key : 'exam-schedule',
        name: 'Jadwal Ujian',
        icon: '',
        link: '/app/scheduling/exam-schedule'
      },
      {
        key : 'trial-schedule',
        name: 'Jadwal Sidang',
        icon: '',
        link: '/app/scheduling/trial-scheduling'
      },
      {
        key : 'graduation-schedule',
        name: 'Jadwal Wisuda',
        icon: '',
        link: '/app/scheduling/graduation-schedule'
      }
    ]
  }
];


/*{
    key: 'pages',
    name: 'Pages',
    icon: 'ios-paper-outline',
    child: [
      {
        key: 'Test 123',
        name: 'tes',
        link: '/app/TestPage'
      },
      {
        key: 'other_page',
        name: 'Welcome Page',
        title: true,
      },
      {
        key: 'blank',
        name: 'Blank Page',
        link: '/app',
        icon: 'ios-document-outline',
      },
      {
        key: 'main_page',
        name: 'Sample Page',
        title: true,
      },
      {
        key: 'dashboard',
        name: 'Dashboard',
        link: '/app/dashboard',
        icon: 'ios-home-outline',
      },
      {
        key: 'form',
        name: 'Form',
        link: '/app/form',
        icon: 'ios-list-box-outline',
      },
      {
        key: 'table',
        name: 'Table',
        link: '/app/table',
        icon: 'ios-grid-outline',
      },
      {
        key: 'maintenance',
        name: 'Maintenance',
        link: '/maintenance',
        icon: 'ios-build-outline'
      },
      {
        key: 'coming_soon',
        name: 'Coming Soon',
        link: '/coming-soon',
        icon: 'ios-bonfire-outline'
      },
    ]
  },
  {
    key: 'auth',
    name: 'Auth Page',
    icon: 'ios-contact-outline',
    child: [
      {
        key: 'auth_page',
        name: 'User Authentication',
        title: true,
      },
      {
        key: 'login',
        name: 'Login',
        link: '/login',
        icon: 'ios-person-outline'
      },
      {
        key: 'register',
        name: 'Register',
        link: '/register',
        icon: 'ios-key-outline'
      },
      {
        key: 'reset',
        name: 'Reset Password',
        link: '/reset-password',
        icon: 'ios-undo-outline'
      },
    ]
  },
  {
    key: 'errors',
    name: 'Errors',
    icon: 'ios-paw-outline',
    child: [
      {
        key: 'errors_page',
        name: 'Errors Pages',
        title: true,
      },
      {
        key: 'not_found_page',
        name: 'Not Found Page',
        link: '/app/pages/not-found',
        icon: 'ios-warning-outline'
      },
      {
        key: 'error_page',
        name: 'Error Page',
        link: '/app/pages/error',
        icon: 'ios-warning-outline'
      },
    ]
  },
  {
    key: 'menu_levels',
    name: 'Menu Levels',
    multilevel: true,
    icon: 'ios-menu-outline',
    child: [
      {
        key: 'level_1',
        name: 'Level 1',
        link: '/#'
      },
      {
        key: 'level_2',
        keyParent: 'menu_levels',
        name: 'Level 2',
        child: [
          {
            key: 'sub_menu_1',
            name: 'Sub Menu 1',
            link: '/#'
          },
          {
            key: 'sub_menu_2',
            name: 'Sub Menu 2',
            link: '/#'
          },
        ]
      },
    ]
  }*/