export const navbarData = [
  {
    routerLink: 'novo-usuario',
    icon: 'fa-solid fa-square-plus',
    label: 'Criar Jogador',
  },
  {
    routerLink: 'perfil-jogador',
    icon: 'fa-solid fa-person-circle-check',
    label: 'Perfil do Jogador',
  },
  {
    routerLink: 'estatisticas-jogador',
    icon: 'fa-solid fa-chart-gantt',
    label: 'Estatisticas do Jogador',
  },
  {
    routerLink: 'novo-time',
    icon: 'fa-solid fa-plus',
    label: 'Criar Time',
  },
  {
    routerLink: 'perfil-time',
    icon: 'fa-solid fa-calendar',
    label: 'Perfil do Time',
  },
  {
    routerLink: 'settings',
    icon: 'fal fa-cog',
    label: 'Settings',
  },
  {
    routerLink: 'teste',
    icon: 'fal fa-cog',
    label: 'Menu with Children',
    submenuLevel1: [
      {
        routeLink: 'teste1',
        icon: 'fal fa-cog', // icon if needed
        label: 'Sub menu level 1',
      },
      {
        routeLink: 'teste2',
        icon: 'fal fa-cog', // icon if needed
        label: 'Sub menu level 1',
      },
    ]
  }
];
