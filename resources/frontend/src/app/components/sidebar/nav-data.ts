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
    label: 'Estatisticas de time',
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
    routerLink: 'agenda',
    icon: 'fa-solid fa-calendar-days',
    label: 'Agenda',
  },
  {
    routerLink: 'pagamento',
    icon: 'fa-solid fa-sack-dollar',
    label: 'pagamento',
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
