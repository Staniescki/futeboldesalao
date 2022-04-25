import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticasJogadorComponent } from './estatisticas-jogador.component';

describe('EstatisticasJogadorComponent', () => {
  let component: EstatisticasJogadorComponent;
  let fixture: ComponentFixture<EstatisticasJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatisticasJogadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticasJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
