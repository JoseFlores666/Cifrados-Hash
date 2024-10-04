import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifradoEscitalaComponent } from './cifrado-escitala.component';

describe('CifradoEscitalaComponent', () => {
  let component: CifradoEscitalaComponent;
  let fixture: ComponentFixture<CifradoEscitalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CifradoEscitalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CifradoEscitalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
