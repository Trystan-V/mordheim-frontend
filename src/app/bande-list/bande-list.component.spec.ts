import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeListComponent } from './bande-list.component';

describe('BandeListComponent', () => {
  let component: BandeListComponent;
  let fixture: ComponentFixture<BandeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
