import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCutSectionComponent } from './short-cut-section.component';

describe('ShortCutSectionComponent', () => {
  let component: ShortCutSectionComponent;
  let fixture: ComponentFixture<ShortCutSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortCutSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortCutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
