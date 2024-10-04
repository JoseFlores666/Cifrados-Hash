import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Documentacion2Component } from './documentacion2.component';

describe('Documentacion2Component', () => {
  let component: Documentacion2Component;
  let fixture: ComponentFixture<Documentacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Documentacion2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Documentacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
