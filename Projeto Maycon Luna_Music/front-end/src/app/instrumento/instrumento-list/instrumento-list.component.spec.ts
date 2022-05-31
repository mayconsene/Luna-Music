import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentoListComponent } from './instrumento-list.component';

describe('InstrumentoListComponent', () => {
  let component: InstrumentoListComponent;
  let fixture: ComponentFixture<InstrumentoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
