import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFeedSectionComponent } from './your-feed-section.component';

describe('YourFeedSectionComponent', () => {
  let component: YourFeedSectionComponent;
  let fixture: ComponentFixture<YourFeedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourFeedSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourFeedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
