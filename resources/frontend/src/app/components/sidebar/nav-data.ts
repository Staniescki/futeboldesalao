export const navbarData = [
  {
    routerLink: 'novo-usuario',
    icon: 'fal fa-home',
    label: 'Criar Jogador',
  },
  {
    routerLink: 'perfil-jogador',
    icon: 'fal fa-box-open',
    label: 'Perfil do Jogador',
  },
  {
    routerLink: 'estatisticas-jogador',
    icon: 'fal fa-chart-bar',
    label: 'Estatisticas do Jogador',
  },
  {
    routerLink: 'novo-time',
    icon: 'fal fa-tags',
    label: 'Criar Time',
  },
  {
    routerLink: 'perfil-time',
    icon: 'fal fa-file',
    label: 'Perfil do Time',
  },
  {
    routerLink: 'estatisticas-time',
    icon: 'fal fa-camera',
    label: 'Estatisticas do time',
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
