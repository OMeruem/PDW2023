import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileSectionComponent } from './my-profile-section.component';

describe('MyProfileSectionComponent', () => {
  let component: MyProfileSectionComponent;
  let fixture: ComponentFixture<MyProfileSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProfileSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyProfileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
