import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroDataComponent } from './filtro-data.component';

describe('FiltroDataComponent', () => {
  let component: FiltroDataComponent;
  let fixture: ComponentFixture<FiltroDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
