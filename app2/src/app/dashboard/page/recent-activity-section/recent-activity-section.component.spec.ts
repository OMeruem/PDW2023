import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentActivitySectionComponent } from './recent-activity-section.component';

describe('RecentActivitySectionComponent', () => {
  let component: RecentActivitySectionComponent;
  let fixture: ComponentFixture<RecentActivitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentActivitySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentActivitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
