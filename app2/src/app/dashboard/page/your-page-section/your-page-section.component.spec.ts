import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPageSectionComponent } from './your-page-section.component';

describe('YourPageSectionComponent', () => {
  let component: YourPageSectionComponent;
  let fixture: ComponentFixture<YourPageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourPageSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
