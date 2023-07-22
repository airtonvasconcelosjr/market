import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcouguePageComponent } from './acougue-page.component';

describe('AcouguePageComponent', () => {
  let component: AcouguePageComponent;
  let fixture: ComponentFixture<AcouguePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcouguePageComponent]
    });
    fixture = TestBed.createComponent(AcouguePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
