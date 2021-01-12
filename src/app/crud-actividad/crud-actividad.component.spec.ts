import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudActividadComponent } from './crud-actividad.component';

describe('CrudActividadComponent', () => {
  let component: CrudActividadComponent;
  let fixture: ComponentFixture<CrudActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudActividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
