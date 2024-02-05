import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {SecurityService} from '../../../security/service';
import {AppNode} from '../../../shared/routes/enum/node.enum';

@Component({
  selector: 'app-short-cut-section',
  standalone: true,
  imports: [],
  templateUrl: './short-cut-section.component.html',
  styleUrl: './short-cut-section.component.scss'
})
export class ShortCutSectionComponent {
  private readonly SecurityService: SecurityService = inject(SecurityService);
  private readonly router: Router = inject(Router);

  disconnect():void{
    //pq pas marcher ?
    this.SecurityService.logOut();
    this.router.navigate(["account/", AppNode.SIGN_IN]).then();
  }

  goToMyProfile(): void  {
    this.router.navigate([AppNode.MYPAGE]).then();
  }

  goToMyFeed() {
    this.router.navigate([AppNode.REDIRECT_TO_AUTHENTICATED]).then();
  }
}
