import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfiesReadonlyComponent } from './selfies-readonly.component';

describe('SelfiesReadonlyComponent', () => {
  let component: SelfiesReadonlyComponent;
  let fixture: ComponentFixture<SelfiesReadonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfiesReadonlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfiesReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
