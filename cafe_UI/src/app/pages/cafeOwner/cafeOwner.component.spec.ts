import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeOwnerComponent } from './cafeOwner.component';

describe('cafeOwnerComponent', () => {
  let component: CafeOwnerComponent;
  let fixture: ComponentFixture<CafeOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
