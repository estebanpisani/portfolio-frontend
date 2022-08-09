import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTrabajoComponent } from './editar-trabajo.component';

describe('EditarTrabajoComponent', () => {
  let component: EditarTrabajoComponent;
  let fixture: ComponentFixture<EditarTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
