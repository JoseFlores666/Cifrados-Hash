import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guia2Component } from './guia2.component';

describe('Guia2Component', () => {
  let component: Guia2Component;
  let fixture: ComponentFixture<Guia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Guia2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
