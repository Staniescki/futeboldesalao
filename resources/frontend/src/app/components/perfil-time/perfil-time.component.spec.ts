import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTimeComponent } from './perfil-time.component';

describe('PerfilTimeComponent', () => {
  let component: PerfilTimeComponent;
  let fixture: ComponentFixture<PerfilTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
