import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterProjetosComponent } from './center-projetos.component';

describe('CenterProjetosComponent', () => {
  let component: CenterProjetosComponent;
  let fixture: ComponentFixture<CenterProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterProjetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
