import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterOdsComponent } from './center-ods.component';

describe('CenterOdsComponent', () => {
  let component: CenterOdsComponent;
  let fixture: ComponentFixture<CenterOdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterOdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterOdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
