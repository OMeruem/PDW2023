import {Component, inject, Input, signal, WritableSignal} from '@angular/core';
import {MemberService} from '../../service/member.service';

@Component({
  selector: 'app-member-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './member-detail-page.component.html',
  styleUrl: './member-detail-page.component.scss'
})
export class MemberDetailPageComponent {
  @Input() id!:string;
  readonly memberService = inject(MemberService)

  member: WritableSignal<string> = signal('no body');
}
