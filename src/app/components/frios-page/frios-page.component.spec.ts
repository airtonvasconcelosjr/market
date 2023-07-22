import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriosPageComponent } from './frios-page.component';

describe('FriosPageComponent', () => {
  let component: FriosPageComponent;
  let fixture: ComponentFixture<FriosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriosPageComponent]
    });
    fixture = TestBed.createComponent(FriosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
