import {Routes} from '@angular/router';

export const DashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./router/dashboard-router/dashboard-router.component').then(c => c.DashboardRouterComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./page/dashboard-home-page/dashboard-home-page.component').then(c => c.DashboardHomePageComponent),
      },
      {
        path: 'member',
        loadChildren: () => import('./feature/member/page/member.routes').then(r => r.memberRoutes)
      }
    ]
  }
]
