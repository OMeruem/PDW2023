import {Component, inject, Input, signal, WritableSignal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PublicationCreatePayload} from '../../model/payload/postPublication.payload';
import {PublicationCreateFormConfig} from '../../../security/data';
import {PublicationService} from '../../service/publication.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-post-publication-section',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf,
    NgIf,
    DatePipe
  ],
  templateUrl: './post-publication-section.component.html',
  styleUrl: './post-publication-section.component.scss'
})
export class PostPublicationSectionComponent {
  readonly publicationService: PublicationService = inject(PublicationService);
  @Input({required: true}) config!: PublicationCreateFormConfig;
  error$: WritableSignal<string> = signal('');

  save(): void {
    this.error$.set('');
    const payload: PublicationCreatePayload = {
      publicationType: 'text',
      user: {},
      ...this.config.formGroup.value
    };

    console.log('payload', payload);
    this.publicationService.publicationCreate(payload as PublicationCreatePayload).subscribe();
    window.location.reload();
  }

}



