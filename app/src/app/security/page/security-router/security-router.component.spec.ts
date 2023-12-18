import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRouterComponent } from './security-router.component';

describe('SecurityRouterComponent', () => {
  let component: SecurityRouterComponent;
  let fixture: ComponentFixture<SecurityRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecurityRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
