import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifradoCesarComponent } from './cifrado-cesar.component';

describe('CifradoCesarComponent', () => {
  let component: CifradoCesarComponent;
  let fixture: ComponentFixture<CifradoCesarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CifradoCesarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CifradoCesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
