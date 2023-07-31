import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterAdicionarProjetoComponent } from './center-adicionar-projeto.component';

describe('CenterAdicionarProjetoComponent', () => {
  let component: CenterAdicionarProjetoComponent;
  let fixture: ComponentFixture<CenterAdicionarProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterAdicionarProjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterAdicionarProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
