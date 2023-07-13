import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterInstituicaoComponent } from './center-instituicao.component';

describe('CenterInstituicaoComponent', () => {
  let component: CenterInstituicaoComponent;
  let fixture: ComponentFixture<CenterInstituicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterInstituicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
