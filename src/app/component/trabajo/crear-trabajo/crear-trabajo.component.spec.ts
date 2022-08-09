import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTrabajoComponent } from './crear-trabajo.component';

describe('CrearTrabajoComponent', () => {
  let component: CrearTrabajoComponent;
  let fixture: ComponentFixture<CrearTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
