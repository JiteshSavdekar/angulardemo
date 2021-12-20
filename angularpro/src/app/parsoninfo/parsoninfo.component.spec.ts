import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsoninfoComponent } from './parsoninfo.component';

describe('ParsoninfoComponent', () => {
  let component: ParsoninfoComponent;
  let fixture: ComponentFixture<ParsoninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParsoninfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParsoninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
