import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectdisplay } from './projectdisplay';

describe('Projectdisplay', () => {
  let component: Projectdisplay;
  let fixture: ComponentFixture<Projectdisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projectdisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projectdisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
