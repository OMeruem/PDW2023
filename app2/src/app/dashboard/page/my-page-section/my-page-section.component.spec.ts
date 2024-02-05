import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPageSectionComponent } from './my-page-section.component';

describe('MyPageSectionComponent', () => {
  let component: MyPageSectionComponent;
  let fixture: ComponentFixture<MyPageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPageSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
