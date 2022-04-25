import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticasTimeComponent } from './estatisticas-time.component';

describe('EstatisticasTimeComponent', () => {
  let component: EstatisticasTimeComponent;
  let fixture: ComponentFixture<EstatisticasTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatisticasTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticasTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
