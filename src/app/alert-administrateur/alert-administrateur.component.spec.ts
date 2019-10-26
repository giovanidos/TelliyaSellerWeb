import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAdministrateurComponent } from './alert-administrateur.component';

describe('AlertAdministrateurComponent', () => {
  let component: AlertAdministrateurComponent;
  let fixture: ComponentFixture<AlertAdministrateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertAdministrateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
