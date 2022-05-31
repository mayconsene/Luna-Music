import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustivelFormComponent } from './combustivel-form.component';

describe('CombustivelFormComponent', () => {
  let component: CombustivelFormComponent;
  let fixture: ComponentFixture<CombustivelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombustivelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombustivelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
