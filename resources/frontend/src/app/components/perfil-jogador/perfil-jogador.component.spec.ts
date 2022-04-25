import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilJogadorComponent } from './perfil-jogador.component';

describe('PerfilJogadorComponent', () => {
  let component: PerfilJogadorComponent;
  let fixture: ComponentFixture<PerfilJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilJogadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
