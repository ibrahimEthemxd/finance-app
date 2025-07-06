import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Earchive } from './earchive';

describe('Earchive', () => {
  let component: Earchive;
  let fixture: ComponentFixture<Earchive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Earchive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Earchive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
