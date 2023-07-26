import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterCadastroInstituicaoComponent } from './center-cadastro-instituicao.component';

describe('CenterCadastroInstituicaoComponent', () => {
  let component: CenterCadastroInstituicaoComponent;
  let fixture: ComponentFixture<CenterCadastroInstituicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterCadastroInstituicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterCadastroInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
