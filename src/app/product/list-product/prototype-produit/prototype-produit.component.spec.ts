import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypeProduitComponent } from './prototype-produit.component';

describe('PrototypeProduitComponent', () => {
  let component: PrototypeProduitComponent;
  let fixture: ComponentFixture<PrototypeProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrototypeProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototypeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
