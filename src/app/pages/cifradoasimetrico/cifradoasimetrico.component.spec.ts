import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifradoasimetricoComponent } from './cifradoasimetrico.component';

describe('CifradoasimetricoComponent', () => {
  let component: CifradoasimetricoComponent;
  let fixture: ComponentFixture<CifradoasimetricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CifradoasimetricoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CifradoasimetricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
