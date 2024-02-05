import {Routes} from "@angular/router";
import {AppNode} from '../shared/routes/enum/node.enum';
import {DashboardGuard} from './dashboard.guard';
import {memberRoutes} from './feature/member/page/member.routes';

export const DashboardRoutes: Routes = [

  {
    path: '',
    loadComponent: () => import('./router/dashboard-router/dashboard-router.component').then(c => c.DashboardRouterComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./page/dashboard-home-page/dashboard-home-page.component').then(c => c.DashboardHomePageComponent)
      },

      {
        path: 'member',
        loadChildren: () => import('./feature/member/page/member.routes').then(c => c.memberRoutes)
      },

      {
        path: 'myPage',
        loadComponent: () => import('./page/my-page-section/my-page-section.component').then(c => c.MyPageSectionComponent)
      }
    ]
  },


]
