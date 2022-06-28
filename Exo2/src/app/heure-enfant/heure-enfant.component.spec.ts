import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeureEnfantComponent } from './heure-enfant.component';

describe('HeureEnfantComponent', () => {
  let component: HeureEnfantComponent;
  let fixture: ComponentFixture<HeureEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeureEnfantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeureEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
