import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerenBangetComponent } from './keren-banget.component';

describe('KerenBangetComponent', () => {
  let component: KerenBangetComponent;
  let fixture: ComponentFixture<KerenBangetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KerenBangetComponent]
    });
    fixture = TestBed.createComponent(KerenBangetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
