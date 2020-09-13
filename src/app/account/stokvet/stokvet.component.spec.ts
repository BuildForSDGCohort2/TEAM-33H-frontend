import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StokvetComponent } from './stokvet.component';

describe('StokvetComponent', () => {
  let component: StokvetComponent;
  let fixture: ComponentFixture<StokvetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StokvetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StokvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
