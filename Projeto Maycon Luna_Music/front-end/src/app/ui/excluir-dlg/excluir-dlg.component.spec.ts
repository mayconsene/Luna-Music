import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirDlgComponent } from './excluir-dlg.component';

describe('ExcluirDlgComponent', () => {
  let component: ExcluirDlgComponent;
  let fixture: ComponentFixture<ExcluirDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
