import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfiesListComponent } from './selfies-list.component';

describe('SelfiesListComponent', () => {
  let component: SelfiesListComponent;
  let fixture: ComponentFixture<SelfiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
