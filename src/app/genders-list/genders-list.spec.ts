import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GendersList } from './genders-list';

describe('GendersList', () => {
  let component: GendersList;
  let fixture: ComponentFixture<GendersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GendersList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GendersList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
