import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterInstituicoesComponent } from './center-instituicoes.component';

describe('CenterInstituicoesComponent', () => {
  let component: CenterInstituicoesComponent;
  let fixture: ComponentFixture<CenterInstituicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterInstituicoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterInstituicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
