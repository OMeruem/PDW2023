import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPublicationSectionComponent } from './post-publication-section.component';

describe('PostPublicationSectionComponent', () => {
  let component: PostPublicationSectionComponent;
  let fixture: ComponentFixture<PostPublicationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPublicationSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostPublicationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
