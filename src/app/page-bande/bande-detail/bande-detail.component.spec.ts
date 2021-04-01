import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeDetailComponent } from './bande-detail.component';

describe('BandeDetailComponent', () => {
  let component: BandeDetailComponent;
  let fixture: ComponentFixture<BandeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
