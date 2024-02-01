import { Component } from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';
import {AppRoutes} from '../../../shared/routes/enum/route.enum';


@Component({
  selector: 'app-dashboard-router',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './dashboard-router.component.html',
  styleUrl: './dashboard-router.component.scss'
})
export class DashboardRouterComponent {
  routes = AppRoutes;
}
