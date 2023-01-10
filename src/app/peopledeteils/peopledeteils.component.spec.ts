import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopledeteilsComponent } from './peopledeteils.component';

describe('PeopledeteilsComponent', () => {
  let component: PeopledeteilsComponent;
  let fixture: ComponentFixture<PeopledeteilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopledeteilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopledeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
