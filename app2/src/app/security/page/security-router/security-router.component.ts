import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppRoutes} from '../../../shared/routes/enum/route.enum';

@Component({
  selector: 'app-security-router',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './security-router.component.html',
  styleUrl: './security-router.component.scss'
})
export class SecurityRouterComponent {
  app = AppRoutes;

}
