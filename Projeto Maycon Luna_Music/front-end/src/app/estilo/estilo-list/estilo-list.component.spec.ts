import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstiloListComponent } from './estilo-list.component';

describe('EstiloListComponent', () => {
  let component: EstiloListComponent;
  let fixture: ComponentFixture<EstiloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstiloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstiloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
