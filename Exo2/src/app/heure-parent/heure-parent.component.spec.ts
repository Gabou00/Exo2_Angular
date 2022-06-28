import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeureParentComponent } from './heure-parent.component';

describe('HeureParentComponent', () => {
  let component: HeureParentComponent;
  let fixture: ComponentFixture<HeureParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeureParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeureParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
