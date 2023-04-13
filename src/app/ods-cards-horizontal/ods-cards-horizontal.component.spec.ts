import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdsCardsHorizontalComponent } from './ods-cards-horizontal.component';

describe('OdsCardsHorizontalComponent', () => {
  let component: OdsCardsHorizontalComponent;
  let fixture: ComponentFixture<OdsCardsHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdsCardsHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdsCardsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
