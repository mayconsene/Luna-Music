import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstiloFormComponent } from './estilo-form.component';

describe('EstiloFormComponent', () => {
  let component: EstiloFormComponent;
  let fixture: ComponentFixture<EstiloFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstiloFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstiloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
