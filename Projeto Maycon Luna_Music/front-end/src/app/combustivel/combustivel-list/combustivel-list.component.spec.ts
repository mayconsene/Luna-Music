import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustivelListComponent } from './combustivel-list.component';

describe('CombustivelListComponent', () => {
  let component: CombustivelListComponent;
  let fixture: ComponentFixture<CombustivelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombustivelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombustivelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
