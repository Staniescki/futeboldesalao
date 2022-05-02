import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTimeComponent } from './editar-time.component';

describe('EditarTimeComponent', () => {
  let component: EditarTimeComponent;
  let fixture: ComponentFixture<EditarTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
