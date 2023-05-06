import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterProjetoComponent } from './center-projeto.component';

describe('CenterProjetoComponent', () => {
  let component: CenterProjetoComponent;
  let fixture: ComponentFixture<CenterProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterProjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
