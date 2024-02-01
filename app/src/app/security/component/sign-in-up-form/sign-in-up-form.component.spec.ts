import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUpFormComponent } from './sign-in-up-form.component';

describe('SignInUpFormComponent', () => {
  let component: SignInUpFormComponent;
  let fixture: ComponentFixture<SignInUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInUpFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
